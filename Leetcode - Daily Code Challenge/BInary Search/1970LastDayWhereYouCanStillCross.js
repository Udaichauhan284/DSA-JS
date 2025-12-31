/* 1970. Last Day Where You Can Still Cross
*/
var latestDayToCross = function (row, col, cells) {
    let ROW = row;
    let COL = col;

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    function dfs(grid, i, j) {
        // out of bounds or water
        if (i < 0 || i >= ROW || j < 0 || j >= COL || grid[i][j] === 1) {
            return false;
        }

        // reached bottom row
        if (i === ROW - 1) return true;

        // mark visited
        grid[i][j] = 1;

        for (let [dx, dy] of directions) {
            if (dfs(grid, i + dx, j + dy)) {
                return true;
            }
        }

        return false;
    }

    function canCross(day) {
        // build grid for given day
        let grid = Array.from({ length: ROW }, () => Array(COL).fill(0));

        for (let i = 0; i <= day; i++) {
            let r = cells[i][0] - 1;
            let c = cells[i][1] - 1;
            grid[r][c] = 1;
        }

        // try crossing from top row
        for (let j = 0; j < COL; j++) {
            if (grid[0][j] === 0 && dfs(grid, 0, j)) {
                return true;
            }
        }

        return false;
    }

    // Binary Search on days
    let left = 0;
    let right = cells.length - 1;
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (canCross(mid)) {
            answer = mid + 1;   // days are 1-based
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
};