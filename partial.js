function partial(func, ...args1) {
  return function (...args2) {
    let args = [...args1]
    let j = 0 // index of args2
    args.forEach((arg, i) => {
      if (arg === partial.placeholder) {
        args[i] = args2[j++]
      }
    })
    // add the remaining of args2
    args = args.concat(args2.slice(j))
    return func.apply(this, args)
  }
}
partial.placeholder = Symbol();
