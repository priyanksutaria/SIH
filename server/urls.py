from flask import Blueprint
from views.views import jobRecommendations,AudioProcessing

url_bp = Blueprint('jobs', __name__)
url_bp1=Blueprint('test', __name__)

url_bp.route('/GetJobRecommendations')(jobRecommendations)
url_bp1.route('/VerbalAbstractTest')(AudioProcessing)