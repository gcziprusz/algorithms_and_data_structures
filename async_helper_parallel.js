// Adding props to the function
function parallel(funcs){
  return function(finishedCallback){
    let callback = (index) => (error,data) => {
      callback.done = callback.done || false
      callback.completed = callback.completed || 0;
      callback.res = callback.res || [];
      if(callback.done) return;
      if(error) {
        callback.done = true;
        finishedCallback(error,undefined)
      }
      callback.res[index] = data;
      callback.completed++
      if(callback.completed === funcs.length){
        finishedCallback(undefined,callback.res)
      }
    }
    funcs.forEach((fn,i) => {
      fn(callback(i));
    });
  }
}


function parallel(funcs){
  const result = []
  let completed = 0
  let done = false

  return function paralleled(callback) {

    const onComplete = (index) => (error, data) => {
      if (done) {
        return
      }

      if (error) {
        done = true
        return callback(error, undefined)
      }

      result[index] = data
      completed++
      
      if (completed === funcs.length) {
        callback(undefined, result)
      }
    }

    funcs.forEach((func, i) => {
      func(onComplete(i))
    })
  }
}


/*without recursion*/
function parallel(funcs){
  let i = 0
  const result = []
  let seenError = false

  return function(cb) {
    funcs.forEach((func, index) => {
      func((error, data) => {
        if (!error) {
          result[index] = data
          i++

          if (i === funcs.length) {
            cb(undefined, result)
          }
        } else {
          if (!seenError) {
            cb(error, undefined)
            seenError = true
          }
        }
      })
    })
  }
}
