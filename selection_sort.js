// https://www.geeksforgeeks.org/selection-sort/
function selectionSort(arr) {
  for (let i=0; i<arr.length; i++) {
   let minIndex = i;
   for (let j=i+1; j<arr.length; j++) {
     if (arr[minIndex] > arr[j]) minIndex = j;  
   }
   [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
}
