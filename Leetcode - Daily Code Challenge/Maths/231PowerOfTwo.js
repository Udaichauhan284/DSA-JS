/* 231. Power of two
09 Aug 2025, leetcode

*/

var isPowerOfTwo = function (n) {
    // if(n <= 0) return false;

    // while(n !== 1){
    //     if(n%2 !== 0){
    //         return false;
    //     }else{
    //         //now make it divide by 2
    //         n = Math.floor(n/2);
    //     }
    // }
    // return true;

    //Bit Magic
    if (n > Number.MAX_VALUE || n < Number.MIN_VALUE) return false;

    return n !== 0 && ((n & (n - 1)) === 0);
};