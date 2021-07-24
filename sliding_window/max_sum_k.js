let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20 ];
console.log(maxSumofK(arr, 4))


function maxSumofK(arr, k) {
  let max =0,sum=0;
  
  for(let i =0; i<k;i++){
    sum += arr[i];
  }
  
  for(let j =k;j<arr.length;j++){
      sum += arr[j]-arr[j-k];
      max = Math.max(sum,max);
    
  }
  return max;
}
