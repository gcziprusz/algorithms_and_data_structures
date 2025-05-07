# https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
# https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1
# O(2^n) Time and O(n) Space
class Solution:
    def knapsackRec(self, capacity, values, weights, n):
        # base
        if n == 0 or capacity == 0:
            return 0
        pick = 0 
        if weights[n-1] <= capacity:
            pick = values[n-1] + self.knapsackRec(capacity - weights[n-1], values, weights, n-1)
            
        notPick = self.knapsackRec(capacity, values, weights, n-1)
        
        return max(pick,notPick)
        
    def knapsack(self, capacity, values, weights):
        n = len(values)
        return self.knapsackRec(capacity, values, weights, n)