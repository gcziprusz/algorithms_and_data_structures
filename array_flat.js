/** recursive */
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


/**
 * recursive with depth gause
 * @param { Array } arr
 * @param { number } depth
 */
function flat(arr, depth = 1) {
  return depth ? 
    arr.reduce((acc, curr) => {
      return [...acc, ...(Array.isArray(curr) ? flat(curr, depth - 1) : [curr])]
    }, []) : arr;
}

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


/**
 * @param { Array } arr
 * @param { number } depth
 * Iterative solution alternative 
 */
function flat(arr, depth = 1) {
  const stack = arr.map(item => [item, depth])
  const res = []
  
  while (stack.length > 0) {
    const [item, itemDepth] = stack.pop()
    if (Array.isArray(item) && itemDepth > 0) {
      stack.push(...item.map(i => [i, itemDepth - 1]))
    } else {
      res.push(item)
    }
  }
  
  return res.reverse()
}

/* USING GENERATORS 
**
 * @param {Array} arr
 * @param {number} depth
 */
function flat(arr, depth = 1) {
  function* flt(arr, d) {
    for (const item of arr) {
      if (Array.isArray(item) && d >0) {
        yield* flt(item, d-1);
      } else {
        yield item;
      }
    }    
  }
  return [...flt(arr, depth)];
}
