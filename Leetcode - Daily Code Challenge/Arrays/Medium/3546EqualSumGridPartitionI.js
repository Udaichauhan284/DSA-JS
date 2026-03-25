var canPartitionGrid = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const rowSum = Array(m).fill(0);
    const colSum = Array(n).fill(0);

    let total = 0;

    // Calculate total, rowSum, colSum
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            total += grid[i][j];
            rowSum[i] += grid[i][j];
            colSum[j] += grid[i][j];
        }
    }

    // If total is odd → cannot split equally
    if (total % 2 !== 0) return false;

    // Horizontal split
    let upper = 0;
    for (let i = 0; i < m - 1; i++) {
        upper += rowSum[i];
        if (upper === total - upper) {
            return true;
        }
    }

    // Vertical split
    let left = 0;
    for (let j = 0; j < n - 1; j++) {
        left += colSum[j];
        if (left === total - left) {
            return true;
        }
    }

    return false;
};
