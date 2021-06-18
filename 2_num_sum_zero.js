function findTwo(arr) {
  const m = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (m.has(-arr[i])) {
      return [i, m.get(-arr[i])];
    }

    m.set(arr[i], i);
  }
    
  return null;
}
