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

function extract(str) {
  // your code here
  const result = [];
  while (true) {
    const start = str.search(/<a>|<a /);
    if (start === -1) break;
    var tempStr = str.slice(start + 2);
    const end = tempStr.indexOf('a>');
    const tpl = '<a' + tempStr.slice(0, end + 2);
    result.push(tpl);
    str = str.replace(tpl, '');
  }

  return result;
}
