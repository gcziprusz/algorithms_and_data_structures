// IMMUTABLE PUSH 
function immutablePush(arr, newEntry){
  return [ ...arr, newEntry ]      
}

function push(array, ...values) {
  const { length: arrayLength } = array;
  const { length: valuesLength } = values;

  for (let index = 0; index < valuesLength; index += 1) {
    array[arrayLength + index] = values[index];
  }
  return array.length;
}
