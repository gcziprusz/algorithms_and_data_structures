// https://leetcode.com/problems/top-k-frequent-words/
var topKFrequent = function(words, k) {
  let s = new Map();
   for(let w of words){
     s.set(w,(s.get(w)||0)+1)   
   }
    let sorted = [...s.keys()].sort((a,b)=> {
        let frequencyDifference = s.get(b) - s.get(a);
        if(frequencyDifference ===0) return a.localeCompare(b);    
        return frequencyDifference;
    });
    return sorted.slice(0,k)
};
