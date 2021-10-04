var islandPerimeter = function(grid) {
    let rows = grid.length,cols=grid[0].length;
    
    
    let res=0;
    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(grid[r][c]!==1) continue;
            res+=4;
            if(r > 0 && grid[r-1][c]===1) res-=2;
            if(c > 0 && grid[r][c-1]===1) res-=2;
        }
    }
    
    return res;
    
};
