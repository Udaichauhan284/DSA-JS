/* 3190. Find Minimum Operations to make all elements divisble by three
22 nov 2025, leetcode potd
Input: nums = [1,2,3,4]

Output: 3

Explanation:

All array elements can be made divisible by 3 using 3 operations:

Subtract 1 from 1.
Add 1 to 2.
Subtract 1 from 4.
*/

var minimumOperations = function(nums) {
    let operations = 0;
    for(let num of nums){
        if(num % 3 !== 0){
            operations++;
        }
    }
    return operations;
};