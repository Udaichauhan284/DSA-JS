/* 3432. Count Partitions With Even Sum Difference
05 Dec 2025, leetcode potd easy
Input: nums = [10,10,3,7,6]

Output: 4

Explanation:

The 4 partitions are:

[10], [10, 3, 7, 6] with a sum difference of 10 - 26 = -16, which is even.
[10, 10], [3, 7, 6] with a sum difference of 20 - 16 = 4, which is even.
[10, 10, 3], [7, 6] with a sum difference of 23 - 13 = 10, which is even.
[10, 10, 3, 7], [6] with a sum difference of 30 - 6 = 24, which is even.
*/

/*Method 1, in two pass, one will be for sum, and
other will be for finding the diff
TC: O(2n), SC: O(1)
*/
var countPartitions = function(nums) {
    let len = nums.length;
    let sum = 0;
    for(let num of nums){
        sum += num;
    }

    let count = 0;
    let left = 0;
    for(let i=0; i<len-1; i++){
        left += nums[i];
        let right = sum - left;
        if((left-right)%2 === 0){
            count++;
        }
    }
    return count;
};


/*Method 2: simple, take all the sum
if that is even, so we have all in pairs
we can return -1. 
TC: O(n), SC: O(1)
*/
var countPartitions = function(nums) {
    let len = nums.length;
    let sum = 0;
    for(let num of nums){
        sum += num;
    }
    if(sum%2 === 0){
        return len-1;
    }
    return 0;
};