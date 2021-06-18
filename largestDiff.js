function largestDiff(arr) {
  if(arr.length < 2) return 0;
  let min = Infinity;
  let max = -Infinity;

  for(let i= 0 ;i< arr.length;i++) {
    min = Math.min(arr[i], min);
    max = Math.max(arr[i], max);
  }

  return Math.abs(min-max);
}


/* longer alternative*/
function largestDiff(arr) {
  if (arr.length === 0) return 0
  
  let min = Infinity
  let max = -Infinity
  let result = Infinity
  
  for (let item of arr) {
    if (item < min) {
      min = item
      result = max - min
    }
    
    if (item > max) {
      max = item
      result = max - min
    }
  }

  return result
}
