/*** MY SOL***/
var topKFrequent = function(nums, k) {
    let histo = new Map(); 
    let occurences = [...new Array(nums.length+1)].map(()=> []);
    nums.forEach(n => histo.set(n,(histo.get(n)||0)+1));
   
    histo.forEach((v,k) => occurences[v].push(k));
    
    let res =[];
    for(let r = occurences.length-1;r>0;r--){
        for(let f of occurences[r]){
            res.push(f);
            if(res.length === k) return res;
        }
    }
};



/**ALTERNATIVE MY SOLN*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let count = new Map();
    let freq = new Array(nums.length);
    
    for(let n of nums){
        count.set(n,(count.get(n)||0)+1)
    }
    for(let [nm, fr] of count) {
        if (freq[fr]) {
            freq[fr].push(nm);
        } else {
           freq[fr] = [nm]; 
        }
    }
    let res =[];
    for(let i = freq.length-1;i>0;i--){
        for (let j of (freq[i]||[])) {
            res.push(j);
            if (res.length === k) return res;
        }
    }
};


/***ALTERNATIVE less afficient with SORT operation ****/

var topKFrequent = function(nums, k) {
  var result =[];
  var frequencyMap = new Map();
  
  //   Build a map that maps number to a frequency for example given array [1,1,1,2,2,3]
  //   frequencyMap = {
  //     1:3
  //     2:2
  //     3:1
  //   }
  nums.forEach(n => frequencyMap.set(n,frequencyMap.get(n)+1 || 1));
  
  // Convert the map to an array then sort by value in descending order 
  let descFrequencyArray = [...frequencyMap].sort((a,b) => b[1] - a[1]);
  
  // build up the result array with descFrequencyArray keys up to K
  for(var i =0; i < k ;i++){
    result.push(descFrequencyArray[i][0])
  }
  
  return result;
}
