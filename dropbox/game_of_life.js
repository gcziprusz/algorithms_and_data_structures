var gameOfLife = function(board) {
    let dirs = [0,1,-1];
    let rows = board.length,cols =board[0].length;
    
    for(let r = 0;r<rows;r++){
        for(let c = 0;c<cols;c++){
            let liveNeigbors =0;
            
            for(let i=0;i<3;i++){
                for(let j =0;j<3;j++){
                    if(!(dirs[i]===0&&dirs[j]===0)){
                    let nr = dirs[i]+r;
                    let nc = dirs[j]+c;
                    
                    if((nr < rows && nr >= 0) && (nc < cols && nc >= 0) && (Math.abs(board[nr][nc])===1)){
                       liveNeigbors+=1;
                    }    
                }
                   
                }
            }
            
            if (board[r][c]===1 && (liveNeigbors<2||liveNeigbors>3)) board[r][c]=-1;
            if (board[r][c]===0 && liveNeigbors===3) board[r][c]=2;
        }
    }
       for(let r = 0;r<rows;r++){
        for(let c = 0;c<cols;c++){
            if(board[r][c]>0) board[r][c]=1 
            else board[r][c]=0
        }
        }
};
