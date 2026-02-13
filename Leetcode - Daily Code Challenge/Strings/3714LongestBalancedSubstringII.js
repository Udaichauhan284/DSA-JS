/* 3714. Longest Balanced Substring II
13 Feb 2026
*/

function helper(s, ch1, ch2) {
    let n = s.length;
    let diffMap = new Map();
    let maxL = 0;

    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < n; i++) {

        // If character is not ch1 or ch2 → reset
        if (s[i] !== ch1 && s[i] !== ch2) {
            diffMap.clear();
            count1 = 0;
            count2 = 0;
            continue;
        }

        if (s[i] === ch1) count1++;
        if (s[i] === ch2) count2++;

        // Direct balance
        if (count1 === count2) {
            maxL = Math.max(maxL, count1 + count2);
        }

        let diff = count1 - count2;

        if (diffMap.has(diff)) {
            maxL = Math.max(maxL, i - diffMap.get(diff));
        } else {
            diffMap.set(diff, i);
        }
    }

    return maxL;
}


function longestBalanced(s) {
    let n = s.length;
    let maxL = 0;

    // ----------------------
    // Case 1: Same character streak
    // ----------------------
    let count = 1;

    for (let i = 1; i < n; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            maxL = Math.max(maxL, count);
            count = 1;
        }
    }

    maxL = Math.max(maxL, count);

    // ----------------------
    // Case 2: Two-character balance
    // ----------------------
    maxL = Math.max(maxL, helper(s, 'a', 'b'));
    maxL = Math.max(maxL, helper(s, 'a', 'c'));
    maxL = Math.max(maxL, helper(s, 'b', 'c'));

    // ----------------------
    // Case 3: Three-character balance
    // ----------------------
    let countA = 0, countB = 0, countC = 0;
    let diffMap = new Map();

    for (let i = 0; i < n; i++) {
        if (s[i] === 'a') countA++;
        if (s[i] === 'b') countB++;
        if (s[i] === 'c') countC++;

        // Direct equality
        if (countA === countB && countA === countC) {
            maxL = Math.max(maxL, countA + countB + countC);
        }

        let diffAB = countA - countB;
        let diffAC = countA - countC;

        let key = diffAB + "_" + diffAC;

        if (diffMap.has(key)) {
            maxL = Math.max(maxL, i - diffMap.get(key));
        } else {
            diffMap.set(key, i);
        }
    }

    return maxL;
}