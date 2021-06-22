function is(a, b) {
   // NaN, NaN case
   if(a !== a && b !== b) {
     return true;
   }
   // 0, -0 case
   if (a === 0 && b === 0 && 1 / a !== 1 / b) {
     return false;
   }

   return a === b;
}


/*alternative with tostring*/
function is(a, b) {
  if (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)) {
    return true;
  }
 
  if (typeof a === 'number' && typeof b === 'number') {
    return a.toLocaleString() === b.toLocaleString();
  }

  return a === b;
}
