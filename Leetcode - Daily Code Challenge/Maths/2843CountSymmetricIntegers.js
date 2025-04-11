/* 2843 Count Symmetric Integers
11 April 2025, Leetcode POTD
Input: low = 1, high = 100
Output: 9
Explanation: There are 9 symmetric integers between 1 and 100: 11, 22, 33, 44, 55, 66, 77, 88, and 99.
*/

var countSymmetricIntegers = function (low, high) {
    let res = 0;
    for (let a = low; a <= high; ++a) {
        if (a < 100 && a % 11 === 0) {
            res++;
        } else if (1000 <= a && a < 10000) {
            const left = Math.floor(a / 1000) + Math.floor((a % 1000) / 100);
            const right = Math.floor((a % 100) / 10) + (a % 10);
            if (left === right) {
                res++;
            }
        }
    }
    return res;
};