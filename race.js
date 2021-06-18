const async1 = (callback) => {
   setTimeout(() => callback(undefined, 1), 300)
}
const async2 = (callback) => {
    setTimeout(() => callback(undefined, 2), 100)
}
const async3 = (callback) => {
   setTimeout(() => callback(undefined, 3), 200)
}
// Your race() should be able to accomplish this

const first = race(
  [
    async1,
    async2,
    async3
  ]
)

first((error, data) => {
   console.log(data) // 2, since 2 is the first to be given
}, 1)

/** WITH PROMISE **/
function race(funcs){
    return function(callback) {
      (new Promise(resolve => {
        funcs.map(func => {
              func((a,b) => {
                resolve({a,b});
              })
          })
      })).then(({a,b}) => {callback(a,b)})
    }
}

/*NO PROMISE */
function race(funcs){
  return function(cb) {
    let handled = false;
    funcs.forEach((func) => {
      func((e, v) => {
        if (!handled) {
          handled = true;
          cb(e, v)
        }
      })
    });
  };
}


/*RACE WITH PROMISE INPUT*/
function race(promises) {
  return new Promise((resolve, reject) => {
    for (let promise of promises) {
      promise.then((r) => {
        resolve(r)
      }).catch((e) => {
        reject(e)
      })
    }
  })
}
