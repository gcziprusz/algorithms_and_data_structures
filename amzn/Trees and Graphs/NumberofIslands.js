/******DFS ********/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid === null || grid.length === 0){
       return 0;
    }
    
    let lookAround = (grid, cr,cc,rowCount,columnCount) => {
        if(cr < 0 || cc < 0 || cr >= rowCount || cc >= columnCount || grid[cr][cc] === '0'){
           return
        }
        
        grid[cr][cc] = '0';
        lookAround(grid,cr+1,cc,rowCount,columnCount);
        lookAround(grid,cr-1,cc,rowCount,columnCount);
        lookAround(grid,cr,cc+1,rowCount,columnCount);
        lookAround(grid,cr,cc-1,rowCount,columnCount);
    }
    // short circuit 
    // set number of islands to zero
    // figure out the num of rorws and columns
    // loop each row and column
    // 1 is found bump number of islands
    // set current node value to zero 
    // look around using recursion and set each node to zero
    // look around 
    // [1,1]
    // crow-1 cc
    // crow+1 cc
    // crow, cc-1
    // crow, cc+1
    // 000
    // 010
    // 000
    // return number of islands
    let numIslands = 0;
    let [rowCount,columnCount] = [grid.length,grid[0].length];
    for(let cr =0; cr < rowCount; cr++){
        for(let cc = 0 ; cc < columnCount; cc++){
            if(grid[cr][cc] === '1'){
                numIslands++;
                lookAround(grid,cr,cc,rowCount,columnCount)  
            }
        }
    }
        
    return numIslands;
};


/*******BFS********/
function numIslands(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        color(grid, i, j); 
      }   
    }   
  }
  return count;
}

function color(grid, i, j) {
  let q = [[i, j]];
  while (q.length) {
    let [x, y] = q.pop();
    grid[x][y] = '0';
    for (let [newX, newY] of [[x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]]) {
      if (
        newX >= 0 &&
        newX < grid.length &&
        newY >= 0 &&
        newY < grid[0].length &&
        grid[newX][newY] === '1' 
      ) { 
        q.push([newX, newY]);
      }   
    }   
  }
}
