// 1. for loop approach
function range(from, to) {
  // return the result array
  const result = []
  while (from <= to) {
    result.push(from++)
  }
  return result
}


function range(from, to) {
  return {
    // iterable protocol
    [Symbol.iterator]() {
      // iterator protocol
      return {
        next() {
          return {
            done: from > to,
            value: from++
          }
        }
      }
    }
  }
}

function range(from, to) {
  return {
    // iterable protocol
    [Symbol.iterator]: function * () {
      while (from <= to) {
        yield from++
      }
    }
  }
}

// 4. actualy geneator also implements iterable protocol
function range(from, to) {
  return (function * () {
    while (from <= to) {
      yield from++
    }
  })(from, to)
}

// 5. maybe just change the entry function?
function * range(from, to) {
  while (from <= to) {
    yield from++
  }
}
