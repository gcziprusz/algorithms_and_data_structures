// Here is the input

// let matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
// First we reverse the matrix

// [
//   [7,8,9],
//   [4,5,6],
//   [1,2,3]
// ]
// And then we transpose the matrix, please notice the nested loop, basically we exchange these two parts:
// Part1

// [
//   [ , , ],
//   [4, , ],
//   [1,2, ]
// ]
// Part2

// [
//   [ ,8,9],
//   [ , ,6],
//   [ , , ]
// ]
// And here you go

// [
//   [7,4,1]
//   [8,5,2]
//   [9,6,3]
// ]

var rotate = function(matrix) {
    matrix.reverse();
    for(let rowIndex in matrix){
       for(let columnIndex =0; columnIndex<rowIndex; columnIndex++){
         [matrix[rowIndex][columnIndex], matrix[columnIndex][rowIndex]] 
           = [matrix[columnIndex][rowIndex], matrix[rowIndex][columnIndex]]
       } 
    }
    return matrix;
};
