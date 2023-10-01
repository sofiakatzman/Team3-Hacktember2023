from flask_restful import Resource
from models.models import Content, UserContentCart, User
from config import api, db, request, make_response, jsonify


class ContentList(Resource):
    def get(self): #get a list of all content
        content = [content.to_dict() for content in Content.query.all()]
        return jsonify(content)
    
    def post(self): #add a new content to the database
        form_json = request.get_json()
        new_content = Content(title=form_json['title'], video=form_json['video'], description=form_json['description'])
        db.session.add(new_content)
        db.session.commit()
        response = make_response(
            new_content.to_dict(),
            201
        )
        return response

class ContentByID(Resource):
    def get(self, id): #get a specific content by id
        content = Content.query.filter_by(id=id).first()
        return jsonify(content.to_dict())
    
    def delete(self, id): #delete a specific content by id
        content = Content.query.filter_by(id=id).first()
        db.session.delete(content)
        db.session.commit()
        response = make_response(
            content.to_dict(),
            200
        )
        return response

api.add_resource(ContentList, '/api/content')
api.add_resource(ContentByID, '/api/content/<int:id>')

