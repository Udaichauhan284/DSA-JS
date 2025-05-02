/* 838. Push Dominos
02 May 25, Leetcode POTD, Medium
Input: dominoes = "RR.L"
Output: "RR.L"
Explanation: The first domino expends no additional force on the second domino.

*/

var pushDominoes = function(dominoes) {
    const n = dominoes.length;

    const rightClosestL = new Array(n).fill(-1);
    const leftClosestR = new Array(n).fill(-1);

    // Moving right to left to find rightClosestL
    for (let i = n - 1; i >= 0; i--) {
        if (dominoes[i] === 'L') {
            rightClosestL[i] = i;
        } else if (dominoes[i] === '.') {
            rightClosestL[i] = i < n - 1 ? rightClosestL[i + 1] : -1;
        } // else keep it -1
    }

    // Moving left to right to find leftClosestR
    for (let i = 0; i < n; i++) {
        if (dominoes[i] === 'R') {
            leftClosestR[i] = i;
        } else if (dominoes[i] === '.') {
            leftClosestR[i] = i > 0 ? leftClosestR[i - 1] : -1;
        } // else keep it -1
    }

    const result = new Array(n).fill(' ');

    for (let i = 0; i < n; i++) {
        const distRightL = rightClosestL[i] === -1 ? Infinity : Math.abs(i - rightClosestL[i]);
        const distLeftR = leftClosestR[i] === -1 ? Infinity : Math.abs(i - leftClosestR[i]);

        if (rightClosestL[i] === leftClosestR[i]) {
            result[i] = '.';
        } else if (rightClosestL[i] === -1) {
            result[i] = 'R';
        } else if (leftClosestR[i] === -1) {
            result[i] = 'L';
        } else if (distLeftR === distRightL) {
            result[i] = '.';
        } else {
            result[i] = distRightL < distLeftR ? 'L' : 'R';
        }
    }

    return result.join('');
};