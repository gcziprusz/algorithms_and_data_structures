// LEET similar
// 217. Contains Duplicate https://leetcode.com/problems/contains-duplicate/
// https://github.com/careercup/CtCI-6th-Edition-JavaScript-ES2015/blob/50cfea6b2aa9bddf1ecdd9d420e47133dbfa682b/src/chapter1/ch1-q1.js

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// runtime O(N) 
// space O(N)
var containsDuplicateSet = function(nums) {
  let s = new Set();
    for(let i of nums){
        if(s.has(i)) return true; 
        s.add(i)
    }
    return false;
};

// runtime O(NlogN) 
// space O(1)
var containsDuplicate = function(nums) {
  nums  = nums.sort((a,b) => a-b);
  for(let i =1;i< nums.length;i++){
    if(nums[i] === nums[i-1]) return true;
  }
  return false;
};
