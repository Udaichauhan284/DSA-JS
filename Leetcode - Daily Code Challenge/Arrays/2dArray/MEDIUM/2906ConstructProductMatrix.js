var constructProductMatrix = function(grid) {
    const MOD = 12345;
    const n = grid.length;
    const m = grid[0].length;

    // Result matrix
    const p = Array.from({ length: n }, () => Array(m).fill(0));

    // Step 1: Suffix product (right → left, bottom → top)
    let suffix = 1;

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            p[i][j] = suffix;
            suffix = (suffix * grid[i][j]) % MOD;
        }
    }

    // Step 2: Prefix product (left → right, top → bottom)
    let prefix = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            p[i][j] = (prefix * p[i][j]) % MOD;
            prefix = (prefix * grid[i][j]) % MOD;
        }
    }

    return p;
};
