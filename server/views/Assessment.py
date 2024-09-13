from flask import request,jsonify
from models.QuestionsModel import * 
from blueprints import ocean_bp
 
 #scaling formula for 8 questions per personality
def scaling(raw_score):
    return ((raw_score - 8) / 32) * 10       

@ocean_bp.route('/OceanTest', methods=['POST'])      #this is to be removed later
def ocean():     #data to be sent as paramter or what ???
    data=request.get_json()
    total_o_score = 0
    total_c_score = 0
    total_e_score = 0
    total_a_score = 0
    total_n_score = 0
    for answer in data['answers']:
        question=OCEANQuestions.query.filter_by(id=answer['question_id']).first()
        score=answer['score']
        if question.keying =='negative':
            score=6-score
        if question.trait == 'Openness':
            total_o_score+=score
        elif question.trait =='Conscientiousness':
            total_c_score+=score
        elif question.trait == 'Extraversion':
            total_e_score+=score
        elif question.trait == 'Agreeableness':
            total_a_score+=score   
        else:
            total_n_score+=score 
    o_score=scaling(total_o_score)
    c_score=scaling(total_c_score)
    e_score=scaling(total_e_score)
    a_score=scaling(total_a_score)
    n_score=scaling(total_n_score)
    return jsonify( {
        'Openness': o_score,
        'Conscientiousness': c_score,
        'Extraversion': e_score,
        'Agreeableness': a_score,
        'Neuroticism': n_score
    })

            

            
        

