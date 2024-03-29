// Array Index & Element Equality
// Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.

// Examples:

// input: arr = [-8,0,2,5]
// output: 2 # since arr[2] == 2

// input: arr = [-1,0,3,6]
// output: -1 # since no index in arr satisfies arr[i] == i.
// Constraints:

// [time limit] 5000ms

// [input] array.integer arr

// 1 ≤ arr.length ≤ 100
// [output] integer

function indexEqualsValueSearch(arr) {
  let start = 0,end=arr.length-1;
  while(start <= end){
    let i = Math.round((start+end)/2);
    if(arr[i] - i < 0) start = i+1;
    else if (arr[i] - i === 0 && (i===0 || arr[i-1] - (i-1) < 0)) {
      return i;
    }
    else end = i-1;
  }
  return -1;
}

