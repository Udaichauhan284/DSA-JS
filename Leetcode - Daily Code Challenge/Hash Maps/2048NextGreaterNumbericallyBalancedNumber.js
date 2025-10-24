/* 2048. Next Greater Numerically Balanced Number
24 Oct 2025, leetcode potd, medium
Input: n = 1
Output: 22
Explanation: 
22 is numerically balanced since:
- The digit 2 occurs 2 times. 
It is also the smallest numerically balanced number strictly greater than 1.

*/

function balanced(num) {
    const freq = new Array(10).fill(0);

    while (num > 0) {
        const digit = num % 10;
        freq[digit]++;
        num = Math.floor(num / 10);
    }

    for (let d = 0; d < 10; d++) {
        if (freq[d] !== 0 && freq[d] !== d) {
        return false;
        }
    }

    return true;
}

function nextBeautifulNumber(n) {
    for (let num = n + 1; num <= 1224444; num++) {
        if (balanced(num)) {
        return num;
        }
    }

    return -1;
}