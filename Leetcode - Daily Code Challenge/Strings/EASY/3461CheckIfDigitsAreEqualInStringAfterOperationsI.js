/* 
3461. Check if Digits Are Equal in String After Operations I
23 Oct 2025, leetcode potd, easy
Input: s = "3902"

Output: true

Explanation:

Initially, s = "3902"
First operation:
(s[0] + s[1]) % 10 = (3 + 9) % 10 = 2
(s[1] + s[2]) % 10 = (9 + 0) % 10 = 9
(s[2] + s[3]) % 10 = (0 + 2) % 10 = 2
s becomes "292"
Second operation:
(s[0] + s[1]) % 10 = (2 + 9) % 10 = 1
(s[1] + s[2]) % 10 = (9 + 2) % 10 = 1
s becomes "11"
Since the digits in "11" are the same, the output is true.

*/

var hasSameDigits = function (s) {
    let n = s.length;
    let arr = s.split("");
    for (let i = 1; i <= n - 2; i++) {
        for (let j = 0; j <= n - 1 - i; j++) {
            arr[j] = String((parseInt(arr[j]) + parseInt(arr[j + 1])) % 10);
        }
    }
    return arr[0] === arr[1];
};