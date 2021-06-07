function lastIndexOf(array, searchedValue) {
  for (let index = array.length - 1; index > -1; index -= 1) {
    const value = array[index];

    if (value === searchedValue) {
      return index;
    }
  }

  return -1;
}

let a = [6,2,3,4,5,6,7,6];
console.log('lastIndexOf!!!!!', lastIndexOf(a, 2));


