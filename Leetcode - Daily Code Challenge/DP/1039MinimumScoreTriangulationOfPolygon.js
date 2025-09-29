/*
1039. Minimum Score Triangulation of Polygon
29 sept 2025, leetcode potd, medium
Input: values = [1,2,3]

Output: 6

Explanation: The polygon is already triangulated, and the score of the only triangle is 6.


*/

var minScoreTriangulation = function (values) {
    const n = values.length;
    const memo = new Map();
    const dp = (i, j) => {
        if (i + 2 > j) {
            return 0;
        }
        if (i + 2 === j) {
            return values[i] * values[i + 1] * values[j];
        }
        const key = i * n + j;
        if (!memo.has(key)) {
            let minScore = Number.MAX_VALUE;
            for (let k = i + 1; k < j; k++) {
                minScore = Math.min(
                    minScore,
                    values[i] * values[k] * values[j] + dp(i, k) + dp(k, j),
                );
            }
            memo.set(key, minScore);
        }
        return memo.get(key);
    };
    return dp(0, n - 1);
};