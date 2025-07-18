# https://www.youtube.com/watch?v=4OQeCuLYj-4&t=2s


# 🧠 How it works (Intuitively):
# Imagine you want to travel from every city to every other city with the shortest route.

# You start with the direct routes (your adjMatrix), then gradually ask:

# 🗺️ "If I go through city k, can I get from city i to city j faster?"

# You repeat this check for every possible intermediate city k.

# O(v^3)

def floyd_warshall(adj_matrix):
    """
    Floyd-Warshall algorithm to find shortest paths between all pairs of vertices.

    Parameters:
    - adj_matrix: a 2D list where adj_matrix[i][j] is the weight from i to j
                  Use float('inf') to represent no direct edge between i and j.

    Returns:
    - dist: 2D list with shortest distances between all pairs
    """
    V = len(adj_matrix)
    # Step 1: Initialize dist matrix as a copy of adj_matrix
    dist = [row[:] for row in adj_matrix]

    # Step 2: Dynamic programming to update shortest paths
    for vj in range(V):
        for vi in range(V):
            for vk in range(V):
                if dist[vi][vk] > dist[vi][vj] + dist[vj][vk]:
                    dist[vi][vk] = dist[vi][vj] + dist[vj][vk]

    return dist



INF = float('inf')
adj_matrix = [
    [0, 3, INF, 5],
    [2, 0, INF, 4],
    [INF, 1, 0, INF],
    [INF, INF, 2, 0]
]

shortest_paths = floyd_warshall(adj_matrix)
for row in shortest_paths:
    print(row)