// Move Zeros To End
function moveZeroes(arr) {
  let i=0,j=0;
  while(i<arr.length){
    if(arr[i] !== 0) {
      swap(arr,i,j)
      j++;      
    }
    i++;
  }
  return arr;
}
function swap(arr ,i,j){
  [arr[i],arr[j]]=[arr[j],arr[i]];
}
