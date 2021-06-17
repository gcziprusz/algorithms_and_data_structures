// with promise iterative 
function sequence(funcs) {
  const promiseFuncs = funcs.map(promisify)
  
  return function (callback, input) {
    // init promise
    let promise = Promise.resolve(input)
    
    // add all promiseFuncs to promise
    promiseFuncs.forEach((promiseFunc) => {
      promise = promise.then(promiseFunc)
    })
    
    // handle resolved or rejected promise
    promise.then((data) => {
      callback(undefined, data)
    }).catch(callback)
  }   
}

function promisify(callback) {
  return function (input) {
    return new Promise((resolve, reject) => {
      callback((err, data) => {
        if (err) {
          reject(err)
          return
        }

        resolve(data)
      }, input)
    })
  } 
}


// recursive no promise
function sequence(funcs){
  return function(callback, data) {

    let nextFuncIndex = 0
    const callNextFunc = (data) => {
      // when no more function is to be called
      if (nextFuncIndex === funcs.length) {
        callback(undefined, data)
        return
      }
      // if error , callback right way
      // if not error, recursively callNextFunc
      const nextFunc = funcs[nextFuncIndex]
      nextFuncIndex += 1

      nextFunc((error, newData) => {
        if (error) {
          callback(error, undefined)
        } else {
          callNextFunc(newData)
        }
      }, data)
    }

    callNextFunc(data)
  }
}
