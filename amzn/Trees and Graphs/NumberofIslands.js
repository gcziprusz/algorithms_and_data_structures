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





/******SWITCHABLE BFS DFS **************/
 /**
  * @param {character[][]} grid
  * @return {number}
  */
 var numIslands = function(grid) {
     let islands = 0;
     if (!grid) return islands ;
     let rows = grid.length;
     let cols= grid[0].length;
     for(let cr=0;cr<rows;cr++) {
         for(let cc =0;cc<cols;cc++){
             if(grid[cr][cc]==='1'){
                islands++;
                //dfs(grid,cr,cc);
                bfs(grid,cr,cc);
             }
         }
     }
     return islands;
 }
 function dfs(grid,r,c){
     if(r<0||c<0||r>=grid.length||c>=grid[0].length||grid[r][c]==='0') return
     grid[r][c] ='0'
     
     dfs(grid,r-1,c); // up
     dfs(grid,r+1,c); // down
     dfs(grid,r,c+1); // right
     dfs(grid,r,c-1); // left
 }

 function bfs(grid,r,c){
    let q =[[r,c]];
    while(q.length){
        let [cr,cc] = q.pop();
        grid[cr][cc] = '0';
        // u,d,l,r
        for(let [nr,nc] of [[cr-1,cc],[cr+1,cc],[cr,cc-1],[cr,cc+1]]){
           if(nr>=0&&nc>=0&&nr<grid.length&&nc<grid[0].length&&grid[nr][nc]==='1'){
              q.push([nr,nc]);
           }
        }
    }
 }
