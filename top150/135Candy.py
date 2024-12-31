# https://www.youtube.com/watch?v=1IzCRCcK17A
# https://leetcode.com/problems/candy/description/?envType=study-plan-v2&envId=top-interview-150

# Time   O(n)
# Space  O(n)

class Solution(object):
    def candy(self, ratings):
        l = len(ratings)
        candy = [1] * l
        
        for i in range(1,l):
            if ratings[i] > ratings[i-1]:
               candy[i] =  candy[i-1] + 1

        for i in range(l -2,-1,-1):
            if ratings[i] > ratings[i+1]:
               candy[i] =  max(candy[i+1] + 1, candy[i])
               
        return sum(candy)