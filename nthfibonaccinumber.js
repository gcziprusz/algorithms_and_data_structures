// fibonacci sequence  0,1,1,2,3,5,8,13,21.
/* simple */
const fibonacci = (n) => {  
  if (n < 3) {
    return n - 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

/*alternative*/
function fibonacci(n) {
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2);
}




var fibo = function(computed, number) {
if (number < 3) {
 return 1;
 }
 // If fibonacci for this this position is calculated just return.
 // This is called memoization (Dynamic Programming)
 if (computed[number]) {
 return computed[number]
 } else {
 computed[number — 1] = fibo(computed, number — 1);
 computed[number — 2] = fibo(computed, number — 2);
 return computed[number — 1] + computed[number — 2];
 }
}


