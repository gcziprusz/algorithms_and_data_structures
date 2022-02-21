// https://github.com/careercup/CtCI-6th-Edition-JavaScript-ES2015/blob/50cfea6b2aa9bddf1ecdd9d420e47133dbfa682b/src/chapter1/ch1-q4.js
// https://leetcode.com/problems/palindrome-permutation/
// 266. Palindrome Permutation

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  let h=new Set()
  for(let c of s){
    if(h.has(c)) h.delete(c);
    else h.add(c)
  }
  return h.size <=1;
};
