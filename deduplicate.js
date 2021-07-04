function deduplicate(arr) {
  // use set to hold visited element
  // keep track of the right final position to move, aside with the looping cursor

  // [a, b, c, a, d]
  let i = 0
  let j = 0

  const visited = new Set()

  while (i < arr.length) {
    if (!visited.has(arr[i])) {
      visited.add(arr[i])
      // move it to the right final position
      arr[j] = arr[i]
      j += 1
    }
    i += 1
  }

  arr.length = j
}
