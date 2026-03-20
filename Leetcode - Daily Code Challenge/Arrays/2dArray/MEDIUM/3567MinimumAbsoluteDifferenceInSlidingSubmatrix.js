var minAbsDiff = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    const result = Array.from({ length: m - k + 1 }, () =>
        Array(n - k + 1).fill(0)
    );

    for (let i = 0; i <= m - k; i++) {
        for (let j = 0; j <= n - k; j++) {

            // Use Set for distinct values
            const vals = new Set();

            // Collect elements of k x k submatrix
            for (let r = i; r < i + k; r++) {
                for (let c = j; c < j + k; c++) {
                    vals.add(grid[r][c]);
                }
            }

            // Convert to sorted array
            const arr = Array.from(vals).sort((a, b) => a - b);

            // If only one unique element → diff = 0 (already default)
            if (arr.length === 1) continue;

            let minDiff = Infinity;

            // Find min difference between consecutive elements
            for (let idx = 1; idx < arr.length; idx++) {
                minDiff = Math.min(minDiff, arr[idx] - arr[idx - 1]);
            }

            result[i][j] = minDiff;
        }
    }

    return result;
};
