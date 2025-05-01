# 547. Number of Provinces
# https://leetcode.com/problems/number-of-provinces/editorial/?envType=study-plan-v2&envId=graph-theory

# DFS
class Solution(object):
    def dfs(self,node, isConnected,visited_cities):
        visited_cities[node] = True
        for i in range(len(isConnected)):
            if isConnected[node][i] and not visited_cities[i]:
                self.dfs(i,isConnected,visited_cities)

    def bfs(self,node, isConnected,visited_cities):
        from collections import deque
        q = deque([node])
        while q:
            node = q.popleft()
            for i in range(len(isConnected)):
                if isConnected[node][i] and not visited_cities[i]:
                    q.append(i)
                    visited_cities[node] = True

    def findCircleNum(self, isConnected):
        """
        :type isConnected: List[List[int]]
        :rtype: int
        """
        l = len(isConnected)
        # A 1D visited array is fine — the input is an adjacency matrix, not a grid.
        # Each row/col index represents the same city, so we only track by city index.
        visited_cities = [False] * l
        province = 0
        for i in range(l):
            if not visited_cities[i]:
                province = province + 1
                self.dfs(i,isConnected,visited_cities)

        return province

# BFS


# Union-find