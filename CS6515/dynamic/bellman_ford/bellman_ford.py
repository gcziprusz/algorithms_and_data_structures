# https://www.youtube.com/watch?v=dp-Ortfx1f4&t=2s

def bellman_ford(vertices, edges, source):
    """
    vertices: a list of vertex identifiers (e.g., ['A', 'B', 'C'])
    edges: a list of tuples (u, v, w) where there is an edge u -> v with weight w
    source: the starting vertex
    """

    # Step 1: Initialize distances
    dist = {v: float('inf') for v in vertices}
    dist[source] = 0

    # Step 2: Relax edges |V| - 1 times
    for _ in range(len(vertices) - 1):
        for u, v, w in edges:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w

    return dist
