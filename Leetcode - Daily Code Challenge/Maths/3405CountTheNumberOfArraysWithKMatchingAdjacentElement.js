/* 3405. Count the Number of Arrays with K matching Adjacent Elements
17 June 2025, Leetcode POTD, HARD
*/
//Approach - Using maths Combinatorics
//T.C : O(log(n-k-1))
//S.C : O(n)
const MOD = BigInt(1e9 + 7);
const MX = 100000;
const fact = Array(MX).fill(0n);
const invFact = Array(MX).fill(0n);

function qpow(x, n) {
    x = BigInt(x);
    n = BigInt(n);
    let res = 1n;
    while (n > 0n) {
        if (n & 1n) {
            res = (res * x) % MOD;
        }
        x = (x * x) % MOD;
        n >>= 1n;
    }
    return res;
}

function init() {
    if (fact[0] != 0) {
        return;
    }
    fact[0] = 1n;
    for (let i = 1; i < MX; i++) {
        fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
    }
    invFact[MX - 1] = qpow(fact[MX - 1], MOD - 2n);
    for (let i = MX - 2; i >= 0; i--) {
        invFact[i] = (invFact[i + 1] * BigInt(i + 1)) % MOD;
    }
}

function comb(n, m) {
    if (m < 0 || m > n) {
        return 0n;
    }
    return (((fact[n] * invFact[m]) % MOD) * invFact[n - m]) % MOD;
}

function countGoodArrays(n, m, k) {
    init();
    let res = comb(n - 1, k);
    res = (res * BigInt(m)) % MOD;
    res = (res * qpow(m - 1, n - k - 1)) % MOD;
    return Number(res);
}