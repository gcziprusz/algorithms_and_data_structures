# https://leetcode.com/problems/gas-station/description/?envType=study-plan-v2&envId=top-interview-150


class Solution(object):
    def canCompleteCircuit(self, gas, cost):
        if sum(gas) < sum(cost):
            return -1
        
        tank = 0
        start = 0
        for i in range(len(gas)):
            tank += gas[i] - cost[i]
            if tank < 0:
                start = i+1
                tank = 0        
        return start
