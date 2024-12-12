# https://www.youtube.com/watch?v=BHr381Guz3Y
# https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

# * Time Complexity: 0(N)
# * Space Complexity: 0(N)

class Solution(object):
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        l = len(nums)
        numc = [0] * l
        for i in range(l):
            kk = (i + k)
            ir = kk if kk < l else kk % l
            numc[ir] = nums[i]
        for i in range(l):
            nums[i] = numc[i]