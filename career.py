import random
import numpy as np
import pandas as pd
import pylab as pl
from scipy.cluster.hierarchy import linkage, dendrogram
from sklearn.cluster import KMeans, AgglomerativeClustering, AffinityPropagation
from sklearn.mixture import GaussianMixture 
from sklearn.decomposition import PCA
from sklearn import preprocessing
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("D:\hackathon\SIH\Data_final.csv")
df

cols=df.columns.tolist()[1:]
print(cols)

names=['C_score', 'E_score', 'A_score', 'N_score', 'Numerical Aptitude', 'Spatial Aptitude', 'Perceptual Aptitude', 'Abstract Reasoning', 'Verbal Reasoning',]

careers=sorted(df['Career'].unique().tolist())
print(careers)
print(len(careers))
N=list(range(len(careers)))
Name=careers
normal_mapping=dict(zip(Name,N)) 
reverse_mapping=dict(zip(N,Name))
df['Career']=df['Career'].map(normal_mapping)

df0=df.iloc[:,0:-1]
df1=df.iloc[:,-1:]

def doAgglomerative(X, nclust=2):
    model = AgglomerativeClustering(n_clusters=nclust, metric = 'euclidean', linkage = 'ward')
    clust_labels1 = model.fit_predict(X)
    return (clust_labels1)

clust_labels1 = doAgglomerative(df1,6)  
agglomerative = pd.DataFrame(clust_labels1)

df1.insert((df1.shape[1]),'agglomerative',agglomerative)
print(len(df0),len(df1))

df2=pd.concat([df0,df1],axis=1)
df2

# Initialize KMeans to calculate centroids
kmeans = KMeans(n_clusters=6, n_init=10)
kmeans.fit(df0)
centroids = kmeans.cluster_centers_

# Function to calculate the distance from each point to its cluster's centroid
def calculate_distances(df, centroids):
    distances = []
    for i, row in df.iterrows():
        centroid = centroids[int(row['agglomerative'])]
        distance = np.linalg.norm(row[cols].astype('float') - centroid)
        distances.append(distance)
    return np.array(distances)

df2['distance_to_centroid'] = calculate_distances(df2, centroids)

# Sort by 'agglomerative' and 'distance_to_centroid' to find the closest careers to each centroid
df3 = df2[['Career', 'agglomerative', 'distance_to_centroid']].sort_values(by=['agglomerative', 'distance_to_centroid'])

# Group by 'agglomerative' and select the top 3 careers for each cluster, without including the group column in the result
top_careers = df3.groupby('agglomerative', group_keys=False).apply(lambda x: x[['Career', 'distance_to_centroid']].head(3)).reset_index(drop=True)

# Now, manually add the 'agglomerative' column back for clarity
top_careers['agglomerative'] = df3.groupby('agglomerative').apply(lambda x: x.name).repeat(3).reset_index(drop=True)

# Map numerical indices back to actual career names
top_careers['Career'] = top_careers['Career'].map(reverse_mapping)

# Format the output to show careers and their corresponding distances
for i in range(df3['agglomerative'].nunique()):
    cluster_data = top_careers[top_careers['agglomerative'] == i]
    print('----------------------------' * 3)
    print(f' agglomerative: {i}')
    print('----------------------------' * 3)
    for j in range(len(cluster_data)):
        print(f"Career: {cluster_data.iloc[j]['Career']}")
    print('----------------------------' * 3)

import pickle
import pandas as pd

# Save the entire DataFrame df2 with calculated distances and agglomerative labels
df2.to_pickle('df2.pkl')

# Save KMeans model and centroids
with open('kmeans_model.pkl', 'wb') as f:
    pickle.dump(kmeans, f)
    
# Save the centroids
with open('centroids.pkl', 'wb') as f:
    pickle.dump(centroids, f)

# Save the mappings
with open('mappings.pkl', 'wb') as f:
    pickle.dump({'normal_mapping': normal_mapping, 'reverse_mapping': reverse_mapping}, f)
