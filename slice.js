// Taking out a single value out of an array is simple: we just refer to it using its index. Sometimes, 
// however, we would like to take a bigger slice of an array — say, three or four elements at once. 
// That’s when the slice method comes in handy.

// We specify the start and the end indices, and slice hands us the array cut from the original array at 
// these indices. Note, however, that the end index argument is not inclusive; in the following example, 
//   only elements of indices 3, 4, and 5 make it to the resulting array.

// We iterate over the array from startIndex to endIndex and push each value to the result. 
// We also make use of the default parameters here so that the slice method simply creates a 
// copy of the array when no arguments are passed. We achieve this by setting by default startIndex 
// to 0 and endIndex to the array’s length.

// Note: the if statement makes sure we push only if the value under a given index exists in the original array.

function slice(array, startIndex = 0, endIndex = array.length) {
 const result = [];

 for (let index = startIndex; index < endIndex; index += 1) {
   const value = array[index];

   if (index < array.length) {
     push(result, value);
   }
 }

 return result;
}
