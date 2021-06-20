Array.prototype.myReduce = function (...args) {
  let hasInitialValue = args.length >1;  
  if(!hasInitialValue && this.length ===0) throw new Error();

  let result = hasInitialValue ? args[1] : this[0];
  let i = hasInitialValue ? 0:1;
  for(;i<this.length;i++){
    result = args[0](result,this[i],i,this);
  }
  return result;
}
