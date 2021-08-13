
// One liner but not optimal 
let reverseWords = (arr) =>  arr.join("").split(" ").reverse().join(" ").split('');

// One possible solution is doing a linear iteration on arr while pushing a copy of every word to a stack and then pulling them in reverse order while copying the words back into arr. Another approach is initializing a new array at the same length, iterating over arr from right to left and copying any sequence of characters to the new array from left to right. Both approaches take O(N) time and at least O(N) space.
// A more elegant and efficient approach is to reverse all the characters in arr and then reverse the characters in each word separately. While the first reverse gives us the words in the reverse order as we wanted, it also reverses the characters of each word. To fix that, we do the second reverse, which reverses each word separately.
// Reversing items in an array is done by a ‘mirror’ function, that swaps the items of every 2 indices with the same distance from the middle.

// clever one 
function reverseWords(arr){
    let n = arr.length
    mirrorReverse(arr, 0, n-1)
    let wordStart = null
    for (let i =0;i<= n-1;i++){
      if (arr[i] === ' '){
        if (wordStart != null){
          mirrorReverse(arr, wordStart, i-1)
          wordStart = null
        }
      }
      else if (i === n-1){
         if (wordStart !== null) mirrorReverse(arr, wordStart, i)
      }
      else {
           if (wordStart === null) wordStart = i
      }
    }
    return arr
}

function mirrorReverse(arr, start, end){
    while (start < end){
        [arr[start],arr[end]]= [arr[end],arr[start]]
        start++
        end--
    }
}
    
