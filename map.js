function map(arr, fn){
  let res =[]
  for(let i =0;i< arr.length;i++){
    res.push(fn(arr[i]);
  }
  return res;
}
