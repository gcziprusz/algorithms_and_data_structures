function smallestUniqueSubstr(str) {
  if (str.length === 0) return str;

  let subStr = new Set();
  let lastElem = str[str.length-1];
  subStr.add(lastElem);
  for (let i=str.length-2; i>=0; i--) {
    let char = str[i];
    if (char < lastElem || !subStr.has(char)) {
      subStr.delete(char);
      subStr.add(char);
      lastElem = char;
    }
  }
  return Array.from(subStr).reverse().join('');
}
