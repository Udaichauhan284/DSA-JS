/* 3272 Find the Count of Good Integers
12 April 25, Leetcode POTD
Input: n = 3, k = 5

Output: 27

Explanation:

Some of the good integers are:

551 because it can be rearranged to form 515.
525 because it is already k-palindromic.
*/

var countGoodIntegers = function (n, k) {
    const dict = new Set();
    const base = Math.pow(10, Math.floor((n - 1) / 2));
    const skip = n & 1;
    /* Enumerate the number of palindrome numbers of n digits */
    for (let i = base; i < base * 10; i++) {
        let s = i.toString();
        s += s.split("").reverse().slice(skip).join("");
        const palindromicInteger = parseInt(s);
        /* If the current palindrome number is a k-palindromic integer */
        if (palindromicInteger % k === 0) {
            const sortedS = s.split("").sort().join("");
            dict.add(sortedS);
        }
    }

    const factorial = Array(n + 1).fill(1n);
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * BigInt(i);
    }

    let ans = 0n;
    for (const s of dict) {
        const cnt = Array(10).fill(0);
        for (const c of s) {
            cnt[parseInt(c)]++;
        }
        /* Calculate permutations and combinations */
        let tot = BigInt(n - cnt[0]) * factorial[n - 1];
        for (const x of cnt) {
            tot /= factorial[x];
        }
        ans += tot;
    }
    return Number(ans);
};