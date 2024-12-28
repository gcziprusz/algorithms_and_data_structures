# Below youtube video is the most optimal O(n) 
# https://www.youtube.com/watch?v=mgG5KFTvfPw
# Time O(nlogn) below
# https://leetcode.com/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150

class Solution(object):
    def hIndex(self, citations):
        n,h= len(citations),0
        citations = sorted(citations)
        for i in range(n):
            if citations[i] >= n-i:
                h = max(h,n-i)
        return h