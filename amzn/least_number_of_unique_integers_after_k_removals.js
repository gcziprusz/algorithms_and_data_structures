/**
1481. Least Number of Unique Integers after K Removals
Least Number of Unique Integers after K Removals
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
//  */
var findLeastNumOfUniqueInts = function(arr, k) {
  let frequency = new Map()
  for(let a of arr){
      frequency.set(a,(frequency.get(a)||0)+1)
  }
  let sortedFrequencies = Array.from(frequency.values()).sort((a,b)=>a-b)
  let len = sortedFrequencies.length;
  for(let a of sortedFrequencies){
        if(k>=a) {
            k-=a;
            len--;
        } else return len;
  }
  return len
};


// var findLeastNumOfUniqueInts = function(arr, k) {
//     let m = new Map();
//     arr.forEach(num => m.set(num, m.get(num)+1 || 1));
//     let occurrences = Array.from(m.values());
//     occurrences.sort((a,b) => a-b);
//     let res = occurrences.length;
//     for (let num of occurrences) {
//         if (k >= num) {
//             k -= num;
//             res--;
//         }
//         else return res;
//     }
//     return res;
//     // Time Complexity: O(nlog(n))
//     // Space Complexity: O(n)
// };
// var findLeastNumOfUniqueInts = function(arr, k) {
//     const counts = arr.reduce((acc, curr) => { 
//         acc[curr] = acc[curr] ? acc[curr] + 1: 1;
//         return acc;
//     }, {});
    
//     arr.sort((a, b) => counts[a] - counts[b]);
//     return new Set(arr.slice(k)).size;
// };
