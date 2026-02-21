/* 762. Prime Number of Set Bits In representation
21 Feb 2026, leetcode potd, easy
Input: left = 6, right = 10
Output: 4
Explanation:
6  -> 110 (2 set bits, 2 is prime)
7  -> 111 (3 set bits, 3 is prime)
8  -> 1000 (1 set bit, 1 is not prime)
9  -> 1001 (2 set bits, 2 is prime)
10 -> 1010 (2 set bits, 2 is prime)
4 numbers have a prime number of set bits.

*/


/* Take a set to store the prime numbers, 
we have 10^6, means 2^20 means we will have 
20 set of bits.
TC: O(right-left)*log(nums)
*/
var countPrimeSetBits = function(left, right) {
    let primesSet = new Set([2,3,5,7,11,13,17,19]);
    let result = 0;
    for(let i=left; i<=right; i++){
        let num = i;
        let count = 0;
        while(num > 0){
            num &= (num-1);
            count++;
        }

        if(primesSet.has(count)) result++;
    }
    return result;
};