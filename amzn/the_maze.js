var hasPath = function(maze, start, destination) {
    let q = [start];
    let rows=maze.length;
    let cols=maze[0].length;
    
    maze[start[0]][start[1]] = -1;

    while(q.length){
        let [row,col] = q.shift();
        if(row===destination[0]&&col===destination[1]) return true;
        for(let [dx,dy] of [[1,0],[0,1],[-1,0],[0,-1]]){
            let i = row+dx;
            let j = col+dy;
            while(i>=0 && j>=0 && i<rows && j<cols && maze[i][j] !==1 ) {
                i += dx;
                j += dy;
            }
            i -= dx;
            j -= dy;
            if(maze[i][j] !== -1) {
                maze[i][j] = -1;
                q.push([i,j]);
            }
        }
    }
    return false;
};
