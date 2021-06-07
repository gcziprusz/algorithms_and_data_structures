const chunk = (array, size = 1) => {
 let res = [];
  for(let i =0; i< array.length;i = size+1){
    res.push(array.slice(i,i+size));
  }
  
 return res;
};

console.log('',chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]
