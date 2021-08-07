// https://leetcode.com/problems/pancake-sorting/submissions/

/*Pancake Sort
Given an array of integers arr:

Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
Write a function pancakeSort(arr) that sorts and returns the input array. You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.
Example:

input:  arr = [1, 5, 4, 3, 2]

output: [1, 2, 3, 4, 5] # to clarify, this is pancakeSort's output
Analyze the time and space complexities of your solution.

Note: it’s called pancake sort because it resembles sorting pancakes on a plate with a spatula, where you can only use the spatula to flip some of the top pancakes in the plate. To read more about the problem, see the Pancake Sorting Wikipedia page.

Constraints:

[time limit] 5000ms

[input] array.integer arr

[input] integer k

0 ≤ k
[output] array.integer
*/

// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
// function flip(arr, k){
//     let pivot = Math.floor((k+1)/ 2)
//     for (let i = 0;i< pivot;i++){
//       let tmp = arr[i];
//         arr[i] = arr[k - i]
//         arr[k - i] = tmp
//     }
// }   

// function pancakeSort(arr){
//     if(arr.length < 3 && arr[0] < arr[1]) return arr;
//     for (let i = arr.length-1; i >= 0;i--){
//         let maxIndex = findMaxIndexInPrefix(arr,i)
//         flip(arr, maxIndex)
//         flip(arr, i)
//     }
//     return arr
// }

// function findMaxIndexInPrefix(arr, k){
//    let  ans = 0
//     for(let i =0;i< k;i++){
//         if (arr[i] > arr[ans]) ans = i
//     }
//     return ans
// }
var pancakeSort = function(a, len, arr=[], max=a.length) {
    while(max>1){
        flip(a.indexOf(max));
        max--;  
    }
    function flip(indx){
        if(indx){
            for(let q=0; q<indx/2; q++){
                [[a[q], a[indx-q]] = [a[indx-q], a[q]]];
            };
            arr.push(indx+1);
        }
        len=max-1;
        for(let q=0; q<len/2; q++){
            [[a[q], a[len-q]] = [a[len-q], a[q]]];
        };
        arr.push(max);
    }
    return arr;
};
