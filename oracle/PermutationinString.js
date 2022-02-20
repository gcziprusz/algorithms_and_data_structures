// 567. Permutation in String
// https://leetcode.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
 if (s1.length > s2.length)  return false;
 let m = new Map();
 for(let s of s1){
     m.set(s,(m.get(s)||0)+1);
 }
 let windowSize = s1.length,needed=m.size,start=0;
 for(let end =0;end < s2.length;end++){
    let ch = s2[end];
    if(m.has(ch)) m.set(ch,m.get(ch)-1);
    if(m.get(ch) ===0) needed--;
    while(needed===0){
        if(end-start+1===windowSize) return true;
        if(m.get(s2[start])===0) needed+=1;
        if(m.has(s2[start])) m.set(s2[start],m.get(s2[start])+1)
        start++;
    }
 } 
 return false
};
