from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import JSON

db = SQLAlchemy()

class OCEANQuestions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(500), nullable=False)
    trait = db.Column(db.String(50), nullable=False)
    keying = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return '<%r>' % self.id


class NumericQuestions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(500), nullable=False)
    options = db.Column(JSON, nullable=False)
    answer = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return '<%r>' % self.id
    


    

