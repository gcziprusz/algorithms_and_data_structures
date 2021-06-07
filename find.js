function find(array, callback) {
  const index = findIndex(array, callback);

  if (index === -1) {
    return undefined;
  }

  return array[index];
}

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

let a = [1,2,3,4,5,6,7,8];
console.log('find!!!!!', find(a, function(e) {return e === 6}));


