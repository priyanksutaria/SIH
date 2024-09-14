# from flask_sqlalchemy import SQLAlchemy
# from app import db
from db import db

# db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userName = db.Column(db.String(50), nullable=False)
    fullName = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    dob = db.Column(db.DateTime, nullable=False)
    password= db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return '<%r>' % self.id
    

class Scores(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    o_ocean = db.Column(db.Float, nullable=False)
    c_ocean = db.Column(db.Float, nullable=False)
    e_ocean = db.Column(db.Float, nullable=False)
    a_ocean = db.Column(db.Float, nullable=False)
    n_ocean = db.Column(db.Float, nullable=False)
    numeric = db.Column(db.Float, nullable=False)
    spatial = db.Column(db.Float, nullable=False)
    perceptual = db.Column(db.Float, nullable=False)
    abstract = db.Column(db.Float, nullable=False)
    verbal = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return '<%r>' % self.id