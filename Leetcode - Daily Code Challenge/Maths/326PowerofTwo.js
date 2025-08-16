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


/*Use of Recursion, in which we need
to send the n/3, in recursion we need
to check if that is not mod 3 return
false, n === 1 return true
TC: O(logn), SC: O(n) recursion stack
*/
var isPowerOfThree = function(n) {
    //using this function as recursion
    if(n <= 0) return false;
    if(n === 1) return true;
    if(n%3 !== 0) return false;
    return isPowerOfThree(n/3);
};

/*Approach 3, we can use the dividing
method, take the 3 to the power highest
which is 3^19 which falls under the
32 bit integers, so if we mod the 3^19%n
if we dont get 0 return false, else
return true; TC: O(1), SC: O(1)
*/
var isPowerOfThree = function(n) {
    if(n <= 0) return false;
    return (Math.pow(3,19) % n === 0); //if we getting
    //zero means we able to get the power of 3
};