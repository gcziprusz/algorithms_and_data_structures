# https://leetcode.com/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-interview-150
# https://www.youtube.com/watch?v=dJ7sWiOoK7g
# Time complexity : O(n)
# Space complexity: O(1)
class Solution(object):
    def jump(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        end,far,ans,l = 0,0,0,len(nums)-1

        for i in range(l):
            far = max(far, i+ nums[i])
            if far >= l:
                ans +=1
                break
            if i == end:
                ans +=1
                end = far
        return ans