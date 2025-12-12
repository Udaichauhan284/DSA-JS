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



//12 Dec 2025, leetcode, HARD
/* Method 1: Recursion + Memo
   TC: O(n*m*k), SC: O(n*m*k)
*/
const M = 1e9 + 7;

var numberOfPaths = function (grid, k) {
    let n = grid.length;
    let m = grid[0].length;

    // dp[n][m][k]
    let dp = Array.from({ length: n }, () =>
        Array.from({ length: m }, () =>
            Array(k).fill(-1)
        )
    );

    return solve(0, 0, 0, grid, k, n, m, dp);
};

function solve(i, j, currSum, grid, k, n, m, dp) {

    // boundary check (must be >=)
    if (i >= n || j >= m) return 0;

    // if last cell reached
    if (i === n - 1 && j === m - 1) {
        return ((currSum + grid[i][j]) % k === 0 ? 1 : 0);
    }

    // memo check
    if (dp[i][j][currSum] !== -1) return dp[i][j][currSum];

    // explore both directions with updated sum
    let newSum = (currSum + grid[i][j]) % k;

    let down = solve(i + 1, j, newSum, grid, k, n, m, dp);
    let right = solve(i, j + 1, newSum, grid, k, n, m, dp);

    // store result
    dp[i][j][currSum] = (down + right) % M;

    return dp[i][j][currSum];
}