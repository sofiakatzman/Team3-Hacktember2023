from flask_restful import Resource
from models.models import User
from config import api, db, request, make_response, abort, session, jsonify

class UserList(Resource):
  def get(self):
          users = [user.to_dict() for user in User.query.all()]
          return jsonify(users)
      
  def post(self):
      form_json = request.get_json()
      new_user = User(username=form_json['username'])
      
      # Hashes password and saves it to _password_hash
      new_user.password_hash = form_json['password']

      db.session.add(new_user)
      db.session.commit()
      session['user_id'] = new_user.id
      response = make_response(
          new_user.to_dict(),
          201
      )
      return response
  
class UserByID(Resource):
    def get(self, id):
        user = User.query.filter_by(id=id).first()
        return jsonify(user.to_dict())
    
    def delete(self, id):
        user = User.query.filter_by(id=id).first()
        db.session.delete(user)
        db.session.commit()
        response = make_response(
            user.to_dict(),
            200
        )
        return response
    
    def put(self, id):
        user = User.query.filter_by(id=id).first()
        form_json = request.get_json()
        user.username = form_json['username']
        user.password_hash = form_json['password']
        db.session.commit()
        response = make_response(
            user.to_dict(),
            200
        )
        return response


api.add_resource(UserByID, '/api/users/<int:id>')  
api.add_resource(UserList, '/api/users', endpoint='users')