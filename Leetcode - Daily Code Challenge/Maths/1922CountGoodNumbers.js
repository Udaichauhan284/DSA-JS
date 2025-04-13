/* 1922. Count Good Numbers
13 April 25, Leetcode POTD, Medium 
A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).

For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime. However, "3245" is not good because 3 is at an even index but is not even.
Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.

A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.

Input: n = 1
Output: 5
Explanation: The good numbers of length 1 are "0", "2", "4", "6", "8".
*/

//TC: O(logn), SC: O(logn) recursion stack space
const mod = 1000000007n;
const countGoodIntegers = (n) => {
    let even = BigInt(Math.floor((n+1)/2));
    let odd = BigInt(Math.floor(n/2));

    let evenPower = findPower(5n, even);
    let oddPower = findPower(4n, odd);

    return Number((evenPower * oddPower) % mod);
};
function findPower(a,b){
    if(b === 0n){
        return 1n;
    }

    let half = findPower(a, b/2n);
    if(b % 2n === 0n){
        return (half * half) % mod;
    }else{
        return (a * half * half) % mod;
    }
}