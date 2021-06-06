/*Immutable with ES6 */
function xsplice(arr, start, deleteCount, ...items) {
  return [ ...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount) ]
}



// TS 
// The idea is to make two cuts at insertAtIndex and insertAtIndex + removeNumberOfElements. 
// This way, we slice the original array into three pieces. The first piece (firstPart) as well 
// as the third one (here called secondPart) are what will make it into the resulting array.
// It is between these two that we will insert the values we passed as arguments. We do this with 
// the concat method. The remaining middle part is removedElements, which we return in the end.
// The splice method simultaneously removes a given number of values from the array and inserts in 
// their place some other values. Although not obvious at first, we can add more values than we remove and vice versa.

// First, we specify the starting index, then how many values we would like to remove, and the rest 
// of the arguments are the values to be inserted.

// const arr = [1, 2, 3, 4, 5];

// arr.splice(0, 2, 3, 4, 5);

// arr // -> [3, 4, 5, 3, 4, 5]

function splice<T>(array: T[], insertAtIndex: number, removeNumberOfElements: number, ...values: T[]) {
  const firstPart = slice(array, 0, insertAtIndex);
  const secondPart = slice(array, insertAtIndex + removeNumberOfElements);

  const removedElements = slice(array, insertAtIndex, insertAtIndex + removeNumberOfElements);

  const joinedParts = firstPart.concat(values, secondPart);
  const { length: joinedPartsLength } = joinedParts;

  for (let index = 0; index < joinedPartsLength; index += 1) {
    array[index] = joinedParts[index];
  }

  array.length = joinedPartsLength;

  return removedElements;
}
