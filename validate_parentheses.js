function validate(str) {
  let pairs = new Map([['}','{'],[']','['],[')','(']]);
  let chars = str.split("");
  let stack = [];
  for(let c of chars){
    if(pairs.has(c)){
      if(pairs.get(c) !== stack.pop()) return false
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
}
