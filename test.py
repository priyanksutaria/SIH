import pandas as pd
import numpy as np
import pickle
from sklearn.preprocessing import StandardScaler
from scipy.spatial.distance import cdist

# Load the saved model, scaler, and resampled dataframe
with open('kmeans_model.pkl', 'rb') as f:
    kmeans = pickle.load(f)

with open('scaler.pkl', 'rb') as f:
    scaler = pickle.load(f)

# Load the resampled dataframe that contains the career and cluster information
df_resampled = pd.read_pickle('df_resampled.pkl')

# Function to use hardcoded user input
def get_hardcoded_input():
    
    # Store the input values in a list (or array)
    user_input = np.array([[8.78,5.67,4.56,6.45,4.23,5.12,8.45,7.89,6.34,6.01]])
    
    return user_input

# Function to predict the cluster and retrieve top 3 distinct careers based on proximity
def predict_career():
    # Use hardcoded user input
    user_input = get_hardcoded_input()
    
    # Scale the input using the same scaler as in training
    user_input_scaled = scaler.transform(user_input)
    
    # Predict the cluster using the trained KMeans model
    predicted_cluster = kmeans.predict(user_input_scaled)[0]
    
    print(f"\nPredicted Cluster: {predicted_cluster}")
    
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
    
    # Print the top 3 distinct careers
    print("\nTop 3 career recommendations:")
    for career in top_careers:
        print(f"- {career}")

# Call the function to run the prediction
predict_career()
