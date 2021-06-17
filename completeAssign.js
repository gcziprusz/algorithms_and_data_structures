function completeAssign(target, ...sources) {
  if(!target) throw new Error('Target is null or undefined');
  target = Object(target);
  sources.filter(source => !!source).forEach(source => {
    let descriptors = Object.getOwnPropertyDescriptors(source);
    for(let key of Object.keys(descriptors)){
      Object.defineProperty(target,key,descriptors[key]);
    }
    for(let sym of Object.getOwnPropertySymbols(source)){
      target[sym] = source[sym];
    }
  });

  return target;
}



// slightly simpler and still works
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
