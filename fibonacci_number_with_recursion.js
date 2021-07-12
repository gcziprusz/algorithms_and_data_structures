// index/input> 
// 0 1 2 3 4 5 6 7  8  9  10
// | | | | | | | |  |  |  |
// v v v v v v v v  v  v  v    
// 0 1 1 2 3 5 8 13 21 34 55
// fib sequence

// simple exponential 
   function fib(n) {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}
// iterative 
function fib(n)
{
  let a = 0, b = 1, c, i;
  if (n === 0)
    return a;
  for (i = 2; i <= n; i++)
  {
     c = a + b;
     a = b;
     b = c;
  }
  return b;
}

// space optimized method 
function fib(n)
{
    let a = 0, b = 1, c, i;
    if( n == 0)
        return a;
    for(i = 2; i <= n; i++)
    {
    c = a + b;
    a = b;
    b = c;
    }
    return b;
}

// using math O(1) http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/fibFormula.html 
 function fib(n) {
      let phi = (1 + Math.sqrt(5)) / 2;
      return Math.round(Math.pow(phi, n) / Math.sqrt(5));
    }

// tail recursion
function fib(n, a = 0, b = 1){
  if (n === 0) return a;
  if (n === 1) return b;
  return fib(n - 1, b, a + b);
}


// Dynamic programming
function  fib(n)
    {
        /* Declare an array to store Fibonacci numbers. */
        let f = new Array(n+2); // 1 extra to handle case, n = 0
        let i;
        /* 0th and 1st number of the series are 0 and 1*/
        f[0] = 0;
        f[1] = 1;
        for (i = 2; i <= n; i++)
        {
            /* Add the previous 2 numbers in the series
            and store it */
            f[i] = f[i-1] + f[i-2];
        }
        return f[n];
    }
