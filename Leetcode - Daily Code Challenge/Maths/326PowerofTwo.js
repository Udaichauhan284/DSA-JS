/* 326. Power of Two
13 Aug 2025, Leetcode POTD
Input: n = 27
Output: true
Explanation: 27 = 33
*/
var isPowerOfThree = function(n) {
    if(n <= 0){
        return false;
    }
    while(n%3 === 0){
        
        n = Math.floor(n/3);
    }
    return n===1;
};