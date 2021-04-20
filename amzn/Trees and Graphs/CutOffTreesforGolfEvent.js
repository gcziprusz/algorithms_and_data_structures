var cutOffTree = function(forest) {
    // filter positions that have a tree and sort them ascending into a trees array
    const trees = forest.flat().filter(x => x && x !== 1).sort((a, b) => b - a);
    // starting pos and zero distance 
    let currPos = [0, 0], totalDist = 0;
    
    // while we have more trees
    while(trees.length) {
        // make a copy of the forest into grid
        const grid = [...forest.map(row => [...row])];
        // call getDist with [0,0], shortest tree and forest copy
        const res = getDist(currPos, trees.pop(), grid);
        // null return means we have no path to cut all trees
        if(res == null) return -1;
        // destructure pos and distance 
        const [pos, dist] = res;
        // update current position to the one returned [r,c]
        currPos = pos;
        // accumulate total distance traveled
        totalDist += dist;
    }
    // return the final answer
    return totalDist;    
    
    // getDist is a BFS traversal function start > [r,c] 
    function getDist(start, target, grid) {
        // we can represent directional travel as [1,0] == [r+1 c] meaning down etc.
        const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        // init the BFS q and starting zero dist
        let queue = [start], dist = 0;
        
        // while we havent process all from the q
        while(queue.length) {
            
            const next = [];
            // for each row and column pair in the q
            for(let [r, c] of queue) {
                // we found the targeted tree we can return the position and dist so far
                if(grid[r][c] === target) return [[r, c], dist];
                // if we transitioned off the grid stop here and grab a new [r,c] position
                if(!grid[r][c]) continue;
                
                // transform to 4 directions 
                for(let [x, y] of dir) {
                    x += r; y += c;
                    // if we are still in bounds for given transform
                    // and grid[x][y] means we have a valid position either a tree of empty 1 space push to position to next
                    if(x >= 0 && x < grid.length && y >= 0 && 
                       y < grid[0].length && grid[x][y]) next.push([x, y])
                }
                // we are no longer interested in this position, block it by setting it to 0
                grid[r][c] = 0;
            }
            dist++; // increment the distance
            // add the next movse to the q
            queue = next;
        }
        // return null to indicate its not possible to cut all trees
        return null;
    }
};
