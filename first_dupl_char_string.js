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


function firstDuplicate(str) {
  // your code here

  let duplicate = '';
  for (var i = 0; i < str.length; i++) {
    if (i !== str.lastIndexOf(str[i])) {
      duplicate = str[i];
      break;
    }
  }

  return duplicate.length > 0 ? duplicate : null
}
