var countSubmatrices = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            // Build prefix sum in-place
            if (i > 0) 
                grid[i][j] += grid[i - 1][j];

            if (j > 0) 
                grid[i][j] += grid[i][j - 1];

            if (i > 0 && j > 0) 
                grid[i][j] -= grid[i - 1][j - 1];

            // Check condition
            if (grid[i][j] <= k) {
                count++;
            } else {
                // Optimization: stop further columns in this row
                break;
            }
        }
    }

    return count;
};
