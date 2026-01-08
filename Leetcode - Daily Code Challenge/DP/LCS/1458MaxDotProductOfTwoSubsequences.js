var maxDotProduct = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;

    const NEG_INF = -1e9;

    // DP table: t[i][j]
    const t = Array.from({ length: m }, () =>
        Array(n).fill(NEG_INF)
    );

    function solve(i, j) {
        // Base case: reached end of either array
        if (i === m || j === n) {
            return NEG_INF;
        }

        if (t[i][j] !== NEG_INF) {
            return t[i][j];
        }

        const val = nums1[i] * nums2[j];

        // Take both i and j
        const take_i_j = solve(i + 1, j + 1) + val;

        // Skip nums2[j]
        const take_i = solve(i, j + 1);

        // Skip nums1[i]
        const take_j = solve(i + 1, j);

        // IMPORTANT: val alone ensures at least one pair is picked
        t[i][j] = Math.max(val, take_i_j, take_i, take_j);

        return t[i][j];
    }

    return solve(0, 0);
};