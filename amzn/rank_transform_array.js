/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  let uniques = [...new Set(arr)], rank = new Map();
  uniques = uniques.sort((a,b)=> a-b);
  uniques.forEach((u,i) => rank.set(u,i));
  return arr.map(a=> rank.get(a)+1)
    
};
