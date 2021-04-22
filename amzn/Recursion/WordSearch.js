 function exist(board, word) {
    ROWS = board.length;
    COLS = board[0].length;

    for (let row = 0; row < ROWS; ++row)
      for (let col = 0; col < COLS; ++col)
        if (backtrack(row, col, word, 0)) {
        // if (backtrack2(row, col, word, 0)) {
            return true;
        }
    return false;
    
    function backtrack(row, col,  word, index) {
        /* Step 1). check the bottom case. */
        if (index >= word.length) return true;
    
        /* Step 2). Check the boundaries. */
        if (row < 0 || row === ROWS || col < 0 || col === COLS
            || board[row][col] != word.charAt(index))
          return false;
    
        /* Step 3). explore the neighbors in DFS */
        // mark the path before the next exploration
        board[row][col] = '#';
    
        for(let [r,c] of [[1,0],[-1,0],[0,1],[0,-1]]){
            if (backtrack(row + r, col + c, word, index + 1))
              // return without cleanup
              return true;
        }
    
        /* Step 4). clean up and return the result. */
        board[row][col] = word.charAt(index);
        return false;
      }
      function backtrack2( row,  col,  word,  index) {
        /* Step 1). check the bottom case. */
        if (index >= word.length)
          return true;
    
        /* Step 2). Check the boundaries. */
        if (row < 0 || row === ROWS || col < 0 || col === COLS
            || board[row][col] != word.charAt(index))
          return false;
    
        /* Step 3). explore the neighbors in DFS */
        let ret = false;
        // mark the path before the next exploration
        board[row][col] = '#';
    
        for ( let [r,c] of [[1,0],[-1,0],[0,1],[0-1]]){
            if (backtrack(row + r, col + c, word, index + 1)) break;
        }
    
        /* Step 4). clean up and return the result. */
        board[row][col] = word.charAt(index);
        return ret;
      }
  }
