// https://leetcode.com/problems/set-matrix-zeroes/submissions/
//  73. Set Matrix Zeroes

var setZeroes = function(matrix) {
  let rows=matrix.length,cols=matrix[0].length;
  let zeroRows = new Set(),zeroCols=new Set();
    
  for(let r =0;r<rows;r++){
      for(let c =0; c< cols;c++){
          if(matrix[r][c]===0) {
              zeroRows.add(r);
              zeroCols.add(c);
          }
      }
  }
  for(let r =0;r<rows;r++){
      for(let c =0; c< cols;c++){
          if(zeroRows.has(r) || zeroCols.has(c)) {
            matrix[r][c] = 0;
          }
      }
  }
    
};
