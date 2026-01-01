/* 66. Plus One
01 Jan 2025, leetcode potd, easy
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/
/*In this we will move from left to right
and see the digits, if it not 9, we will
add one and return it, other we will add 0
and minus the i.
TC: O(100), SC:O(1)
*/
var plusOne = function(digits) {
    let len = digits.length;
    let i = len-1;
    while(i>=0){
        if(digits[i] < 9){
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
        i--; //carry forward
    }
    digits.unshift(1); //at last add 1 when we have 999
    return digits;
};