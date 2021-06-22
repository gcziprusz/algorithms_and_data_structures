function subtract(num1, num2) {
  let n1 = Array.from(num1),n2 = Array.from(num2)
  let carry = 0,result = []
  
  while (n1.length || n2.length || carry) {
    let sub = (+n1.pop() || 0) - (+n2.pop() || 0) + carry + 10
    carry = Math.floor(sub / 10) > 0 ? 0 : -1
    result.unshift(sub % 10)
  }
  return parseInt(result.join(''),10).toString()
}
