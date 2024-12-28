# https://www.youtube.com/watch?v=j4KwhBziOpg
# https://leetcode.com/problems/insert-delete-getrandom-o1/description/?envType=study-plan-v2&envId=top-interview-150
import random 
class RandomizedSet(object):
    def __init__(self):
        self._set = set()  
    def insert(self, val):
        inset = val in self._set
        self._set.add(val)
        return not inset        
    def remove(self, val):
        inset = val in self._set
        self._set.discard(val)
        return inset        
    def getRandom(self):
        # the overall time complexity of list(set()) is O(n) :( 
        # so soln this does not meet O(1) requirement
        return random.choice(list(self._set))

# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()

# ----------------------
# O(1) using map and list 
# ----------------------
import random 

class RandomizedSet(object):
    def __init__(self):
        self._map = {}
        self._lst = []  
    
    def insert(self, val):
        inmap = val in self._map
        if inmap:
            return False
        self._lst.append(val)
        self._map[val] = len(self._lst) -1
        return True
    def remove(self, val):
        inmap = val in self._map
        if inmap:
            i = self._map.get(val) 
            self._lst[i] = self._lst[len(self._lst)-1]
            self._map[self._lst[-1]] = i
            self._lst.pop()
            del self._map[val] 
        return inmap        
    def getRandom(self):
        return random.choice(self._lst)