from flask import jsonify
from models.QuestionsModel import *

def getOceanQuestions():
    questions = OCEANQuestions.query.all()

    questions_list = [
        {
            'id': question.id,
            'question': question.question,
            'trait': question.trait
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

def getPerceptualQuestions():
    questions = PerceptualQuestions.query.all()

    questions_list = [
        {
            'id': question.id,
            'question': question.question,
            'image':question.image_url,
            'options': question.options,
            'answer': question.answer
        } for question in questions
    ]

    return jsonify(questions_list)


def getSpatialQuestions():
    questions = SpatialQuestions.query.all()

    questions_list = [
        {
            'id': question.id,
            'question': question.question,
            'question_image':question.question_image,
            'options_image': question.options_image,
            'answer': question.answer
        } for question in questions
    ]

    return jsonify(questions_list)