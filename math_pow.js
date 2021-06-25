/**EASY**/
function pow(base, power){
  if (power === 0) return 1;
  if (power === 1) return base;
  let res = base;
  for (let i = 0; i < Math.abs(power) - 1; i++) {
    res*=base;
  }
  if (power < 0) return 1 / res;
  return res;
}


// Time complexity: O(logn)
// The idea is to reduce the power by half at each recursion until power reaches the base cases, 0 and 1.

//               pow(2, 10)          = 32 * 32       = 1024
//                  /
//             pow(2, 5)              = 4 * 4 * 2     = 32 (power is odd number so * 2 is needed)
//              /
//          pow(2, 2)                 = 2 * 2           = 4 
//            /
//        pow(2,1)                     = 2                = 2  (base case)

function pow(base, power){
  if (power < 0) {
    return 1 / powBinary(base, -power)
  }
  
  return powBinary(base, power)
}

function powBinary(base, power) {
  if (power === 0) return 1
  if (power === 1) return base
  
  const halfRes = pow(base, Math.floor(power / 2))
  return power % 2 == 0 ? halfRes * halfRes : halfRes * halfRes * base
}
