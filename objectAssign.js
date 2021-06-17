function completeAssign(target, ...sources) {
  if (target === undefined || target === null) throw 'err'
  target = Object(target)
  sources.filter(source => !!source).forEach(source => {
    Object.defineProperties(
      target,
      Object.getOwnPropertyDescriptors(source)
    )
  })
  
  return target
}
