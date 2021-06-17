

/**
 * @returns { {count: number}}
 */
function createCounter() {
  let count =0;
  return Object.defineProperty(
    {},'count',{
      get: () => count++
    }
  )
}

