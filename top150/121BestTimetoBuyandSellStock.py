# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150
# * Time Complexity: 0(N)
# * Space Complexity: 0(1)

class Solution(object):
    def maxProfit(self, prices):
        max_profit = 0
        l,r = 0,1
        while r < len(prices):
            if prices[l] >= prices[r]:
                l =r
            else:
                profit = prices[r] - prices[l]
                if profit > max_profit:
                    max_profit = profit
            r +=1
        return max_profit