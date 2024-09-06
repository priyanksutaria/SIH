import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from imblearn.over_sampling import RandomOverSampler
from sklearn.preprocessing import StandardScaler
import pickle

# Load the CSV file (replace with the actual path to your CSV file)
df = pd.read_csv(r'C:\Users\Prutha Kulkarni\Desktop\SIH\Data_final.csv')

# Define the features (X) and the target (y) (in this case, y is the Career column)
X = df.iloc[:, :-1]  # All columns except the last (which is 'Career')
y = df['Career']     # The 'Career' column

# Perform standard scaling (normalizing the features)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Apply Random Oversampling to balance the career classes
ros = RandomOverSampler(sampling_strategy='auto', random_state=42)
X_resampled, y_resampled = ros.fit_resample(X_scaled, y)

# Perform KMeans clustering on the resampled data
n_clusters = 6  # You can adjust this based on your needs
kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init=10)
kmeans.fit(X_resampled)

# Get cluster labels
cluster_labels = kmeans.labels_

# Add the cluster labels to the resampled dataframe
df_resampled = pd.DataFrame(X_resampled, columns=df.columns[:-1])
df_resampled['Career'] = y_resampled
df_resampled['Cluster'] = cluster_labels

# Optionally, show 3 random careers per cluster (or the first 3 careers per cluster)
top_careers = df_resampled.groupby('Cluster').apply(lambda x: x.sample(n=3, random_state=42) if len(x) >= 3 else x).reset_index(drop=True)

# Print 3 example careers for each cluster
for cluster in range(n_clusters):
    cluster_data = top_careers[top_careers['Cluster'] == cluster]
    print(f"\nCluster {cluster}:")
    print("----------------------------")
    for i in range(len(cluster_data)):
        print(f"Career: {cluster_data.iloc[i]['Career']}")

# Save the final model and resampled dataframe
df_resampled.to_pickle('df_resampled.pkl')

# Save the KMeans model
with open('kmeans_model.pkl', 'wb') as f:
    pickle.dump(kmeans, f)

# Save the scaler
with open('scaler.pkl', 'wb') as f:
    pickle.dump(scaler, f)
