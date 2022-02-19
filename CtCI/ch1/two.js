// Check permutations  AKA valid anagrams 

// https://leetcode.com/problems/valid-anagram/
// https://github.com/careercup/CtCI-6th-Edition-JavaScript-ES2015/blob/50cfea6b2aa9bddf1ecdd9d420e47133dbfa682b/src/chapter1/ch1-q2.js

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 runtime O(N+M)
 space O(N)

 */
var isAnagramMap = function(s, t) {
  if (s.length !== t.length) return false;
  let sMap = new Map();
  for(let sChar of s){
      sMap.set(sChar, (sMap.get(sChar) ||0)+1);
  }
  for(let tChar of t){
    let count = sMap.get(tChar);
    if (!count) return false;
    if(count ===1) sMap.delete(tChar);
    else sMap.set(tChar, count-1);
  }
  return sMap.size ===0;  
};

/*
runtime O(NlogN+MlogM)
space O(1)
*/
var isAnagram = function(s, t) {
  if (s.length === 0 || s.length !== t.length) return false;
    console.log(s, typeof s,"s")
  s = [...s].sort();
  t = [...t].sort();
  for(let i =0;i<=s.length;i++){
     if(s[i] !== t[i]) return false
  }
  return true;
};
