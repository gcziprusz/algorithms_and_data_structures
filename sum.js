function sum(num, currentSum = 0) {
  const newCurrentSum = num + currentSum
  
  const func = function(arg) {
    return sum(arg, num + currentSum)
  }
  
  func.valueOf = () => newCurrentSum
//   func.toString = () => newCurrentSum.toString()
  
  return func
}

// ALTERNATIVE 
function sum(num) {
  const func = function(num2) { 
    return num2 ? sum(num+num2) : num; 
  }
  
  func.valueOf = () => num; 
  return func;
}


// USing a symbol 
/**
 * @param {number} num
 */
function sum(a) {
  const fn = (b) => sum(a + b);
  fn[Symbol.toPrimitive] = () => a;
  return fn;
}
