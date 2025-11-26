const M = 1e9 + 7;

function numberOfPaths(grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    // 3D DP: m × n × k
    const t = Array.from({ length: m }, () =>
        Array.from({ length: n }, () =>
            Array(k).fill(-1)
        )
    );

    function solve(row, col, remain) {
        // out of bounds
        if (row >= m || col >= n) return 0;

        // reached last cell
        if (row === m - 1 && col === n - 1) {
            return ((remain + grid[row][col]) % k === 0) ? 1 : 0;
        }

        if (t[row][col][remain] !== -1) {
            return t[row][col][remain];
        }

        const newRemain = (remain + grid[row][col]) % k;

        const down = solve(row + 1, col, newRemain);
        const right = solve(row, col + 1, newRemain);

        t[row][col][remain] = (down + right) % M;

        return t[row][col][remain];
    }

    return solve(0, 0, 0);
}
