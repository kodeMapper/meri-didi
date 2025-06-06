import requests
import json

url = "https://meri-biwi-1.onrender.com/api/register-worker"

# Try with form-encoded data
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
  "about": "I am an experienced cleaner with great attention to detail and reliable service.",
  "photo": "photo.jpg",
  "id_document": "document.jpg"
}

headers = {
  "Accept": "application/json",
  "Origin": "http://localhost:5001"
}

print(f"Sending form request to {url}")
print(f"Headers: {json.dumps(headers, indent=2)}")
print(f"Form data: {json.dumps(form_data, indent=2)}")

try:
    response = requests.post(url, headers=headers, data=form_data, timeout=30)
    print(f"Status code: {response.status_code}")
    print(f"Response headers: {json.dumps(dict(response.headers), indent=2)}")
    
    try:
        print(f"Response body: {json.dumps(response.json(), indent=2)}")
    except:
        print(f"Response body (text): {response.text}")
except Exception as e:
    print(f"Error: {str(e)}")
