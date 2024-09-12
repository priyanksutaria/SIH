from flask import Blueprint
from views.JobRecommendation import *
from views.Questions import *

jobs_bp = Blueprint('jobs', __name__)
questions_bp = Blueprint('questions', __name__)

jobs_bp.route('/JobRecommendations')(getJobRecommendations)

questions_bp.route('/OceanQuestions')(getOceanQuestions)
questions_bp.route('/NumericQuestions')(getNumericQuestions)