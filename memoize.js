
function memoize(func) {
  var memo = {};
  var slice = Array.prototype.slice;

  return function() {
    var args = slice.call(arguments);

    if (args in memo)
      return memo[args];
    else
      return (memo[args] = func.apply(this, args));

  }
}


/*** ALTERNATIVE ***/
const memoize = (func) => {
  const results = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    return results[argsKey];
  };
};

const clumsysquare = memoize((num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      result++;
    }
  }
  return result;
});

/* memoize with custom resolver */
function memo(func, resolver = (...args) => args.join('_')) {
  // your code here
  let memo = new Map();
  return function (...args) {
    let k =  resolver(...args)
    
    if(!memo.has(k)) {
      memo.set(k,func.apply(this,args))
    } 
    return memo.get(k);
  }
}




console.time("First call");
console.log(clumsysquare(9467));
console.timeEnd("First call");

// use the same value two times
console.time("Second call");
console.log(clumsysquare(9467));
console.timeEnd("Second call");

console.time("Third call");
console.log(clumsysquare(9467));
console.timeEnd("Third call");
