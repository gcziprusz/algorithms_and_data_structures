function valid(x) {
  if(isNaN(x) || typeof x !== 'number' || Math.sign(x) === -1) return [false,NaN];
  else if(x===0 || x ===Infinity) return [false,x];
  return [true]
}

function mySqrt(x){
  let [validX,retValue] = valid(x);
  if(!validX) return retValue;

  let i =0;

  while(i*i<=x){
    i +=1;
  }
  return i-1;
}


// Simple brute force approach
function mySqrt(x){
    if(x === NaN || x === Infinity) return x;
    if(x===-Infinity || x < 0 || isNaN(x) || typeof x !== 'number' ) return NaN

    let i = 0
    
    while (i*i <= x){
      i += 1;
    }
    return i-1
}



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


/* SEARCH METHOD */ 
function mySqrt(x) {
  if(isNaN(x) || x < 0) return NaN
  let left = 1,right = Math.floor(x / 2) + 1,mid = 0;
  while(left <= right) {
    mid = Math.floor((left + right) / 2);
    const tmp = Math.pow(mid, 2);
     if(tmp > x) {
       right = mid - 1;
     } else if(tmp < x) {
       left = mid + 1;
     } else {
       return mid
     }
  }
  return right;  
}
