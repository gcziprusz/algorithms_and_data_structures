function map(arr, fn){
  let res =[]
  for(let i =0;i< arr.length;i++){
    res.push(fn(arr[i]);
  }
  return res;
}

/*MUCH MORE ACCURATE AND COMPLETE MAP*/
Array.prototype.myMap = function(callback, thisArg) {
  const length = this.length;
  const result = new Array(length);
  for (let i = 0; i < length; i++) {
    if(i in this){
      result[i] = callback.call(thisArg, this[i],i,this);
    }
  }
  return result
}
