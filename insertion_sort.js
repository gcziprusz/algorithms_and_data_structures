function insertionSort(arr) {
  for(let i = 1; i < arr.length ; i++) {

    const target = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > target) {
      j--;
    }
    if(j != i - 1) {
      arr.splice(i, 1);
      arr.splice(j + 1, 0, target);
    }    
  }
}
