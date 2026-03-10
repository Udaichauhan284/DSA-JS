var numberOfStableArrays = function(zero, one, limit) {

    const MOD = 1000000007;

    // 3D DP array
    const dp = Array.from({ length: zero + 1 }, () =>
        Array.from({ length: one + 1 }, () => new Array(2).fill(-1))
    );

    function solve(i, j, last) {

        // Base: no elements left
        if (i === 0 && j === 0) return 0;

        // Base: only zeros left
        if (j === 0) {
            if (last === 1) return 0;
            return (i <= limit) ? 1 : 0;
        }

        // Base: only ones left
        if (i === 0) {
            if (last === 0) return 0;
            return (j <= limit) ? 1 : 0;
        }

        if (dp[i][j][last] !== -1) {
            return dp[i][j][last];
        }

        let result = 0;

        if (last === 0) {

            // place zero
            result = (solve(i - 1, j, 0) + solve(i - 1, j, 1)) % MOD;

            // remove invalid sequences exceeding limit
            if (i - 1 >= limit) {
                result = (result - solve(i - 1 - limit, j, 1) + MOD) % MOD;
            }

        } else {

            // place one
            result = (solve(i, j - 1, 0) + solve(i, j - 1, 1)) % MOD;

            // remove invalid sequences exceeding limit
            if (j - 1 >= limit) {
                result = (result - solve(i, j - 1 - limit, 0) + MOD) % MOD;
            }
        }

        dp[i][j][last] = result;
        return result;
    }

    return (solve(zero, one, 0) + solve(zero, one, 1)) % MOD;
};
