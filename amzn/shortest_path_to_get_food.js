var getFood = function(grid) {
    // rows,cols
    // transofrm
    // find starting point
    // keep a Q of x,y distance
    // BFS the maze 
    // return -1 if not found
    let rows = grid.length,cols = grid[0].length,q=[];
    for(let r =0; r<rows;r++){
        for(let c =0;c<cols;c++){
            if(grid[r][c] === '*') q.push([r,c,0]) // x,y,distance
        }
    }
    while(q.length){
        let [x,y,dis] = q.shift();
        for(let [x1,y1] of [[x+1,y],[x-1,y],[x,y+1],[x,y-1]]){
            if(x1>=0 && x1<rows && y1>=0 && y1<cols && grid[x1][y1] !== 'X'){
               if(grid[x1][y1] === "#") return dis+1
               else{
                   grid[x1][y1]='X';
                   q.push([x1,y1,dis+1]);
               }
            }
        }
    }
    return -1;
}
