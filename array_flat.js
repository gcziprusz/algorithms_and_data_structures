function flatten(arr){
  let flatRes = [];
  if (!Array.isArray(arr)) return flat;
  
  function flattenHelp(arr){
    for(let el of arr) {
      if(Array.isArray(el)) {
        flattenHelp(el);
      } else {
        if (el) flatRes.push(el);
      }
    }  
  }
  flattenHelp(arr,flatRes)
  return flatRes;
}

console.log(JSON.stringify([1,2,3]) === JSON.stringify(flatten([[1],2,3])));
console.log(JSON.stringify([1,2,3,4])=== JSON.stringify(flatten([[1],2,3,[[[4]]]])));
console.log(JSON.stringify([])=== JSON.stringify(flatten([[[[]]]])));



/**functional alternative/
/**
 * [1,2,[3,4]] -> [1,2,3,4]
 */

let arr = [1,2,[3,4, [5,6, [7, [8, 9, 10]]]]]

function flatten(arr) {
  return arr.reduce(function(acc, next){
    let isArray =  Array.isArray(next)
    return acc.concat(isArray ? flatten(next) : next)
  }, [])
}

if (!Array.prototype.flatten) {
  Array.prototype.flatten = function() {
    return flatten(this)
  }
}
console.log(arr.flatten());

/**ITERATIVE */
function flatten(arr) {
  var array = [];
  while(arr.length) {
    var value = arr.shift();
    if(Array.isArray(value)) {
      // this line preserve the order
      arr = value.concat(arr);
    } else {
      array.push(value);
    }
  }
  return array;
}

flatten([1,[2,[3]],[4]]); // => [1,2,3,4]

