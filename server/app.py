from flask import Flask, request, jsonify, render_template
from config import app, jsonify
from routes.routes import *


@app.route('/api/users')
def api_users():
    # Add logic here to handle API requests if needed
    return jsonify({"message": "API endpoint for users"})

@app.route('/')
@app.route('/home')
@app.route('/auth')
@app.route('/useronly')

def index(id=0):
    return render_template("index.html")

if __name__ == '__main__':
    app.run(port=5000)  # will run on http://localhost:5000
