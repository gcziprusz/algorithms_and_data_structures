# https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
# * Time Complexity: 0(N)
# * Space Complexity: 0(N)
# https://www.youtube.com/watch?v=7pnhv842keE

class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
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
# * Time Complexity: 0(N)
# * Space Complexity: 0(1)
# Use Boyer-Moore Voting Algorithm
class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        cnt = 0
        el = None
        for n in nums:
            if cnt == 0:
                el = n
                cnt += 1
            elif n == el:
                cnt += 1
            else:
                cnt -= 1
        return el