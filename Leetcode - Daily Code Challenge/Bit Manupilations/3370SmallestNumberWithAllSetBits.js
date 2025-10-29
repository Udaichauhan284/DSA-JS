/* 3370. Smallest Number With All Set Bits
29 Oct 2025, leetcode potd, easy
Input: n = 5

Output: 7

Explanation:

The binary representation of 7 is "111".
*/

var smallestNumber = function (n) {
    let x = 1;
    while (x < n) {
        x = x * 2 + 1;
    }
    return x;
};