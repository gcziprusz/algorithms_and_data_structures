function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return Array.isArray(value) ? value : [value];
}
let a = [7,7,3,1,11,9];
console.log('some!!!!!', castArray(a[1]));


