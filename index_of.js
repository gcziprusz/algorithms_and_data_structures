function findIndex(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (callback(value, index, array)) {
      return index;
    }
  }

  return -1;
}
function indexOf(array, searchedValue) {
  return findIndex(array, value => value === searchedValue);
}

let a = [1,2,3,4,5,6,7,8];
console.log('indexOf!!!!!', indexOf(a, 6));
