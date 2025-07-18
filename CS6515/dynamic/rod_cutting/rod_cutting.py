# Rod Cutting
# We have a rod of length 
#  centimeters. We'd like to chop up this rod into smaller segments to sell at the market, but the market only accepts rods of lengths 
#  as marketable items. All of these lengths are integral in nature. Rods of length 
#  sell for cost 
# . Come up with a dynamic programming algorithm to maximize our potential profit.

# Hint 1: The solution we have in mind has a worst case time complexity of at most 
#  and a space complexity of 

# Hint 2: Unlike the largest contiguous sum problem, we have some more leeway in allowing for potentially costly operations to combine subproblems. Consider non-
#  ways to combine subproblems. Additionally, a top-down approach may be easier to come up with here.

# Hint 3: For the subproblems, let 
#  represent the maximum profit we can make with a rod of length 

# https://www.geeksforgeeks.org/dsa/cutting-a-rod-dp-13


# 8 lines of code that still just blow mind
def rod_cutting(lengths, prices, n):
    dp = [0] * (n + 1)  # dp[i] = max profit for rod of length i

    for i in range(1, n + 1):  # i = current total rod length we're solving for
        for j in range(len(lengths)):
            if lengths[j] <= i:
                dp[i] = max(dp[i], prices[j] + dp[i - lengths[j]])

    return dp[n]


lengths = [1, 2, 3, 4]
prices = [2, 5, 7, 8]
rod_length = 5

print(rod_cutting(lengths, prices, rod_length))