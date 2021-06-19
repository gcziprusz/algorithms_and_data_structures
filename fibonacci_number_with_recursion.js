function fib(n, result1 = 1, result2 = 1){
  if (n === 0) return 0
  if (n <= 2) return result2
  return fib(n - 1, result2, result1 + result2)
}
