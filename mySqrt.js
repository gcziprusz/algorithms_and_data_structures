// Recursive Babylonian square-root algorithm
function mySqrt(x) {
  if(x == 0 || x == Infinity) return x;
  if(typeof x != 'number' || x == -Infinity || x < 0 || Number.isNaN(x) ) return NaN;
  
  var epsilon = 0.1;
   function isGoodEnough(est){
     if(Math.abs(Math.pow(est,2)-x)<epsilon) return true
     else return false;
   }
   function improve(est) {
    return (est +(x/est)) /2
   }
   function iter(est){
      if(isGoodEnough(est)){
        return est;
      } else {
        return iter(improve(est));
      }
   }
  return Math.trunc(iter(x));
}



function mySqrt(x) {
  /** === Using the Babylonian square-root algorithm === */
  // special cases
  if(x == 0 || x == Infinity) return x;
  if(typeof x != 'number' || x == -Infinity || x < 0 || Number.isNaN(x) ) return NaN;
  // till what precision we want to find square root of a number.
  // doesn't matter in this case as we want to return only integer part.
  const precision = 0.00001;
  let guess = x / 2; // usually middle of 'x'
  let lastGuess = x / 2; // we compare the guess with last guess, we loop till we their difference crosses 'precision'
  while(true) {
    guess = (guess + x / guess) / 2; // Babylonian square-root algorithm
    if(lastGuess - guess <= precision) return Math.trunc(guess); // return only integer part
    lastGuess = guess; // update last guess with guess
  }
}
