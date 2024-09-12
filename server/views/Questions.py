from flask import jsonify
from models.QuestionsModel import *

def getOceanQuestions():
    questions = OCEANQuestions.query.all()

    questions_list = [
        {
            'id': question.id,
            'question': question.question
        } for question in questions
    ]

    return jsonify(questions_list)

def getNumericQuestions():
    questions = NumericQuestions.query.all()

    questions_list = [
        {
            'id': question.id,
            'question': question.question,
            'options': question.options,
            'answer': question.answer
        } for question in questions
    ]

    return jsonify(questions_list)