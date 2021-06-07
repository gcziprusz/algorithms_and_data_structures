function reverse(array) {
  const result = [];

  const lastIndex = array.length - 1;

  for (let index = lastIndex; index > -1; index -= 1) {
    const value = array[index];

    result[lastIndex - index] = value;
  }

  return result;
}
let a = [1,2,3,4,5];
console.log('reverse!!!!!', reverse(a));


