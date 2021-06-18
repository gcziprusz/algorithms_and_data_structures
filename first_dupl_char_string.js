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
