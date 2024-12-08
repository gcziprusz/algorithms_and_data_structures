# https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        # have another pointer j starting at 0
        # set k to leangth of nums
        # loop to scan the array from 0 - length -1 using i
        # each iteration check if the element at tha po sition matches val
        # if val matches
            # we leave j and move i by1
            # we k-1 since we at least have one to remove  
        # if not a match
            # we 
        # k = 0 
        # i = 0
        # while i < len(nums):
        #     if nums[i] == val:
        #         del(nums[i])
        #         k += 1
        #     else:
        #         i += 1
        k = 0
        for i,n in enumerate(nums):
            if n != val:
                nums[k] = n
                k+=1
        return k