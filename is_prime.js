// ** naive solution with lots of comparisons O(n)
function isPrime(num) {
  if (num < 2) return false

  for(let i = 2; i <=num; i++) {
    if (num % i === 0) return false
  }

  return true
}

//OPTIMIZED/
function isPrime(num) {
  
  const squareRootOfNum = Math.floor(Math.sqrt(num));
  
  let prime = num > 1;
  
  for(i = 2; i <= squareRootOfNum; i++) {
    if(num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
