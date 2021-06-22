function isPrime(num) {
  
  // Wait! What? We need square root here? 🤔
  // Yes, I had same question. You may want to check out below link for explanation.
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
