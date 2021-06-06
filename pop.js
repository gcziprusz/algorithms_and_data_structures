// ES6 
function pop(array: T[]) {
  const value = array[array.length - 1];
  array.length = array.length - 1;
  return value;
}

// ES6 immutable 
function immutablePop(arr){
  return arr.slice(0, -1)     
}
