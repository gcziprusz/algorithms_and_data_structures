// fibonacci sequence  0,1,1,2,3,5,8,13,21.
/* simple */
const fibonacci = (n) => {  
  if (n < 3) {
    return n - 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

/*alternative*/
function fibonacci(n) {
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2);
}


function fibonacci(n) {
   return n < 1 ? 0
        : n <= 2 ? 1
        : memoizedFib(n - 1) + memoizedFib(n - 2);
}

let memoizedFib = memoize(fibonacci);
console.log(memoizedFib(10));

function memoize(fn){
  let mem = new Map();
  return function(...args){
    let k = JSON.stringify(args)
    if(mem.has(k)) return mem.get(k);
    let res = fn.apply(this,args);
    mem.set(k,res);
    return res;
  }
}



