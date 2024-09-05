from flask import Blueprint
from views.views import jobRecommendations

url_bp = Blueprint('jobs', __name__)

url_bp.route('/GetJobRecommendations')(jobRecommendations)