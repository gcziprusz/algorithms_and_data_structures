/*
Merging 2 Packages
Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.

Analyze the time and space complexities of your solution.

Example:

input:  arr = [4, 6, 10, 15, 16],  lim = 21

output: [3, 1] # since these are the indices of the
               # weights 6 and 15 whose sum equals to 21
Constraints:

[time limit] 5000ms

[input] array.integer arr

0 ≤ arr.length ≤ 100
[input] integer limit

[output] array.integer



ANSWER 
Merging 2 Packages
The brute force solution consists of two nested loops. For every index i in the outer loop, we look for j (such that i < j < arr.length) in the inner loop that satisfies the condition arr[i] + arr[j] == lim. The time complexity of this algorithm in the worst case scenario is O(N^2).

This is a classic case to use a map. We traverse arr only once. For each weight w in arr we compute its complement limit - w and check whether that complement was hashed so far. If we find the complement in the map, we return a pair that consists of w’s and limit - w’s indices. if not, we hash w while using the weight as the hash key and its array index as the hash value. Even if the same weight is found more than once it doesn’t matter because at the time of the lookup we only need one item with that weight.

Pseudocode:

function getIndicesOfItemWeights(arr, limit):
    m  = new Map()

    for index from 0 to arr.length - 1:
        w = arr[index]
        complementIndex = m.findKey(limit - w)
        if (complementIndex != null):
            return [index, complementIndex]
        else:
            m.insert(w, index)

    return null
Time Complexity: going over the array only once, performing constant time work for each weight and assuming we have a good hash function with rare collisions, we get a linear O(N) time complexity.

Space Complexity: we used a map as an auxiliary space. In the worst case scenario, the space complexity of that map is O(N).
*/
