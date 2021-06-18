// find the first duplicate character in a string
function firstDuplicate(str) {
  let dupes = new Set();
  let chars = str.split("");
  for(let c of chars){
    if(dupes.has(c)) return c;
    dupes.add(c);
  }
  return null;
}



// O(1) space using lastIndexOf
function firstDuplicate(str) {
  for(let i = 0; i< str.length;i++){
    let lastI = str.lastIndexOf(str[i]);
    if(i!== lastI) return str[i]
  }
  return null;
}
