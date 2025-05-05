# 547. Number of Provinces
# https://leetcode.com/problems/number-of-provinces/editorial/?envType=study-plan-v2&envId=graph-theory

# DFS & BFS
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


# Union-find
class UnionFind:
    def __init__(self,n):
        self.parent = list(range(n))
        self.rank = [0] * n
    def find(self,x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
        
    def union(self,x,y):
        xx = self.find(x)
        yy = self.find(y)

        if self.rank[xx] < self.rank[yy]:
            self.parent[xx] = yy
        elif self.rank[xx] > self.rank[yy]:
            self.parent[yy] = xx
        else:
            self.parent[yy] = xx
            self.rank[xx] = self.rank[xx] + 1

        
class Solution:
    def findCircleNum(self, isConnected):
        n = len(isConnected)
        u = UnionFind(n)
        provinces = n
        for i in range(n):
            for j in range(i + 1,n):
                if isConnected[i][j] and u.find(i) != u.find(j):
                    provinces = provinces - 1
                    u.union(i,j)

        return provinces