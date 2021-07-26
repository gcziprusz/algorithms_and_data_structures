// Given an array of integers, determine the number of ways the entire array be split into two non-empty subarrays, left and right, such that the sum of elements in the left subarray is greater than the sum of elements in the right subarray.

// Example

// arr =  [10, 4, -8, 7]

// There are three ways to split it into two non-empty subarrays:


  
// [10] and [4, -8, 7], left sum = 10, right sum = 3

  
// [10, 4] and [-8, 7], left sum = 10 + 4 = 14, right sum = -8 + 7 = -1

  
// [10, 4, -8] and [7], left sum = 6, right sum = 7

// The first two satisfy the condition that left sum > right sum, so the return value should be 2.

function count(arr) {
    if (arr.length < 2 ) return;
    int left = 0,rightSum = 0,count = 0;
    
    for (let el of arr) {
        leftSum += el;
    }
    
    for (let i = arr.length - 1; i >= 0; i--) {
        right+= arr[i];
        left -= arr[i];
        
        if (rightSum < leftSum && (rightSum !== 0 && leftSum !== 0)) {
            count++;
        }
    }
    return count;
}
