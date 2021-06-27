function wrap(arr) {
  return new Proxy(arr, {
    get(target, key) {

      if (key === Symbol.iterator) return Reflect.get(target, Symbol.iterator);

      if (key < 0) key = +key + target.length;

      return Reflect.get(target, key);
    },
    set(target, key, value) {

      if (key < 0) key = +key + target.length;

      if (key < 0) throw Error

      Reflect.set(target, key, value);

      return true;
    }
  });
}



function wrap(arr) {
  // your code here
  return new Proxy(arr, {
    get(target, prop) {
      // if used ast iterable
      if (prop === Symbol.iterator) {
         return target[prop].bind(target)
      }
      
      let index = parseInt(prop, 10) 
      if (index < 0) {
        index += arr.length
        return target[index]
      }
      return target[prop]
    }, 
    set(target, prop, value) {
      let index = parseInt(prop, 10) 
      if (index < 0) {
        index += arr.length
        target[index] = value
        
        if (index < 0) {
          throw new Error('index is overflow')
        }
        return true
      }
      
      target[prop] = value
      return true
    }
  })
}
