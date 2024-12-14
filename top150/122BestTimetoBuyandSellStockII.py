# https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150
# * Time Complexity: 0(N)
# * Space Complexity: 0(1)

class Solution(object):
    def maxProfit(self, prices):
        i,profit,buy,sell,l = 0,0,0,0,len(prices)-1

        while i < l:
            while i < l and prices[i+1] <= prices[i]:
                i+=1
            buy = prices[i]
            while i < l and prices[i+1] > prices[i]:
                i+=1
            sell = prices[i]
            profit += sell - buy
        return profit

