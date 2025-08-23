/*3197. Find the Minimum Area to Cover All ones II
23 Aug 2025, Leetcode POTD, HARD

Input: grid = [[1,0,1],[1,1,1]]

Output: 5
*/

function rotateClockWise(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const rotatedGrid = Array.from({ length: n }, () => Array(m));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rotatedGrid[j][m - i - 1] = grid[i][j];
        }
    }

    return rotatedGrid;
}

function minimumArea(startRow, endRow, startCol, endCol, grid) {
    const m = grid.length;
    const n = grid[0].length;

    let minRow = m;
    let maxRow = -1;
    let minCol = n;
    let maxCol = -1;

    for (let i = startRow; i < endRow; i++) {
        for (let j = startCol; j < endCol; j++) {
            if (grid[i][j] === 1) {
                minRow = Math.min(minRow, i);
                maxRow = Math.max(maxRow, i);
                minCol = Math.min(minCol, j);
                maxCol = Math.max(maxCol, j);
            }
        }
    }

    if (maxRow === -1) return 0; // no 1's in this region

    return (maxRow - minRow + 1) * (maxCol - minCol + 1);
}

// O(m^2 * n^2)
function utility(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let result = Infinity;

    // Case 1: Split into 3 parts - Horizontal + Vertical
    for (let rowSplit = 1; rowSplit < m; rowSplit++) {
        for (let colSplit = 1; colSplit < n; colSplit++) {
            const top = minimumArea(0, rowSplit, 0, n, grid);
            const bottomLeft = minimumArea(rowSplit, m, 0, colSplit, grid);
            const bottomRight = minimumArea(rowSplit, m, colSplit, n, grid);

            result = Math.min(result, top + bottomLeft + bottomRight);

            const topLeft = minimumArea(0, rowSplit, 0, colSplit, grid);
            const topRight = minimumArea(0, rowSplit, colSplit, n, grid);
            const bottom = minimumArea(rowSplit, m, 0, n, grid);

            result = Math.min(result, topLeft + topRight + bottom);
        }
    }

    // Case 2: Split into 3 horizontal strips
    for (let split1 = 1; split1 < m; split1++) {
        for (let split2 = split1 + 1; split2 < m; split2++) {
            const top = minimumArea(0, split1, 0, n, grid);
            const middle = minimumArea(split1, split2, 0, n, grid);
            const bottom = minimumArea(split2, m, 0, n, grid);

            result = Math.min(result, top + middle + bottom);
        }
    }

    return result;
}

function minimumSum(grid) {
    let result = utility(grid);
    const rotatedGrid = rotateClockWise(grid);
    result = Math.min(result, utility(rotatedGrid));
    return result;
}
