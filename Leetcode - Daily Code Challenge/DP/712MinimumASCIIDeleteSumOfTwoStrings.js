var minimumDeleteSum = function(s1, s2) {
    const m = s1.length;
    const n = s2.length;

    // t[i][j] = minimum delete sum to make s1[i:] and s2[j:] equal
    const t = Array.from({ length: m + 1 }, () =>
        Array(n + 1).fill(-1)
    );

    function solve(i, j) {
        // both strings exhausted
        if (i >= m && j >= n) return 0;

        if (t[i][j] !== -1) return t[i][j];

        // s1 exhausted → must delete rest of s2
        if (i >= m) {
            return t[i][j] = s2.charCodeAt(j) + solve(i, j + 1);
        }

        // s2 exhausted → must delete rest of s1
        if (j >= n) {
            return t[i][j] = s1.charCodeAt(i) + solve(i + 1, j);
        }

        // characters match → no delete needed
        if (s1[i] === s2[j]) {
            return t[i][j] = solve(i + 1, j + 1);
        }

        // choose min delete
        const deleteS1 = s1.charCodeAt(i) + solve(i + 1, j);
        const deleteS2 = s2.charCodeAt(j) + solve(i, j + 1);

        return t[i][j] = Math.min(deleteS1, deleteS2);
    }

    return solve(0, 0);
};
