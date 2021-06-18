function binarySearch(arr, target){
    let min=0;
    let max=arr.length-1;

    while(min<=max){
        let mid=Math.floor((min+max)/2);
        if(arr[mid]===target) return mid;
        if(arr[mid]<target) min=mid+1;
        else max=mid -1;
    }

  return -1;
}
