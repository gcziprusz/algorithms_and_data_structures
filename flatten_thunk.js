/**
 * @param {Thunk} thunk
 * @return {Thunk}
 */
function flattenThunk(thunk) {
  // cb - thunk or data
  var actualCb;

  // Flatter is of the same shape as of thunk, so it will resolved first and then on condition actualCB will be called
  const flatter = (error, cbFns) => {
    if (typeof cbFns == 'function') {
      cbFns(flatter);
    } else {
      actualCb(error, cbFns);
    }
  }

  return function (cb) {
    actualCb = cb; //Store the last cb.
    thunk(flatter); // run the main function with flatter
  }

}

// SHORTER ALTERNATIVE
function flattenThunk(thunk) {
  
  return function (fn){
    function cb(error, funcOrData){

      if(funcOrData instanceof Function)
        funcOrData(cb);
      else
        fn(error, funcOrData);

    }
    
    thunk(cb);
  }
}


const func1 = (cb) => {
  setTimeout(() => cb(null, 'ok'), 10)
}

const func2 = (cb) => {
  setTimeout(() => cb(null, func1), 10)
}

const func3 = (cb) => {
  setTimeout(() => cb(null, func2), 10)
}

flattenThunk(func3)((error, data) => {
  console.log(data) // 'ok'
});
