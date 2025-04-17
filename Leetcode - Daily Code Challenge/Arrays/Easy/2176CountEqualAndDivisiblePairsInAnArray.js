/* 2176 Count Equal and Divisible Pairs in an Array
17 April 25, Leetcode POTD EASY
Input: nums = [3,1,2,2,2,1,3], k = 2
Output: 4
Explanation:
There are 4 pairs that meet all the requirements:
- nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
- nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
- nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
- nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.
*/

//TC: O(n^2), SC: O(1)
var countPairs = function(nums, k) {
    let len = nums.length;
    let count = 0;
    for(let i=0; i<=len-2; i++){
        for(let j=i+1; j<=len-1; j++){
            if((nums[i] === nums[j]) && (i * j)%k === 0){
                count++;
            }
        }
    }
    return count;
};