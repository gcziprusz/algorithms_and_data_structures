function bubbleSort(arr) {
  // your code here
  for(let i = arr.length - 1; i > 0; i--) {
    for(let j = 0; j < i; j++) {
      if (arr[j] >= arr[j+1]) {
        const temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function bubbleSort(arr) {
  let isSwapped = false;

  do {
    isSwapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        isSwapped = true;
      }
    }
  } while (isSwapped);
}



function bubbleSort(arr) {
  let keepSorting = true;
  let end = arr.length-1;

  while (keepSorting) {
    keepSorting = false;
    for (let j=0; j<end; j++) {
     if (arr[j] > arr[j+1]) {
       [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
       keepSorting = true;
     }
   }
   end--;
  }
}
