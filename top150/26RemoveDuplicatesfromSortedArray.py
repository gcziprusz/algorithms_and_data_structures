# https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150
class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i = 0
        j = 1
        while j in range(len(nums)):
            if nums[i] == nums[j]:
                j += 1
            else:
                i +=1
                nums[i] = nums[j]
                j +=1
        return i+1
