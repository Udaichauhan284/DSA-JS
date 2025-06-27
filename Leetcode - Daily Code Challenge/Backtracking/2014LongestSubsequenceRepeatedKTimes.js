/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
/*
TC: O(c^L*n), SC: O(n/k)
*/

function isSubsequence(s, sub, k) {
    let i = 0, j = 0;
    const len = sub.length, n = s.length;

    while (i < n && j < k * len) {
        if (s[i] === sub[j % len]) {
            j++;
        }
        i++;
    }

    return j === k * len;
}

function backtracking(s, curr, canUse, requiredFreq, k, maxLen, resultHolder) {
    if (curr.length === maxLen) {
        if (isSubsequence(s, curr.join(""), k)) {
            resultHolder.result = curr.join("");
            return true;
        }
        return false;
    }

    for (let i = 25; i >= 0; i--) {
        if (!canUse[i] || requiredFreq[i] === 0) continue;

        curr.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
        requiredFreq[i]--;

        if (backtracking(s, curr, canUse, requiredFreq, k, maxLen, resultHolder)) {
            return true;
        }

        curr.pop();
        requiredFreq[i]++;
    }

    return false;
}

var longestSubsequenceRepeatedK = function (s, k) {
    const n = s.length;
    const freq = new Array(26).fill(0);

    for (let ch of s) {
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const canUse = new Array(26).fill(false);
    const requiredFreq = new Array(26).fill(0);

    for (let i = 0; i < 26; i++) {
        if (freq[i] >= k) {
            canUse[i] = true;
            requiredFreq[i] = Math.floor(freq[i] / k);
        }
    }

    const maxLen = Math.floor(n / k);
    const resultHolder = { result: "" };

    for (let len = maxLen; len >= 1; len--) {
        const tempRequiredFreq = [...requiredFreq]; // clone the array
        const curr = [];

        if (backtracking(s, curr, canUse, tempRequiredFreq, k, len, resultHolder)) {
            return resultHolder.result;
        }
    }

    return resultHolder.result;
};
