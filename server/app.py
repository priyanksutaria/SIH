from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from db import db
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from flask_migrate import Migrate
from models.QuestionsModel import OCEANQuestions, NumericQuestions, PerceptualQuestions, SpatialQuestions
from models.UserModel import User, Scores
from urls import *

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sih.db'
app.config['SECRET_KEY'] = 'mysecret'

db.init_app(app)
# db = SQLAlchemy(app)
migrate = Migrate(app, db)

# with app.app_context():
#     db.create_all() 

admin = Admin(app, name='My App Admin', template_mode='bootstrap4')



admin.add_view(ModelView(OCEANQuestions, db.session))
admin.add_view(ModelView(NumericQuestions, db.session))
admin.add_view(ModelView(PerceptualQuestions, db.session))
admin.add_view(ModelView(SpatialQuestions, db.session))

admin.add_view(ModelView(User, db.session))
admin.add_view(ModelView(Scores, db.session))
admin.add_view(ModelView(Top3Careers,db.session))

app.register_blueprint(user_bp,url_prefix='/')
app.register_blueprint(jobs_bp, url_prefix='/')
app.register_blueprint(questions_bp, url_prefix='/')
app.register_blueprint(audio_bp,url_prefix='/')
app.register_blueprint(score_bp,url_prefix='/')


if __name__ == '__main__':
    app.run(debug=True)