# https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # figure out what number constitutes majority n/2 
        # create a map 
        # occurence -> num
        # 1 -> number needed for majority
        # every time I encouter it I decrement it by one 
        # if I see 1 for given number and I am about to do an update I found the soln
        l = len(nums)
        if l < 2: return nums[0]
        
        majority = math.floor(l / 2)
        dict = {}
        occured = None
        for n in nums:
            occured = dict.get(n) 
            if occured == None:
                dict[n] = majority
            elif occured == 1:
                return n
            else:
                dict[n] = dict[n] -1
