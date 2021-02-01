/*
 * clockwise rotate
 * first reverse up to down, then swap the symmetry 
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  => 4 5 6  => 8 5 2
 * 7 8 9     1 2 3     9 6 3
*/
// function rotate(matrix) {
//      matrix.reverse();
//     for (var i = 0; i < matrix.length; ++i) {
//         for (var j = i + 1; j < matrix[i].length; ++j)
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
// }

/*
 * anticlockwise rotate
 * first reverse left to right, then swap the symmetry
 * 1 2 3     3 2 1     3 6 9
 * 4 5 6  => 6 5 4  => 2 5 8
 * 7 8 9     9 8 7     1 4 7
*/
// function anti_rotate(matrix) {
//     for (auto vi : matrix) reverse(vi.begin(), vi.end());
//     for (int i = 0; i < matrix.size(); ++i) {
//         for (int j = i + 1; j < matrix[i].size(); ++j)
//             swap(matrix[i][j], matrix[j][i]);
//     }
// }


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

Array.prototype.reverse = function(){
    let len = this.length;
    for(let l=0,r=len-1;l<r;r--,l++){
        [this[r],this[l]]=[this[l],this[r]]
    }
    return this;
}

