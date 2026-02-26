import os
import io
import uuid
from pathlib import Path

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import cv2
import numpy as np
from ultralytics import YOLO

app = Flask(__name__, static_folder="../frontend/dist")
CORS(app)

# Load the model directly so Gunicorn triggers it when loading the app.
load_model_on_startup = True

# ========================== Configuration ==========================
UPLOAD_FOLDER = Path("static/uploads")
RESULT_FOLDER = Path("static/results")
UPLOAD_FOLDER.mkdir(parents=True, exist_ok=True)
RESULT_FOLDER.mkdir(parents=True, exist_ok=True)

MODEL_PATH = os.environ.get(
    "MODEL_PATH",
    "wastesort-yolov8/wastesort-v13/weights/best.pt"
)

CONFIDENCE_THRESHOLD = float(os.environ.get("CONFIDENCE", "0.25"))

CLASS_NAMES = {
    0: "PET",
    1: "PEAD",
    2: "Mixed Plastic (Soft)",
    3: "ECAL",
    4: "Metal",
    5: "Cardboard",
    6: "Mixed Plastic (Rigid)",
    7: "PET Oleo",
}

CLASS_COLORS = {
    0: (0, 255, 0),
    1: (255, 128, 0),
    2: (0, 165, 255),
    3: (0, 255, 255),
    4: (128, 128, 128),
    5: (0, 100, 200),
    6: (255, 0, 128),
    7: (50, 205, 50),
}

RECYCLING_INFO = {
    "PET": {
        "bin": "Plastic Recycling (Yellow Bin)",
        "tips": [
            "Rinse the container before recycling",
            "Remove caps and labels if possible",
            "Crush to save space in the recycling bin",
            "PET bottles can be recycled into new bottles, clothing, or carpeting",
        ],
        "recyclable": True,
    },
    "PEAD": {
        "bin": "Plastic Recycling (Yellow Bin)",
        "tips": [
            "PEAD/HDPE is one of the most commonly recycled plastics",
            "Rinse containers of food residue",
            "Can be recycled into pipes, lumber, and playground equipment",
            "Do not recycle if contaminated with hazardous materials",
        ],
        "recyclable": True,
    },
    "Mixed Plastic (Soft)": {
        "bin": "Soft Plastic Collection Point",
        "tips": [
            "Soft plastics often cannot go in regular recycling bins",
            "Look for REDcycle or soft plastic collection points at supermarkets",
            "Includes plastic bags, cling wrap, and bubble wrap",
            "Clean and dry before dropping off",
        ],
        "recyclable": True,
    },
    "ECAL": {
        "bin": "Carton/Tetra Pak Recycling",
        "tips": [
            "ECAL (beverage cartons) are recyclable in many areas",
            "Rinse and flatten before recycling",
            "Remove plastic caps if present",
            "These contain layers of cardboard, plastic, and aluminum",
        ],
        "recyclable": True,
    },
    "Metal": {
        "bin": "Metal Recycling (Yellow Bin)",
        "tips": [
            "Metal is infinitely recyclable without quality loss",
            "Rinse food cans before recycling",
            "Aluminum cans save 95% energy when recycled vs new production",
            "Remove paper labels if easily removable",
        ],
        "recyclable": True,
    },
    "Cardboard": {
        "bin": "Paper/Cardboard Recycling (Blue Bin)",
        "tips": [
            "Flatten boxes to save space",
            "Remove tape, staples, and plastic windows",
            "Keep dry - wet cardboard cannot be recycled",
            "Pizza boxes with grease stains should go to compost instead",
        ],
        "recyclable": True,
    },
    "Mixed Plastic (Rigid)": {
        "bin": "Plastic Recycling (Yellow Bin)",
        "tips": [
            "Rigid plastics include containers, trays, and tubs",
            "Check for the recycling number on the bottom",
            "Rinse to remove food residue",
            "Some rigid plastics may not be accepted - check local guidelines",
        ],
        "recyclable": True,
    },
    "PET Oleo": {
        "bin": "Plastic Recycling (Yellow Bin)",
        "tips": [
            "PET oil containers need thorough rinsing before recycling",
            "Oil residue can contaminate recycling batches",
            "If heavily contaminated, dispose in general waste",
            "Consider reusing the container for non-food storage",
        ],
        "recyclable": True,
    },
}

# ========================== Model Loading ==========================
model = None

def load_model():
    global model
    if os.path.exists(MODEL_PATH):
        model = YOLO(MODEL_PATH)
        print(f"Model loaded from {MODEL_PATH}")
    else:
        print(f"WARNING: Model not found at {MODEL_PATH}")

load_model()

# ========================== Explicit Static Routes ==========================
@app.route("/static/uploads/<filename>")
def serve_uploads(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route("/static/results/<filename>")
def serve_results(filename):
    return send_from_directory(RESULT_FOLDER, filename)

# ========================== API Routes ==========================
@app.route("/detect", methods=["POST"])
def detect():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files["image"]
    if file.filename == "":
        return jsonify({"error": "No file selected"}), 400

    if model is None:
        return jsonify({"error": "Model not loaded. Train the model first."}), 503

    # Save uploaded image
    ext = Path(file.filename).suffix or ".jpg"
    filename = f"{uuid.uuid4().hex}{ext}"
    upload_path = UPLOAD_FOLDER / filename
    file.save(str(upload_path))

    # Run detection
    results = model.predict(
        source=str(upload_path),
        conf=CONFIDENCE_THRESHOLD,
        iou=0.45,
        verbose=False,
    )

    result = results[0]
    img = cv2.imread(str(upload_path))

    detections = []
    detected_classes = set()

    for box in result.boxes:
        cls_id = int(box.cls[0])
        conf = float(box.conf[0])
        x1, y1, x2, y2 = map(int, box.xyxy[0].tolist())
        class_name = CLASS_NAMES.get(cls_id, f"class_{cls_id}")
        color = CLASS_COLORS.get(cls_id, (0, 255, 0))

        detected_classes.add(class_name)
        detections.append({
            "class": class_name,
            "confidence": round(conf * 100, 1),
            "bbox": [x1, y1, x2, y2],
        })

        # Draw bounding box
        cv2.rectangle(img, (x1, y1), (x2, y2), color, 2)

        # Draw label background
        label = f"{class_name} {conf:.0%}"
        (tw, th), _ = cv2.getTextSize(label, cv2.FONT_HERSHEY_SIMPLEX, 0.6, 1)
        cv2.rectangle(img, (x1, y1 - th - 10), (x1 + tw + 4, y1), color, -1)
        cv2.putText(img, label, (x1 + 2, y1 - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 1)

    # Save annotated image
    result_filename = f"result_{filename}"
    result_path = RESULT_FOLDER / result_filename
    cv2.imwrite(str(result_path), img)

    # Build recycling suggestions
    suggestions = []
    for cls_name in sorted(detected_classes):
        info = RECYCLING_INFO.get(cls_name, {})
        suggestions.append({
            "waste_type": cls_name,
            "bin": info.get("bin", "Check local guidelines"),
            "tips": info.get("tips", []),
            "recyclable": info.get("recyclable", False),
        })

    return jsonify({
        "annotated_image": f"/static/results/{result_filename}",
        "original_image": f"/static/uploads/{filename}",
        "detections": detections,
        "total_objects": len(detections),
        "unique_waste_types": len(detected_classes),
        "suggestions": suggestions,
    })

# ========================== React Catch-All ==========================
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    load_model()
    # Render assigns the port dynamically via the PORT environment variable.
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
