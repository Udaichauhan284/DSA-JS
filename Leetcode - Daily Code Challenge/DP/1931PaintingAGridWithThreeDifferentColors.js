/* 1931. Painting a Grid With Three Different Colors
18 May 2025, Leetcode POTD Hard

*/

var colorTheGrid = function(m, n) {
    const MOD = 1e9 + 7;

    let columnStates = [];

    /**
     * Recursively generate all valid column states of height m
     * where no two vertically adjacent cells have the same color.
     */
    function generateColumnStates(currentColumn, rowsRemaining, prevColor) {
        if (rowsRemaining === 0) {
            columnStates.push(currentColumn);
            return;
        }

        for (const color of ['R', 'G', 'B']) {
            if (color === prevColor) continue;
            generateColumnStates(currentColumn + color, rowsRemaining - 1, color);
        }
    }

    generateColumnStates("", m, '#'); // '#' is dummy initial color

    const numColumnPatterns = columnStates.length;

    // Initialize memoization table
    const t = Array.from({ length: n }, () => Array(numColumnPatterns).fill(-1));

    /**
     * Recursively calculate number of ways to fill remaining columns.
     * @param {number} remainingCols - columns left to fill
     * @param {number} prevColumnIdx - index of previous column pattern
     * @return {number}
     */
    function solve(remainingCols, prevColumnIdx) {
        if (remainingCols === 0) return 1;
        if (t[remainingCols][prevColumnIdx] !== -1) return t[remainingCols][prevColumnIdx];

        let totalWays = 0;
        const prevColumn = columnStates[prevColumnIdx];

        for (let nextColumnIdx = 0; nextColumnIdx < columnStates.length; nextColumnIdx++) {
            const nextColumn = columnStates[nextColumnIdx];
            let valid = true;

            // Check horizontal adjacency: no same color in the same row
            for (let r = 0; r < m; r++) {
                if (prevColumn[r] === nextColumn[r]) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                totalWays = (totalWays + solve(remainingCols - 1, nextColumnIdx)) % MOD;
            }
        }

        return t[remainingCols][prevColumnIdx] = totalWays;
    }

    // Try each column pattern as starting column
    let result = 0;
    for (let i = 0; i < numColumnPatterns; i++) {
        result = (result + solve(n - 1, i)) % MOD;
    }

    return result;
};

/*
Time Complexity:
- O(3^m * 3^m * n) in worst case
  - 3^m: number of possible vertical column states
  - For each pair of valid columns, check horizontal compatibility in O(m)
  - Memoization table size: n x 3^m

Space Complexity:
- O(n * 3^m) for memoization
- O(3^m) for storing column states
*/
