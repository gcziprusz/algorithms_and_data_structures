# https://www.youtube.com/watch?v=BHr381Guz3Y
# https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

# * Time Complexity: 0(N)
# * Space Complexity: 0(N)

class Solution(object):
    def rotate(self, nums, k):
        l = len(nums)
        numc = [0] * l
        for i in range(l):
            kk = (i + k)
            ir = kk if kk < l else kk % l
            numc[ir] = nums[i]
        for i in range(l):
            nums[i] = numc[i]

# * Time Complexity: 0(N)
# * Space Complexity: 0(1)

class Solution(object):
    def reverse(self,nums, i,j):
        l = i
        r = j
        while l < r:
            nums[l],nums[r] = nums[r],nums[l]
            l +=1
            r -=1
    def rotate(self, nums, k):
        l =len(nums)
        k = k % l
        self.reverse(nums,0,l-k-1)
        self.reverse(nums,l-k,l-1)
        self.reverse(nums,0,l-1)

