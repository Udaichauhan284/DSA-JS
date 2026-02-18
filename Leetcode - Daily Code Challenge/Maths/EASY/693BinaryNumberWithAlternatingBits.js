/* 693. Binary Number with Alternating Bits
18 Feb 2026, leetcode potd, easy

Input: n = 5
Output: true
Explanation: The binary representation of 5 is: 101

*/

var hasAlternatingBits = function(n) {
    let bitsArr = n.toString(2).split("");
    for(let i=1; i<bitsArr.length; i++){
        if(bitsArr[i] === bitsArr[i-1]){
            return false;
        }
    }
    return true;
};