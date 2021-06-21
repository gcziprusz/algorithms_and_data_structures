function defEqual(a1s,a2s){
  return JSON.stringify(a1s) === JSON.stringify(a2s);
}

function memoizeOne(func,isEqual = defEqual){
  let cache = {};

  return function(...args){
    if(cache.context === this && isEqual(args,cache.args)) return cache.value;

    cache.context = this;
    cache.value = func.apply(this,args);
    cache.args = args;

    return cache.value;
  }

}
