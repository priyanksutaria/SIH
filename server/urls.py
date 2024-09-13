from flask import Blueprint
from views.JobRecommendation import *
from views.Questions import *
from views.AudioProcessing import *
from views.Assessment import *
# from blueprints import ocean_bp

jobs_bp = Blueprint('jobs', __name__)
questions_bp = Blueprint('questions', __name__)
audio_bp=Blueprint('test', __name__)
score_bp=Blueprint('score',__name__)

jobs_bp.route('/JobRecommendations')(getJobRecommendations)

questions_bp.route('/OceanQuestions')(getOceanQuestions)
questions_bp.route('/NumericQuestions')(getNumericQuestions)

audio_bp.route('/VerbalAbstractTest')(AudioProcessing)

score_bp.route('/OceanScore', methods=['POST'])(calculateOCEANScore)
score_bp.route('/NumericScore', methods=['POST'])(calculateNumericScore)