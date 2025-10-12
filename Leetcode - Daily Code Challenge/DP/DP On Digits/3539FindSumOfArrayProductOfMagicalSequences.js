/* 3539. Find Sum of Array Product of Magical Sequences
12 Oct 2025, leetcode potd, HARD
Input: m = 5, k = 5, nums = [1,10,100,10000,1000000]

Output: 991600007

Explanation:

All permutations of [0, 1, 2, 3, 4] are magical sequences, each with an array product of 1013.
*/

var magicalSum = function (m, k, nums) {
    const MOD = 1000000007n; // Use BigInt for safe modular arithmetic
    const N = nums.length;
    const K = k;

    const memo = new Map();

    // ---------- Modular Power ----------
    function findPower(a, b) {
        a = BigInt(a) % MOD;
        b = BigInt(b);
        if (b === 0n) return 1n;

        let half = findPower(a, b / 2n);
        let result = (half * half) % MOD;
        if (b % 2n === 1n) result = (result * a) % MOD;

        return result;
    }

    // ---------- Precompute Factorials and Inverses ----------
    const fact = Array(m + 1).fill(1n);
    const invFact = Array(m + 1).fill(1n);

    for (let i = 2; i <= m; i++) {
        fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
    }

    for (let i = 0; i <= m; i++) {
        invFact[i] = findPower(fact[i], MOD - 2n); // Fermat’s theorem
    }

    // ---------- Compute nCr % MOD ----------
    function nCr(n, r) {
        if (r < 0 || r > n) return 0n;
        return (((fact[n] * invFact[r]) % MOD) * invFact[n - r]) % MOD;
    }

    // ---------- Bitcount Helper ----------
    function bitCount(x) {
        let cnt = 0n;
        while (x > 0n) {
            cnt += x & 1n;
            x >>= 1n;
        }
        return cnt;
    }

    // ---------- Recursive Function ----------
    function solve(binarySum, m, k, i) {
        const key = `${binarySum}_${m}_${k}_${i}`;
        if (memo.has(key)) return memo.get(key);

        if (m === 0 && bitCount(binarySum) === BigInt(k)) {
            return 1n;
        }

        if (m === 0 || i >= N) {
            return 0n;
        }

        let totalSum = 0n;

        // Skip index i
        const skip = solve(binarySum >> 1n, m, k - Number(binarySum & 1n), i + 1);
        totalSum = (totalSum + skip) % MOD;

        // Take index i frequency times
        for (let freq = 1; freq <= m; freq++) {
            const newBinarySum = binarySum + BigInt(freq);

            const sub = solve(newBinarySum >> 1n, m - freq, k - Number(newBinarySum & 1n), i + 1);
            let prod = (findPower(nums[i], BigInt(freq)) * sub) % MOD;
            prod = (prod * nCr(m, freq)) % MOD;

            totalSum = (totalSum + prod) % MOD;
        }

        memo.set(key, totalSum);
        return totalSum;
    }

    return Number(solve(0n, m, k, 0) % MOD);
};
