/*808. Soup Servings
08 Aug 2025, leetcode POTD, medium
Input: n = 50
Output: 0.62500
Explanation: 
If we perform either of the first two serving operations, soup A will become empty first.
If we perform the third operation, A and B will become empty at the same time.
If we perform the fourth operation, B will become empty first.
So the total probability of A becoming empty first plus half the probability that A and B become empty at the same time, is 0.25 * (1 + 1 + 0.5 + 0) = 0.625.
*/

function soupServings(n) {
    if (n >= 5000) return 1.0; // For large n, probability ≈ 1

    // Scale down to multiples of 25
    n = Math.ceil(n / 25);

    const serves = [
        [4, 0], // 100ml → 4 units
        [3, 1], // 75ml → 3 units, 25ml → 1 unit
        [2, 2], // 50ml → 2 units
        [1, 3]  // 25ml → 1 unit, 75ml → 3 units
    ];

    const memo = Array.from({ length: n + 1 }, () => Array(n + 1).fill(-1));

    function solve(a, b) {
        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0) return 1.0;
        if (b <= 0) return 0.0;

        if (memo[a][b] !== -1) return memo[a][b];

        let prob = 0;
        for (let [da, db] of serves) {
            prob += 0.25 * solve(a - da, b - db);
        }
        return (memo[a][b] = prob);
    }

    return solve(n, n);
}