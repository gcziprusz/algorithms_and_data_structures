function firstIndex(arr, target){
  let min = 0;
  let max = arr.length;
  let result = -1;
  while(min <= max) {
    let mid = Math.floor((min + max) / 2);
    if(arr[mid-1] < target) {
      min = mid + 1;
    } else {
      if(arr[mid-1] == target) result = mid-1;
      max = mid - 1;
    }
  }
  return result;
}
