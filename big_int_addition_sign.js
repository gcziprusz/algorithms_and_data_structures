function add(num1, num2) {
  // just normal add 
  num1 = Array.from(num1)
  num2 = Array.from(num2)

  let res = []
  let carry = 0
  
  while (num1.length || num2.length || carry) {
    let curr = (Number(num1.pop()) || 0) + (Number(num2.pop()) || 0) + carry;
    carry = Math.floor(curr / 10)
    curr %= 10
    res.unshift(curr)
  }
  return res.join("");
}
