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

const rotate = function(matrix){
  matrix = matrix.reverse()
  for(let i in matrix)
    for(let j =0; j<i; j++) [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
  return matrix
}
