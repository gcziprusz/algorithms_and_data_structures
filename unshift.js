 function unshift(array, ...values) {
  const mergedArrays = values.concat(...array);
  const { length: mergedArraysLength } = mergedArrays;

  for (let index = 0; index < mergedArraysLength; index += 1) {
    const value = mergedArrays[index];

    array[index] = value;
  }

  return array.length;
}


let a = [1,2,3,4,5];
console.log('unshift!!!!!', unshift(a,6,7));
console.log(a);
