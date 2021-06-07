function shift(array) {
  const { length } = array;
  const firstValue = array[0];

  for (let index = 1; index < length; index += 1) {
    const value = array[index];

    array[index - 1] = value;
  }

  array.length = length - 1;

  return firstValue;
}
let a = [1,2,3,4,5];
console.log('shift!!!!!', shift(a));

