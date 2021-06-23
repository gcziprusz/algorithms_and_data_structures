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
