// RECURSIVE
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

// ITERATIVE
function getNthNum(n) {
  let res = "1";
  for (let i = 1; i < n; i++) {
    let c =1;
    let currRes = '';
    for(let j =0;j<=res.length-1;j++){
      if(res[j]===res[j+1]){
        c++;
      } else {
        currRes += c+res[j]
        c=1;
      }
    }
    res=currRes;
  }
  return res;
}
