import pickle
import numpy as np
import pandas as pd
from sklearn.cluster import AgglomerativeClustering
import os
from scipy.spatial.distance import cdist
from .analyze import grade_student_response
from flask import jsonify

current=os.getcwd()

UPLOAD_FOLDER = os.path.join(current,'uploads')
print(UPLOAD_FOLDER)
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


def jobRecommendations():
    # Load KMeans model and centroids
    kmeans_file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'kmeans_model.pkl')
    scaler_file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'scaler.pkl')
    #mappings_file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'mappings.pkl')
    df2_file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'df_resampled.pkl')
    with open(kmeans_file_path, 'rb') as f:
        kmeans = pickle.load(f)

    with open(scaler_file_path, 'rb') as f:
        scaler = pickle.load(f)

    with open(kmeans_file_path, 'rb') as f:
        kmeans = pickle.load(f)
    df_resampled = pd.read_pickle(df2_file_path)


    # Example new input data similar to df0
    user_input = np.array([[8.78,5.67,4.56,6.45,4.23,5.12,8.45,7.89,6.34,6.01]])  # Replace with your new input data
    user_input_scaled = scaler.transform(user_input)
    
    # Predict the cluster using the trained KMeans model
    predicted_cluster = kmeans.predict(user_input_scaled)[0]
        
        #print(f"\nPredicted Cluster: {predicted_cluster}")
        
        # Get the data points belonging to the predicted cluster
    careers_in_cluster = df_resampled[df_resampled['Cluster'] == predicted_cluster]
        
        # Calculate distances between the new input and every point in the predicted cluster
    cluster_points = careers_in_cluster.iloc[:, :-2].values  # Exclude 'Career' and 'Cluster' columns
    distances = cdist(user_input_scaled, cluster_points, metric='euclidean')[0]
        
        # Add distances to the DataFrame
    careers_in_cluster = careers_in_cluster.copy()
    careers_in_cluster['Distance'] = distances
        
        # Sort the DataFrame by distance
    careers_in_cluster_sorted = careers_in_cluster.sort_values(by='Distance')
        
        # Get 3 distinct careers by removing duplicates
    top_careers = []
    for career in careers_in_cluster_sorted['Career']:
        if career not in top_careers:
            top_careers.append(career)
        if len(top_careers) == 3:
            break
        
    
    return jsonify({'top_careers': top_careers})


def AudioProcessing():
    #when audio will be uploaded
    # if 'file' not in request.files:
    #     return "No file part", 400
    
    # file = request.files['file']
    
    # if file.filename == '':
    #     return "No selected file", 400
    # file.save(os.path.join(UPLOAD_FOLDER, file.filename))
    # file_name = os.path.join(UPLOAD_FOLDER, file.filename)
    #verbal_score, abstract_score = grade_student_response(file_name)
    verbal_score, abstract_score = grade_student_response(os.path.join(UPLOAD_FOLDER,'WhatsApp Audio 2024-09-10 at 11.32.50 AM.mp4'))

    #os.remove(file_name)
    return jsonify({
        "Verbal_score": verbal_score,
        "Abstract_score": abstract_score
    })

