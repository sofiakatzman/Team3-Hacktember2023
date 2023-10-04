from flask_restful import Resource
from models.models import Content, UserContentCart, User
from config import api, db, request, make_response, jsonify


class ContentList(Resource):
    def get(self): #get a list of all content
        content = [content.to_dict() for content in Content.query.all()]
        return jsonify(content)
    
    def post(self): #add a new content to the database
        form_json = request.get_json()
        new_content = Content(title=form_json['title'], video=form_json['video'], description=form_json['description'], genre=form_json['genre'])
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
    
class AddContentToCart(Resource):
    def post(self, id): #add a specific content to the cart by id
        form_json = request.get_json()
        add_content = Content(title=form_json['title'], video=form_json['video'], description=form_json['description'], genre=form_json['genre'])
        db.session.add(add_content)
        db.session.commit()

        add_content_to_cart = UserContentCart(user_id = id, content_id = add_content.id)
        db.session.add(add_content_to_cart)
        db.session.commit()
        response = make_response(
            add_content.to_dict(),
            201
        )
        return response



api.add_resource(ContentList, '/api/content')
api.add_resource(ContentByID, '/api/content/<int:id>')
api.add_resource(AddContentToCart, '/api/content/<int:id>/addtocart')

