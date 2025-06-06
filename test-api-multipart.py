import requests
import json
from io import BytesIO

url = "https://meri-biwi-1.onrender.com/api/register-worker"

# Create a dummy image file
dummy_photo = BytesIO(b'dummy photo content')
dummy_id = BytesIO(b'dummy id document content')

# Prepare form data with files
form_data = {
  "name": "Test Worker",
  "email": "test@example.com",
  "phone": "1234567890",
  "address": "123 Test Street",
  "city": "delhi",
  "gender": "female",
  "service": "cleaning",
  "exp": "2",
  "availability": "part-time",
  "id_proof": "aadhar",
  "id_proof_number": "123456789012",
  "dob": "1990-01-01T00:00:00.000Z",
  "about": "I am an experienced cleaner with great attention to detail and reliable service."
}

files = {
  "photo": ("photo.jpg", dummy_photo, "image/jpeg"),
  "id_document": ("document.jpg", dummy_id, "image/jpeg")
}

print(f"Sending multipart request to {url}")

try:
    response = requests.post(url, data=form_data, files=files, timeout=30)
    print(f"Status code: {response.status_code}")
    print(f"Response headers: {json.dumps(dict(response.headers), indent=2)}")
    
    try:
        print(f"Response body: {json.dumps(response.json(), indent=2)}")
    except:
        print(f"Response body (text): {response.text}")
except Exception as e:
    print(f"Error: {str(e)}")
