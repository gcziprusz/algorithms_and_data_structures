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

