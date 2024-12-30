# https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=top-interview-150

# Runtime O(n)
# Space O(n)
class Solution(object):
    def productExceptSelf(self, nums):
        l = len(nums)
        pref = [1] * l
        suff = [1] * l
    
        for i in range(1,l):
            pref[i] = nums[i-1]*pref[i-1]
    
        for i in range(l-2,-1,-1):
            suff[i] = nums[i+1]*suff[i+1]

        return [pref[i]*suff[i] for i in range(l)]