/* 837. New 21 Game
17 Aug 2025, Leetcode POTD
*/
var new21Game = function(n, k, maxPts) {
    let P = new Array(n + 1).fill(0.0);
    P[0] = 1.0;

    let currProbabSum = k > 0 ? 1.0 : 0.0;

    for (let i = 1; i <= n; i++) {
        P[i] = currProbabSum / maxPts;

        if (i < k) {
            currProbabSum += P[i];
        }

        if (i - maxPts >= 0 && i - maxPts < k) {
            currProbabSum -= P[i - maxPts];
        }
    }

    // Equivalent of accumulate(P.begin() + k, P.end(), 0.0)
    let result = 0.0;
    for (let i = k; i <= n; i++) {
        result += P[i];
    }
    return result;
};
