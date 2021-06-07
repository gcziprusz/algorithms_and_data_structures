 function some(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (callback(value, index, array)) {
      return true;
    }
  }

  return false;
}

let a = [7,7,3,1,11,9];
console.log('some!!!!!', some(a, function(e){return e>10;}));


