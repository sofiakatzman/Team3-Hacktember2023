# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS library
import requests
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)  # Initialize CORS with your app instance

load_dotenv()
# Load your API key from an environment variable or secret management service
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")

@app.route('/api/chat', methods=['POST'])
def chat():
    payload = request.json
    headers = {
        "Authorization": f"Bearer {OPENAI_API_KEY}",
        "Content-Type": "application/json"
    }
    response = requests.post(
        "https://api.openai.com/v1/chat/completions",
        headers=headers,
        json=payload
    )
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(port=5000)  # will run on http://localhost:5000
