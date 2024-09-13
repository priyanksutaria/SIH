from flask import Flask
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from models.QuestionsModel import *
from urls import jobs_bp, questions_bp,audio_bp,ocean_bp

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sih.db'
app.config['SECRET_KEY'] = 'mysecret'

db.init_app(app)

with app.app_context():
    db.create_all() 

admin = Admin(app, name='My App Admin', template_mode='bootstrap4')
admin.add_view(ModelView(OCEANQuestions, db.session))
admin.add_view(ModelView(NumericQuestions, db.session))

app.register_blueprint(jobs_bp, url_prefix='/')
app.register_blueprint(questions_bp, url_prefix='/')
app.register_blueprint(audio_bp,url_prefix='/')
app.register_blueprint(ocean_bp,url_prefix='/')


if __name__ == '__main__':
    app.run(debug=True)