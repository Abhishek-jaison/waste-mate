import os
import json
import re
from pathlib import Path
from dotenv import load_dotenv
from typing import Optional, Dict
from google import genai
from google.genai import types

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")

# Initialize from environment variable
API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    # We do not crash here, validation happens at call time or via .env check
    # But for module level, we just let it be, the function will handle missing keys if needed, 
    # though strict requirement says "API key MUST be read from environment variable".
    pass 

# Initialize client globally to reuse connection
# User requirement: "The API key is from Google AI Studio"
# User requirement: "Use ONLY the google-genai package"
try:
    if API_KEY:
        client = genai.Client(api_key=API_KEY)
    else:
        client = None
except Exception as e:
    # Fallback to None if initialization fails (e.g. bad key format), handle in function
    client = None
    print(f"Warning: Gemini client failed to initialize: {e}")

MODEL_NAME = "gemini-flash-latest"  # Fallback to generic alias which should map to a valid free tier model

def generate_waste_advice(material: str) -> Optional[Dict]:
    """
    Generates waste management advice for a detected material using Google Gemini.
    
    Args:
        material: The name of the detected material.
        
    Returns:
        Structured dictionary with advice, or None if generation fails.
    """
    if not client:
        print("Error: Gemini client not initialized (check GEMINI_API_KEY)")
        return None
        
    if not material:
        return None

    prompt = f"""
You are an expert in waste management and creative upcycling.

Material detected: {material}

Respond ONLY in valid JSON using this schema:
{{
  "material": "{material}",
  "practical_reuse": ["string", "string"],
  "creative_upcycling_ideas": ["string", "string"],
  "disposal_methods": ["string", "string"],
  "recycling_guidelines": ["string", "string"],
  "youtube_search_links": ["string"]
}}
"""

    try:
        # User requirement: Do NOT use REST calls. Use google-genai.
        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=prompt,
        )
        
        if not response.text:
            return None

        # Clean response text (remove Markdown code blocks if present)
        text = response.text.strip()
        # Regex to remove ```json ... ``` or just ``` ... ```
        # This handles the "Fragile JSON parsing" issue
        text = re.sub(r"^```(?:json)?\s*", "", text, flags=re.IGNORECASE)
        text = re.sub(r"\s*```$", "", text, flags=re.IGNORECASE)
        text = text.strip()

        return json.loads(text)

    except Exception as e:
        # User requirement: "If Gemini fails, return None (do not crash the backend)"
        print(f"Gemini generation error: {e}")
        return None
