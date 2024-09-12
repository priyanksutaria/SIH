from flask import Flask
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from models import db
from urls import url_bp,url_bp1

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sih.db'
app.config['SECRET_KEY'] = 'mysecret'

db.init_app(app)

admin = Admin(app, name='My App Admin', template_mode='bootstrap4')
# admin.add_view(ModelView(Todo, db.session))

app.register_blueprint(url_bp, url_prefix='/api')
app.register_blueprint(url_bp1,url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)