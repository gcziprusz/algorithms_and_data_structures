function sudoku2(board) {
        let N = 9;

        // Use hash set to record the status
      let rows = new Map();
      let cols = new Map();
      let boxes = new Map();
        for (let r = 0; r < N; r++) {
            rows.set(r, new Set());
            cols.set(r , new Set());
            boxes.set(r, new Set());
        }

        for (let r = 0; r < N; r++) {
            for (let c = 0; c < N; c++) {
                let val = board[r][c];

                // Check if the position is filled with number
                if (val === '.') continue;

                // Check the row
                if (rows.get(r).has(val)) return false;
                rows.get(r).add(val);

                // Check the column
                if (cols.get(c).has(val)) {
                    return false;
                }
                cols.get(c).add(val);

                // Check the box
                let idx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                if (boxes.get(idx).has(val)) return false;
                boxes.get(idx).add(val);
            }
        }
        return true;
    }
