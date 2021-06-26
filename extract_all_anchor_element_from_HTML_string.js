function extract(str) {
  const regexp = /<a(\s[^>]*)?>.*?<\s*\/\s*a>/g
  return str.match(regexp) ?? []
}


function extract(str) {
  let i = 0;
  let res = [];
  while (i < str.length) {
    let start = str.indexOf('<a', i);
    if (start === -1) return res;
    if (str[start + 2] !== ' ' && str[start + 2] !== '>') {
      i += 2;
    } else {
      let end = str.indexOf('a>', start + 2);
      if (end === -1) return res;
      res.push(str.slice(start, end + 2));
      i = end + 2;
    }
  }
  return res;
}
