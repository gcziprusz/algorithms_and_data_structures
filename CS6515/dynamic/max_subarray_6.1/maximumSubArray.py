# https://leetcode.com/problems/maximum-subarray/editorial/
# https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm

class Solution(object):
    def maxSubArrayBruteForce(self, nums):
        l = len(nums)
        maxx = -999999999
        for i in range(l):
            curr = 0
            for j in range(i, l):
                curr += nums[j]
                maxx = max(curr,maxx)
        return maxx
    # Dynamic programming
    def maxSubArray(self, nums):
        maxx = curr = nums[0]
        for num in nums[1:]:
            curr = max(num,curr+num)
            maxx = max(maxx,curr)
        return maxx