from flask import request, jsonify
from models.UserModel import *
from datetime import datetime

def createUser():
    data = request.get_json()

    dob_str = data.get('dob')
    if dob_str:
        dob = datetime.strptime(dob_str, '%Y-%m-%d').date()
    
    new_user = User(userName=data['userName'], 
                    fullName=data['fullName'], 
                    email=data['email'], 
                    dob=dob,
                    password=data['password'])
    
    # Add new user to session
    db.session.add(new_user)
    db.session.commit()

    # After committing the user, create an empty Scores record for this user
    new_scores = Scores(
        user_id=new_user.id,
        o_ocean=0.0, c_ocean=0.0, e_ocean=0.0, a_ocean=0.0, n_ocean=0.0,
        numeric=0.0, spatial=0.0, perceptual=0.0, abstract=0.0, verbal=0.0
    )
    
    db.session.add(new_scores)
    db.session.commit()
    
    user_data = {
        'id': new_user.id,
        'userName': new_user.userName,
        'fullName': new_user.fullName,
        'email': new_user.email,
        'dob': new_user.dob.isoformat()  # Convert date to a string format
    }

    # Return a success message along with the user data in JSON format
    return jsonify({'message': 'User created successfully', 'user': user_data}), 201