from .user import *
from .auth import *
from .content import *
from config import OPENAI_API_KEY, requests, app, request

# chat bot route
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