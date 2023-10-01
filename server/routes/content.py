from flask_restful import Resource
from models.models import Content, UserContentCart, User
from config import api, db, request, make_response, abort, session, jsonify


class ContentList(Resource):
    def get(self):
        content = [content.to_dict() for content in Content.query.all()]
        return jsonify(content)
    
    def post(self):

        form_json = request.get_json()
        new_content = Content(title=form_json['title'], video=form_json['video'], description=form_json['description'])
        
        db.session.add(new_content)
        db.session.commit()
        response = make_response(
            new_content.to_dict(),
            201
        )
        return response
    
api.add_resource(ContentList, '/api/content')
