/*3333. Find the Original Typed String II
02 July 2025, leetcode POTD
Input: word = "aabbccdd", k = 7

Output: 5

Explanation:

The possible strings are: "aabbccdd", "aabbccd", "aabbcdd", "aabccdd", and "abbccdd".
*/

const M = 1e9 + 7;
//TC:O(n+k), SC: O(n+k)
function possibleStringCount(word, k) {
    if (k > word.length) return 0;

    const freq = [];
    let count = 1;
    
    for (let i = 1; i < word.length; i++) {
        if (word[i] === word[i - 1]) {
            count++;
        } else {
            freq.push(count);
            count = 1;
        }
    }
    freq.push(count);

    let P = 1;
    for (const f of freq) {
        P = (P * f) % M;
    }

    if (freq.length >= k) {
        return P;
    }

    const n = freq.length;
    const t = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

    for (let count = k - 1; count >= 0; count--) {
        t[n][count] = 1;
    }

    for (let i = n - 1; i >= 0; i--) {
        const prefix = Array(k + 1).fill(0);
        for (let h = 1; h <= k; h++) {
            prefix[h] = (prefix[h - 1] + t[i + 1][h - 1]) % M;
        }

        for (let count = k - 1; count >= 0; count--) {
            let l = count + 1;
            let r = count + freq[i];

            if (r + 1 > k) {
                r = k - 1;
            }

            if (l <= r) {
                t[i][count] = (prefix[r + 1] - prefix[l] + M) % M;
            }
        }
    }

    const invalidCount = t[0][0];
    return (P - invalidCount + M) % M;
}
