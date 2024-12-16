# https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150
# https://www.youtube.com/watch?v=Yan0cv2cLy8
# Time complexity :  O(n)
# Space complexity : O(1)

class Solution(object):
    def canJump(self, nums):
        lastPos = len(nums)-1
        for i in range(lastPos,-1,-1):
            if i + nums[i] >= lastPos:
                lastPos = i
        return lastPos == 0 








