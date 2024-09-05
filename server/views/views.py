import pickle
import numpy as np
import pandas as pd
from sklearn.cluster import AgglomerativeClustering
import os
from flask import jsonify

def jobRecommendations():
    # Load KMeans model and centroids
    kmeans_file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'kmeans_model.pkl')
    centroids_file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'centroids.pkl')
    mappings_file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'mappings.pkl')
    df2_file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'df2.pkl')

    with open(kmeans_file_path, 'rb') as f:
        kmeans = pickle.load(f)

    with open(centroids_file_path, 'rb') as f:
        centroids = pickle.load(f)

    # Load the mappings
    with open(mappings_file_path, 'rb') as f:
        mappings = pickle.load(f)
        normal_mapping = mappings['normal_mapping']
        reverse_mapping = mappings['reverse_mapping']

    # Load the DataFrame (if saved)
    df2 = pd.read_pickle(df2_file_path)

    # Define the columns used for clustering
    cols = df2.columns[:-3]  # Adjust depending on your actual columns

    # Example new input data similar to df0
    new_data = [7.89,9.23,5.01,7.45,6.34,4.78,4.01,4.56,5.67,8.67]  # Replace with your new input data
    new_df = pd.DataFrame([new_data], columns=cols)

    # Append the new data to df2
    combined_df = pd.concat([df2[cols], new_df], ignore_index=True)

    # Predict the agglomerative cluster for the combined data
    combined_df['agglomerative'] = doAgglomerative(combined_df, 6)

    # Extract the cluster label for the new data (last row in combined_df)
    new_df['agglomerative'] = combined_df['agglomerative'].iloc[-1]

    combined_df['distance_to_centroid'] = calculate_distances(combined_df, centroids, cols)

    # Map numerical indices back to actual career names using reverse_mapping
    combined_df['Career'] = combined_df['agglomerative'].map(reverse_mapping)

    # Filter the DataFrame for the specific cluster and sort by distance to the centroid
    target_cluster = new_df['agglomerative'].iloc[0]
    cluster_careers = combined_df[combined_df['agglomerative'] == target_cluster]

    # Remove duplicates based on career name
    cluster_careers = cluster_careers.drop_duplicates(subset=['Career'])

    # Sort careers by distance and select the top 3 closest
    top_3_careers = cluster_careers.sort_values(by='distance_to_centroid').head(3)

    # Displaying the top 3 careers

    recommendations = []
    for idx, row in top_3_careers.iterrows():
        career = row['Career']
        distance = row['distance_to_centroid']
        recommendations.append(career)
        print(f"Career : {career:<30}")
    
    return jsonify({'recommendation': recommendations})


# Calculate distances to the centroids
def calculate_distances(df, centroids, cols):
    distances = []
    for i, row in df.iterrows():
        centroid = centroids[int(row['agglomerative'])]
        distance = np.linalg.norm(row[cols].astype('float') - centroid)
        distances.append(distance)
    return np.array(distances)

# Function to perform Agglomerative Clustering
def doAgglomerative(X, nclust=2):
    #Prutha's code had affinity instead of metric but affinity is causing error in Kaumudi's code ////CHECK/////
    model = AgglomerativeClustering(n_clusters=nclust, metric='euclidean', linkage='ward')
    clust_labels1 = model.fit_predict(X)
    return clust_labels1