var numberOfSubmatrices = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Prefix sums for X and Y
    const cumSumX = Array.from({ length: m }, () => Array(n).fill(0));
    const cumSumY = Array.from({ length: m }, () => Array(n).fill(0));

    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            // Current cell contribution
            cumSumX[i][j] = (grid[i][j] === 'X') ? 1 : 0;
            cumSumY[i][j] = (grid[i][j] === 'Y') ? 1 : 0;

            // Add from top
            if (i > 0) {
                cumSumX[i][j] += cumSumX[i - 1][j];
                cumSumY[i][j] += cumSumY[i - 1][j];
            }

            // Add from left
            if (j > 0) {
                cumSumX[i][j] += cumSumX[i][j - 1];
                cumSumY[i][j] += cumSumY[i][j - 1];
            }

            // Remove double counted
            if (i > 0 && j > 0) {
                cumSumX[i][j] -= cumSumX[i - 1][j - 1];
                cumSumY[i][j] -= cumSumY[i - 1][j - 1];
            }

            // Check condition
            if (cumSumX[i][j] === cumSumY[i][j] && cumSumX[i][j] > 0) {
                count++;
            }
        }
    }

    return count;
};
