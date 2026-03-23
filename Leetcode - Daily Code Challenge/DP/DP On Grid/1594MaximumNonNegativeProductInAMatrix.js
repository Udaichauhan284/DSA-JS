var maxProductPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const MOD = 1e9 + 7;

    // DP table: each cell stores [maxProduct, minProduct]
    const dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => [null, null])
    );

    function solve(i, j) {
        // Base case
        if (i === m - 1 && j === n - 1) {
            return [grid[i][j], grid[i][j]];
        }

        // Memoization check
        if (dp[i][j][0] !== null) {
            return dp[i][j];
        }

        let maxVal = -Infinity;
        let minVal = Infinity;

        // Move Down
        if (i + 1 < m) {
            const [downMax, downMin] = solve(i + 1, j);

            maxVal = Math.max(
                maxVal,
                grid[i][j] * downMax,
                grid[i][j] * downMin
            );

            minVal = Math.min(
                minVal,
                grid[i][j] * downMax,
                grid[i][j] * downMin
            );
        }

        // Move Right
        if (j + 1 < n) {
            const [rightMax, rightMin] = solve(i, j + 1);

            maxVal = Math.max(
                maxVal,
                grid[i][j] * rightMax,
                grid[i][j] * rightMin
            );

            minVal = Math.min(
                minVal,
                grid[i][j] * rightMax,
                grid[i][j] * rightMin
            );
        }

        dp[i][j] = [maxVal, minVal];
        return dp[i][j];
    }

    const [maxProd] = solve(0, 0);

    return maxProd < 0 ? -1 : maxProd % MOD;
};
