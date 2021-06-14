/**
 * @param { string[][] } message
 * @returns { string }
 */
let maze = 
[
//  0    1    2    3    4    5    6
  ['I', 'B', 'C', 'A', 'L', 'K', 'A'], //0
  ['D', 'R', 'F', 'C', 'A', 'E', 'A'], //1
  ['G', 'H', 'O', 'E', 'L', 'A', 'D'], //2
];
// R0 C0   = I
// R+1 C+1 = R
// R+1 C+1 = O
//   

// exit c > cols && r > rows && rows >=0 

function decode(message) {
  let result = '';
  if (!message.length) return result;
  if (!message[0].length) return result
 
  let ROWS = message.length,COLS = message[0].length;
  let row = 0,col=0,dirY=1;
  
  while (col < COLS && row >= 0 && row < ROWS) {
    result += message[row][col];

    col += 1
    row += dirY
    
    if (row >= ROWS) {
      dirY = -1
      row -= 2
    } else if (row < 0) {
      dirY = 1
      row += 2
    }
  }
  return result
}



/** ALTERNATIVE ***/
const a = [
	['I', 'B', 'C', 'A', 'K', 'L', 'A'],
  ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
  ['G', 'H', 'O', 'E', 'L', 'A', 'D'],
];

const UP = 1;
const DOWN = -1;

function print(a) {
	const result = [];
	const rows = a.length;
  const cols = a[0].length;
  let dir = DOWN;
  let row = 0;
  
  for (let col = 0; col < cols; col++) {
  	result.push(a[row][col]);
    
    if (dir === DOWN) {
    	row++;
      dir = (row === rows - 1 ? UP : DOWN);
    } else {
    	row--;
      dir = (row === 0 ? DOWN : UP);
    }
  }
  
  return result.join('');
}

console.log(print(a));
