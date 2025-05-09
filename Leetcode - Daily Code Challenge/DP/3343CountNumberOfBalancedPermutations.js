/* 3343. Count Number of Balanced Permutations
09 May 25, Leetcode POTD HARD
Input: num = "123"

Output: 2

Explanation:

The distinct permutations of num are "123", "132", "213", "231", "312" and "321".
Among them, "132" and "231" are balanced. Thus, the answer is 2.
*/
const MOD = BigInt(1e9 + 7);

var countBalancedPermutations = function (num) {
    let tot = 0,
        n = num.length;
    const cnt = new Array(10).fill(0);
    for (const ch of num) {
        const d = parseInt(ch);
        cnt[d]++;
        tot += d;
    }
    if (tot % 2 !== 0) {
        return 0;
    }

    const target = tot / 2;
    const maxOdd = Math.floor((n + 1) / 2);

    /* Pre-calculate combinations */
    const comb = new Array(maxOdd + 1);
    for (let i = 0; i <= maxOdd; i++) {
        comb[i] = new Array(maxOdd + 1).fill(0n);
        comb[i][i] = comb[i][0] = 1n;
        for (let j = 1; j < i; j++) {
            comb[i][j] = (comb[i - 1][j] + comb[i - 1][j - 1]) % MOD;
        }
    }

    const psum = new Array(11).fill(0);
    for (let i = 9; i >= 0; i--) {
        psum[i] = psum[i + 1] + cnt[i];
    }

    const memo = new Array(10);
    for (let i = 0; i < 10; i++) {
        memo[i] = new Array(target + 1);
        for (let j = 0; j <= target; j++) {
            memo[i][j] = new Array(maxOdd + 1).fill(-1n);
        }
    }

    function dfs(pos, curr, oddCnt) {
        /* If the remaining positions cannot be legally filled, or if the sum of the elements at the current odd positions is greater than the target value */
        if (oddCnt < 0 || psum[pos] < oddCnt || curr > target) {
            return 0n;
        }
        if (pos > 9) {
            return curr === target && oddCnt === 0 ? 1n : 0n;
        }
        if (memo[pos][curr][oddCnt] !== -1n) {
            return memo[pos][curr][oddCnt];
        }

        /* Even-numbered positions remaining to be filled */
        const evenCnt = psum[pos] - oddCnt;
        let res = 0n;
        const start = Math.max(0, cnt[pos] - evenCnt);
        const end = Math.min(cnt[pos], oddCnt);
        for (let i = start; i <= end; i++) {
            /* The current digit is filled with i positions at odd positions, and cnt[pos] - i positions at even positions */
            const ways = (comb[oddCnt][i] * comb[evenCnt][cnt[pos] - i]) % MOD;
            res =
                (res +
                    ((ways * dfs(pos + 1, curr + i * pos, oddCnt - i)) % MOD)) %
                MOD;
        }
        memo[pos][curr][oddCnt] = res;
        return res;
    }

    return Number(dfs(0, 0, maxOdd));
};