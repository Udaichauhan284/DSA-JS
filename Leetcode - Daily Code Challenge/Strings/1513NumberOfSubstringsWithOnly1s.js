/* 1513. Number of substrings with only 1s
16 nov 2025, leetcode potd, medium
Input: s = "0110111"
Output: 9
Explanation: There are 9 substring in total with only 1's characters.
"1" -> 5 times.
"11" -> 3 times.
"111" -> 1 time.
*/

var numSub = function(s) {
    const M = 1e9 + 7;
    let result = 0;
    let count1 = 0;

    for (let ch of s) {
        if (ch === '1') {
            count1++;
        } else {
            result = (result + (count1 * (count1 + 1) / 2)) % M;
            count1 = 0;
        }
    }

    // Add last group of 1s
    result = (result + (count1 * (count1 + 1) / 2)) % M;

    return result;
};