
// ZIPPING THE ARRAY TOGETHER
function findDuplicates(arr1, arr2) {
  let i =0,j=0,res=[];
  while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
          i++;
        } else if (arr1[i]>arr2[j]){
          j++
        } else {
          res.push(arr1[i])
          i++;
          j++;
        }
  }
  return res;
}
// USING BINARY SEARCH 
function findDuplicates(arr1, arr2) {
  let res =[];
  for(let num1 of arr1){
    if(binarySearch(arr2,num1) !==-1) res.push(num1)
  }
  return res
}

function binarySearch(arr,target){
  let start =0,end=arr.length-1;
  while(start<=end){
    let m = start +Math.floor((end-start)/2)
    if(arr[m] < target) start=m+1;
    else if(arr[m] > target) end =m-1;
    else return m;
  }
  return -1;
}
