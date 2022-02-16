/**
 https://leetcode.com/problems/find-all-anagrams-in-a-string/ 
 438. Find All Anagrams in a String


 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(s.length < p.length) return [];
    let sCount = new Map(),pCount=new Map(),res =[];
    for(let i =0;i< p.length;i++){
        pCount.set(p[i],(pCount.get(p[i])||0)+1);
        sCount.set(s[i],(sCount.get(s[i])||0)+1);
    }
    if(compare(pCount ,sCount)) res.push(0);
    let l = 0,r = p.length;
    
    for(r;r < s.length;r++) {
      sCount.set(s[r],(sCount.get(s[r])||0)+1);  
      sCount.set(s[l],(sCount.get(s[l])||0)-1); 
      if(sCount.get(s[l]) === 0) sCount.delete(s[l]);
      l++; 
      if(compare(pCount ,sCount)) res.push(l);
    }
    return res;
};

let compare = (a,b) => {
    if (a.size !== b.size) {
        return false
    }
    for(let [k,v] of a) {
        if (b.get(k) !== v) {
          return false
        }
    }
    return true;
}
