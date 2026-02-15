/* 67. Add Binary
15 FEB 2026, leetcode potd, EASY

Input: a = "11", b = "1"
Output: "100"

Input: a = "1010", b = "1011"
Output: "10101"
*/

var addBinary = function(a, b) {
    let aLen = a.length-1;
    let bLen = b.length-1;
    let sum = 0, carry = 0;
    let result = [];
    while(aLen >= 0 || bLen >= 0){
        sum = carry
        //now add the a char from right to left
        if(aLen >= 0){
            sum += a.charCodeAt(aLen)-'0'.charCodeAt(0);
            aLen--;
        }
        //add the b char from right to left
        if(bLen >= 0){
            sum += b.charCodeAt(bLen)-'0'.charCodeAt(0);
            bLen--;
        }

        result.push((sum%2 === 0) ? '0' : '1');
        carry = (sum > 1) ? 1 : 0;
    }
    if(carry){
        result.push('1');
    }
    return result.reverse().join('');
};