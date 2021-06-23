unction multiply(a, b) {
  // detect answer sign
  const aSign = a[0] === '-' ? -1 : 1;
  const bSign = b[0] === '-' ? -1 : 1;
  const sign = aSign * bSign === -1 ? '-' : '';
  if (a[0] === '-') a = a.substring(1);
  if (b[0] === '-') b = b.substring(1);
  
  // answer can't be longer than a.length + b.length
  const ans = new Array(a.length + b.length).fill(0);
  // multiply a and b not bothering with carrying excess to the left,
  // it's actually faster to do this in one run from right to left later
  for (let ia = a.length - 1; ia >= 0; ia--) {
    for (let ib = b.length - 1; ib >= 0; ib--) {
      const da = a[ia] - '0';
      const db = b[ib] - '0';
      ans[ia + ib + 1] += da * db;
    }
  }
  
  // after multiplying '19' and '24' ans = [0,2,22,36]
  // we need to carry everything >= 10 to the left
  let carry = 0;
  for (let i = ans.length - 1; i >= 0; i--) {
    const sum = ans[i] + carry;
    ans[i] = sum % 10;
    carry = Math.floor(sum / 10);
  }
  // after doing so we'll have ans = [0,4,5,6]
  
  // remove all leading zeroes (don't use ans.shift because it's O(n) complexity)
  for (let i = 0; i < ans.length && ans[i] === 0; i++) {
    ans[i] = '';
  }
  // ans = [4,5,6]
  
  return ans[ans.length - 1] === '' ? '0' : sign + ans.join('');
}

/*alternative*/

function multiply(a, b) {
  let sign = ''

  if (a === '0' || b === '0') return '0';

  if(a[0] === '-' && b[0] !== '-') {
    sign = '-'
    a = a.substr(1)
  } else if (a[0] !== '-' && b[0] === '-') {
    sign = '-'
    b = b.substr(1)
  } else if (a[0] === b[0] && a[0] === '-') {
    a = a.substr(1);
    b = b.substr(1);
  }

  let result = new Array(a.length + b.length).fill(0)

  for(let i = a.length -1; i >= 0; i --) {
    for(let j = b.length -1; j >= 0; j--) { 
      const m = i + j + 1
      const n = i + j

      const s = (+a[i]) * (+b[j]) + result[m] 
      result[m] = s % 10
      result[n] += Math.floor(s / 10)
    }
  }

  while (result[0] === 0) {
    result.shift()
  }

  return sign + result.join('')
}
