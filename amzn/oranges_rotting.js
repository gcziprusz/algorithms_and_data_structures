var orangesRotting = function (grid) {
    let rotten = [],ROWS=grid.length,COLS=grid[0].length,fresh=0,mins=0;
    for(let r = 0; r < ROWS;r++){
        for(let c =0; c< COLS;c++){
            if(grid[r][c]===2) rotten.push([r,c]);
            else if (grid[r][c]===1) fresh++;
        }
    }
    
    while(fresh && rotten.length){
        let rotting =[];
        while(rotten.length){
            let [x,y] = rotten.pop();
            for(let [x1,y1] of [[0,1],[0,-1],[1,0],[-1,0]]){
                x1+=x,y1+=y;
                if(grid[x1] && grid[x1][y1] ===1) {
                    grid[x1][y1] =2;
                    fresh--;
                    rotting.push([x1,y1]);
                }
            }
        }
        rotten = rotting;
        mins++;
    }
    return  fresh > 0 ? -1 : mins;
}
