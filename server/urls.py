from flask import Blueprint
from views.JobRecommendation import *
from views.Questions import *
from views.AudioProcessing import *
from views.Assessment import *
from views.UserView import *

user_bp = Blueprint('users', __name__)
jobs_bp = Blueprint('jobs', __name__)
questions_bp = Blueprint('questions', __name__)
audio_bp=Blueprint('test', __name__)
score_bp=Blueprint('score',__name__)

user_bp.route('/RegisterUser', methods=['POST'])(createUser)

jobs_bp.route('/JobRecommendations')(getJobRecommendations)

questions_bp.route('/OceanQuestions')(getOceanQuestions)
questions_bp.route('/NumericQuestions')(getNumericQuestions)
questions_bp.route('/PerceptualQuestions')(getPerceptualQuestions)
questions_bp.route('/SpatialQuestions')(getSpatialQuestions)

audio_bp.route('/VerbalAbstractScore')(AudioProcessing)
score_bp.route('/OceanScore', methods=['POST'])(calculateOCEANScore)
score_bp.route('/NumericScore', methods=['POST'])(calculateNumericScore)
score_bp.route('/PerceptualScore', methods=['POST'])(calculatePerceptualScore)
score_bp.route('/SpatialScore', methods=['POST'])(calculateSpatialScore)