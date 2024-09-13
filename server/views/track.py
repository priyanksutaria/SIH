#this is a trial file nothing of importance, questions ithun post karun bagh

import requests
import json
import random

# Replace with your actual API endpoint
api_url = 'http://127.0.0.1:5000/OceanTest'  # Ensure the URL matches your Flask route

# Function to send a POST request with all responses
def send_batch_request(answers):
    payload = {
        'answers': answers  # Use 'answers' instead of 'responses'
    }
    headers = {
        'Content-Type': 'application/json'
    }
    response = requests.post(api_url, data=json.dumps(payload), headers=headers)
    return response

# Create a list of answers with unique question IDs
answers = []
for question_id in range(1, 20):  # Assuming question IDs from 1 to 10
    score = random.randint(1, 5)  # Random score between 1 and 5
    answers.append({
        'question_id': question_id,
        'score': score
    })

# Send all answers in one batch
response = send_batch_request(answers)
print(f"Status Code: {response.status_code}, Response: {response.text}")
