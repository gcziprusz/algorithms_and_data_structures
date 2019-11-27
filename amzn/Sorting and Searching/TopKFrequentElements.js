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
