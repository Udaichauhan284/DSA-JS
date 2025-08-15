/* 342. Power of Four
LCPOTD 15 Aug 2025,Leetcode EASY
Input: n = 16
Output: true
*/
var isPowerOfFour = function(n) {
    if(n <= 0) return false;

    while(n%4 === 0){
        n = Math.floor(n/4);
    }
    return n===1;
};