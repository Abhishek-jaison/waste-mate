from fastapi import FastAPI, UploadFile, File, HTTPException
import tempfile
import os

from roboflow_client import run_inference
from response_parser import extract_material
from gemini_client import generate_waste_advice

app = FastAPI()


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")

    temp_path = None
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as temp:
            contents = await file.read()
            temp.write(contents)
            temp_path = temp.name

        # Run Roboflow inference
        roboflow_result = run_inference(temp_path)
        
        # Extract material from Roboflow response
        material = extract_material(roboflow_result)
        
        # Initialize response structure
        response_data = {
            "roboflow": roboflow_result,
            "material": material,
            "gemini": None,
            "gemini_error": None
        }
        
        # Call Gemini if material was detected
        if material:
            gemini_result = generate_waste_advice(material)
            if gemini_result:
                response_data["gemini"] = gemini_result
            else:
                response_data["gemini_error"] = "Guidance generation failed or unavailable"
        else:
            response_data["gemini_error"] = "No material detected - guidance unavailable"
        
        return {
            "success": True,
            "result": response_data
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    finally:
        if temp_path and os.path.exists(temp_path):
            os.remove(temp_path)
