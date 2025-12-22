// Approach - Using LIS Khandani Template
// T.C : O(cols * cols * rows)
// S.C : O(cols)
var minDeletionSize = function(strs) {
    const rows = strs.length;
    const cols = strs[0].length;

    // dp[i] = length of LIS ending at column i
    const dp = Array(cols).fill(1);

    let LIS = 1;

    // Khandani LIS Pattern
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < i; j++) {

            let valid = true;

            // Check if column j can come before column i
            for (let k = 0; k < rows; k++) {
                if (strs[k][j] > strs[k][i]) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }

        LIS = Math.max(LIS, dp[i]);
    }

    return cols - LIS;
};