# Standard library imports
from dotenv import load_dotenv
import os
load_dotenv()

# Remote library imports
from flask import Flask, request, jsonify, make_response, abort, session, render_template
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from flask_bcrypt import Bcrypt
# from flask_socketio import SocketIO
import psycopg2
import requests

# Local imports

# Instantiate app, set attributes
app = Flask(
    __name__,
    static_url_path="",
    static_folder="../client/build",
    template_folder="../client/build",
)

# for deployment db 
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI') 
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False
app.secret_key = "900504cb3ab4a1f6264d2djiY"
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")

# Define metadata, instantiate db
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db)
db.init_app(app)

# Instantiate Bcrypt
bcrypt = Bcrypt(app)
# Instantiate REST API
api = Api(app)

# Instantiate CORS
CORS(app, resources={r"/api/*": {"origins": "https://hackathonsubmission.onrender.com"}})




#Instantiate SocketIO server
# socketio = SocketIO(app, cors_allowed_origins="*")