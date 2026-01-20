import os
import requests
from dotenv import load_dotenv
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")

API_KEY = os.getenv("ROBOFLOW_API_KEY")
MODEL_ID = os.getenv("ROBOFLOW_MODEL_ID")

ROBOFLOW_URL = f"https://serverless.roboflow.com/{MODEL_ID}?api_key={API_KEY}"

def run_inference(image_path: str):
    if not MODEL_ID:
        raise ValueError("ROBOFLOW_MODEL_ID not set")

    with open(image_path, "rb") as image_file:
        response = requests.post(
            ROBOFLOW_URL,
            files={"file": image_file}
        )

    if response.status_code != 200:
        raise RuntimeError(response.text)

    return response.json()
