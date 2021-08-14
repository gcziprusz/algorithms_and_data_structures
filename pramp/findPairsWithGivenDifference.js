function findPairsWithGivenDifference(arr, k) {
  let res=[],cache=new Map();
  for(let x of arr){
    let missing = x-k;
    cache.set(missing,x)
  }
    
  for(let y of arr){
    if(cache.has(y)){
      res.push([cache.get(y),y]);      
    }
  }
 
  
  return res;
}
