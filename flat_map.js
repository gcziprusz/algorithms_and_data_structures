
export function flatMap(array, callback) {
  return flat(map(array, callback));
}

function flat(arr) {
  return arr.reduce(function(acc, next){
    let isArray =  Array.isArray(next)
    return acc.concat(isArray ? flatten(next) : next)
  }, [])
}

function map(arr, fn){
  let res =[]
  for(let i =0;i< arr.length;i++){
    res.push(fn(arr[i]);
  }
  return res;
}
