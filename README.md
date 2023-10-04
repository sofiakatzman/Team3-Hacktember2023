# ChatGTP Chatbot

## This is a simple chatbot built using React for the frontend and Flask for the backend. It leverages OpenAI's GPT-3 API to generate responses.

## Features:
* Real-time chat interface.
* Integrated with OpenAI's GPT-3 API.
* Instructions for beginners, ensuring clarity and simplicity.


## Requirements:
1. Node.js and npm.
2. Integrated with OpenAI's GPT-3 API.
pipenv shell

## Getting Started:
Setup Backend:
1. Navigate to the backend directory (where your app.py is located).
2. Create a virtual environment:

```bash
python3 -m venv venv
```
3. Activate the virtual environment:
* Windows:
```bash
.\venv\Scripts\activate
```

* Mac/Linux:
```bash
source venv/bin/activate
```

4. Install the required Python packages:
```bash
pip install flask flask_cors python-dotenv requests

```
5. Set up an environment variable for your OpenAI API key. Create a .env file in the backend directory and add:
```bash
OPENAI_API_KEY=your_api_key_here
```
6. Start the Flask server:
```bash
python app.py
```

Setup Frontend:
1. Navigate to the frontend directory (where your App.js is located).
2. Install the necessary npm packages:
```bash
npm install
```
3. Start the React development server:
```bash
npm start
```
Now, your frontend application should be running at http://localhost:3000/, and it will communicate with the backend server running on http://localhost:5000/.

## Customizations:
To guide the model's responses, modify the systemMessage constant in App.js. For example, to make the model explain things as if speaking to a beginner programmer, set:

```bash
const systemMessage = {
  "role": "system", 
  "content": "Explain things like you're talking to a beginner software programmer."
}
```
You can adjust the content as per your requirements, for instance, for experienced programmers, or for any other contextual guidance.

