from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.ext.associationproxy import association_proxy
from config import db, bcrypt


class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True)
    admin = db.Column(db.String, default=False)
    _password_hash = db.Column(db.String)
    serialize_rules = ('-user_content_cart.user', '-user_content_cart.content')
    content = association_proxy('user_content_cart', 'content')
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    created_at = db.Column(db.DateTime, default=db.func.now())

    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))

    def __repr__(self):
        return f'USER: ID: {self.id}, Username: {self.username}, Admin: {self.admin}'
    

class Content(db.Model, SerializerMixin):
    __tablename__ = "content"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    video = db.Column(db.String)
    description = db.Column(db.String)
    serialize_only = ('id', 'title', 'video', 'description')
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    created_at = db.Column(db.DateTime, default=db.func.now())

    def __repr__(self):
        return f'CONTENT: ID: {self.id}, Title: {self.title}, Content: {self.content}, User: {self.user_id}'


class UserContentCart(db.Model, SerializerMixin):
    __tablename__ = "user_content_cart"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    content_id = db.Column(db.Integer, db.ForeignKey('content.id'))
    user = db.relationship('User', backref='user_content_cart')
    content = db.relationship('Content', backref='user_content_cart')
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    created_at = db.Column(db.DateTime, default=db.func.now())

    def __repr__(self):
        return f'USER_CONTENT_CART: ID: {self.id}, User ID: {self.user_id}, Content ID: {self.content_id}'
