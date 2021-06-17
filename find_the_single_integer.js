// XOR
function findSingle(arr) {
  return arr.reduce(function(a,c) {
    return a^c;
  })
}



// with a SET
function findSingle(arr) {
  const single = new Set();

  arr.forEach((num) => {
    if (single.has(num)) {
      single.delete(num);
    } else {
      single.add(num);
    }
  });

  return single.values().next().value;
}

