import pickle
import numpy as np
import pandas as pd
from sklearn.cluster import AgglomerativeClustering

# Load KMeans model and centroids
with open('kmeans_model.pkl', 'rb') as f:
    kmeans = pickle.load(f)

with open('centroids.pkl', 'rb') as f:
    centroids = pickle.load(f)

# Load the mappings
with open('mappings.pkl', 'rb') as f:
    mappings = pickle.load(f)
    normal_mapping = mappings['normal_mapping']
    reverse_mapping = mappings['reverse_mapping']

# Load the DataFrame (if saved)
df2 = pd.read_pickle('df2.pkl')

# Define the columns used for clustering
cols = df2.columns[:-3]  # Adjust depending on your actual columns

# Example new input data similar to df0
new_data = [5.45,8.67,3.45,5.34,4.23,9.23,4.56,6.78,7.89,6.12]  # Replace with your new input data
new_df = pd.DataFrame([new_data], columns=cols)

# Append the new data to df2
combined_df = pd.concat([df2[cols], new_df], ignore_index=True)

# Function to perform Agglomerative Clustering
def doAgglomerative(X, nclust=2):
    model = AgglomerativeClustering(n_clusters=nclust, affinity='euclidean', linkage='ward')
    clust_labels1 = model.fit_predict(X)
    return clust_labels1

# Predict the agglomerative cluster for the combined data
combined_df['agglomerative'] = doAgglomerative(combined_df, 6)

# Extract the cluster label for the new data (last row in combined_df)
new_df['agglomerative'] = combined_df['agglomerative'].iloc[-1]

# Calculate distances to the centroids
def calculate_distances(df, centroids):
    distances = []
    for i, row in df.iterrows():
        centroid = centroids[int(row['agglomerative'])]
        distance = np.linalg.norm(row[cols].astype('float') - centroid)
        distances.append(distance)
    return np.array(distances)

combined_df['distance_to_centroid'] = calculate_distances(combined_df, centroids)

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

for idx, row in top_3_careers.iterrows():
    career = row['Career']
    distance = row['distance_to_centroid']
    print(f"Career {idx+1}: {career:<30}")

