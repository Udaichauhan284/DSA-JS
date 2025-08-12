/* 2787. Ways to Express an Integers as Sum of Powers
12 Aug 2025, leetcode potd
Input: n = 10, x = 2
Output: 1
Explanation: We can express n as the following: n = 32 + 12 = 10.
It can be shown that it is the only way to express 10 as the sum of the 2nd power of unique integers.
*/
const M = 1e9 + 7;
let t;

function solve(n, num, x) {
    if (n === 0) return 1;
    if (n < 0) return 0;

    const currPowerValue = Math.pow(num, x);
    if (currPowerValue > n) {
        return 0;
    }

    if (t[n][num] !== -1) {
        return t[n][num];
    }

    const take = solve(n - currPowerValue, num + 1, x);
    const skip = solve(n, num + 1, x);

    return t[n][num] = (take + skip) % M;
}

var numberOfWays = function(n, x) {
    // Initialize memo table with -1
    t = Array.from({ length: n + 1 }, () => Array(301).fill(-1));
    return solve(n, 1, x);
};