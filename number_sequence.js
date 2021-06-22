function getNthNum(n) {
  if(n === 1) return '1';

  let str = getNthNum(n-1);
  let res = [], i = 0;
  while(i < str.length) {
    let cnt = 1;
    while(str[i] === str[i + 1]) {
      cnt++;
      i++;
    }
    res.push(cnt, str[i]);
    i++;
  }
  return res.join('')
}
