/* 2566. Maximum Difference by remapping a digit
14 June 25, Leetcode POTD

Input: num = 11891
Output: 99009
Explanation: 
To achieve the maximum value, Bob can remap the digit 1 to the digit 9 to yield 99899.
To achieve the minimum value, Bob can remap the digit 1 to the digit 0, yielding 890.
The difference between these two numbers is 99009.
*/

var minMaxDifference = function(num) {
    let minNum = num.toString().split('');
    let maxNum = num.toString().split('');
    let n = minNum.length;

    let ch = '';
    for (let i = 0; i < n; i++) {
        if (maxNum[i] !== '9') {
            ch = maxNum[i];
            break;
        }
    }

    for (let i = 0; i < n; i++) {
        if (maxNum[i] === ch) {
            maxNum[i] = '9';
        }
    }

    ch = minNum[0];
    for (let i = 0; i < n; i++) {
        if (minNum[i] === ch) {
            minNum[i] = '0';
        }
    }

    return parseInt(maxNum.join('')) - parseInt(minNum.join(''));
};
