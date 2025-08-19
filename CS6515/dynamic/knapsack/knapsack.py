# https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1
# https://www.youtube.com/watch?v=nLmhmB6NzcM
# https://www.youtube.com/watch?v=qxWu-SeAqe4
# https://www.youtube.com/watch?v=xCbYmUPvc2Q
# https://www.youtube.com/watch?v=xOlhR_2QCXY


# Version that also inclused the items included
# https://github.com/ByteQuest0/Implemention_codes/blob/main/Dynamic%20Programming/knapsack.py
class Solution:
    def knapsack(self, capacity, values, weights):
        # code here
        # build a DP table
        l = len(values)
        dp = [[0] * (capacity+1) for _ in range(l+1)]
        # print("dp",dp)
        
        for i in range(1, l+1):
            for w in range(capacity +1):
                print("i, w, weights[i-1]",i, w, weights[i-1],w)
                if weights[i-1] > w:
                    dp[i][w] = dp[i-1][w]
                else:
                    print("else",w - weights[i-1],dp[i-1][w - weights[i-1]])
                    dp[i][w] = max(dp[i-1][w],values[i-1]+ dp[i-1][w - weights[i-1]])
        
        return dp[l][capacity]
        # return the the total profit 

# Driver Code Starts
if __name__ == '__main__':
    # test_cases = int(input())
    # for _ in range(test_cases):
        # capacity = int(input())
        # values = list(map(int, input().strip().split()))
        # weights = list(map(int, input().strip().split()))
        capacity = 4
        values = [1,2,3]
        weights = [4,5,1]
        ob = Solution()
        print(ob.knapsack(capacity, values, weights))
        print("~")
# Driver Code Ends