function elementAfter(arr, target){
  let start =0,end=arr.length,index=Infinity;
  while(start<=end){
    let mid = Math.floor((start+end)/2);
    if(arr[mid]===target) {
      index=mid;
      start=mid+1
    } else if(arr[mid]>target) end = mid-1;
    else start= mid+1;
  }
  return arr[index+1]
}
