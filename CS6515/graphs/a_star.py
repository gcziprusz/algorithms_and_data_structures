# https://www.youtube.com/watch?v=ySN5Wnu88nE

# MAIN INTUITION
# The main intuition behind the A\* (A-star) algorithm is that it combines the strengths 
# of Dijkstra’s algorithm and greedy best-first search by considering both the actual cost 
# to reach a node (like Dijkstra) and a heuristic estimate of the cost to reach the goal 
# (like greedy search). While Dijkstra’s algorithm explores all paths uniformly outward 
# from the start, ensuring the shortest path by using only known distances, A\* 
# prioritizes paths that seem more promising by using a heuristic (often the 
# Manhattan or Euclidean distance) to guide the search toward the goal more 
# efficiently. This makes A\* typically faster than Dijkstra’s in practice 
# when a good heuristic is used, especially in large or complex search spaces.

# Dijkstra: cost so far (g(n))
# A*: cost so far + estimated cost to goal (g(n) + h(n))
# Since the smallest g(n) + h(n) gets popped first, A* favors paths that are 
# both cheap so far and seem close to the goal, so a path that's slightly longer 
# but heading straight toward the goal can "win" over a low-cost detour that’s off track.

import heapq

def a_star(grid, start, goal):
    rows, cols = len(grid), len(grid[0])
    
    def heuristic(a, b):
        # Manhattan distance
        return abs(a[0] - b[0]) + abs(a[1] - b[1])

    open_set = []
    heapq.heappush(open_set, (0 + heuristic(start, goal), 0, start))
    
    came_from = {}
    g_score = {start: 0}

    while open_set:
        _, cost, current = heapq.heappop(open_set)
        
        if current == goal:
            # Reconstruct path
            path = []
            while current in came_from:
                path.append(current)
                current = came_from[current]
            path.append(start)
            return path[::-1]
        
        for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
            neighbor = (current[0] + dx, current[1] + dy)
            if 0 <= neighbor[0] < rows and 0 <= neighbor[1] < cols:
                if grid[neighbor[0]][neighbor[1]] == 1:
                    continue  # wall
                tentative_g = g_score[current] + 1
                if neighbor not in g_score or tentative_g < g_score[neighbor]:
                    came_from[neighbor] = current
                    g_score[neighbor] = tentative_g
                    f_score = tentative_g + heuristic(neighbor, goal)
                    heapq.heappush(open_set, (f_score, tentative_g, neighbor))
    
    return None  # No path found


# USAGe
grid = [
    [0, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 0, 0, 0],
    [0, 1, 1, 0]
]

start = (0, 0)
goal = (3, 3)

path = a_star(grid, start, goal)
print("Path:", path)
