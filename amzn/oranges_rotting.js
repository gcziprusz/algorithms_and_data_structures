var orangesRotting = function (grid) {
	let minute = 0,totalFreshOranges = 0,rottenOranges = [];
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === 1) totalFreshOranges++;
			if (grid[i][j] === 2) rottenOranges.push([i, j]);
		}
	}
	const m = [[0, -1], [0, 1], [-1, 0], [1, 0],];
	while (totalFreshOranges && rottenOranges.length) {
		let rottingOranges = [];
		while (rottenOranges.length) {
			let [x, y] = rottenOranges.pop();
			for (let i = 0; i < 4; i++) {
				let [x2, y2] = [x + m[i][0], y + m[i][1]];
				if (grid[x2] && grid[x2][y2] === 1) {
					grid[x2][y2] = 2;
					totalFreshOranges--;
					rottingOranges.push([x2, y2]);
				}
			}
		}
		rottenOranges = rottingOranges;
		minute++;
	}
	return totalFreshOranges ? -1 : minute;
};
