function once(func) {
  let result = null
  let isCalled = false
  return function(...args) {
    if (isCalled) {
      return result
    }

    result = func.call(this, ...args)
    isCalled = true
    
    return result
  }
}
