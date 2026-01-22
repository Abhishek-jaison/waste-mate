"""
Utility module to extract material/class information from Roboflow API responses.
Handles various possible response structures from Roboflow.
"""
from typing import Optional

def extract_material(roboflow_response: dict) -> Optional[str]:
    """
    Extract the detected material/class from Roboflow response.
    
    Handles multiple possible Roboflow response formats:
    - Object detection: predictions[0].class
    - Classification: top, predicted_class, or class
    - Single prediction: class field
    
    Args:
        roboflow_response: JSON response from Roboflow API
        
    Returns:
        Material string if found, None otherwise
    """
    if not isinstance(roboflow_response, dict):
        return None
    
    # Try object detection format: predictions array
    if "predictions" in roboflow_response:
        predictions = roboflow_response["predictions"]
        if isinstance(predictions, list) and len(predictions) > 0:
            first_prediction = predictions[0]
            if isinstance(first_prediction, dict):
                # Try common class field names
                for field in ["class", "predicted_class", "name", "label"]:
                    if field in first_prediction:
                        class_value = first_prediction[field]
                        if isinstance(class_value, str) and class_value.strip():
                            return class_value.strip()
    
    # Try classification format: top prediction
    if "top" in roboflow_response:
        top = roboflow_response["top"]
        if isinstance(top, str) and top.strip():
            return top.strip()
    
    # Try direct class/predicted_class fields
    for field in ["class", "predicted_class", "prediction", "label"]:
        if field in roboflow_response:
            value = roboflow_response[field]
            if isinstance(value, str) and value.strip():
                return value.strip()
    
    # Try nested structure: result.class or result.predicted_class
    if "result" in roboflow_response:
        result = roboflow_response["result"]
        if isinstance(result, dict):
            for field in ["class", "predicted_class", "prediction"]:
                if field in result:
                    value = result[field]
                    if isinstance(value, str) and value.strip():
                        return value.strip()
    
    return None
