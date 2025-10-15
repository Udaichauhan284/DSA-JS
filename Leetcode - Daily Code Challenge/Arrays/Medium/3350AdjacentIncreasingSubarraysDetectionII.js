/* 3350. Adjacent increasing Subarrays Detection II
15 oct 2025, leetcode potd, Medium
Input: nums = [2,5,7,8,9,2,3,4,3,1]

Output: 3

Explanation:

The subarray starting at index 2 is [7, 8, 9], which is strictly increasing.
The subarray starting at index 5 is [2, 3, 4], which is also strictly increasing.
These two subarrays are adjacent, and 3 is the maximum possible value of k for which two such adjacent strictly increasing subarrays exist.
*/
var maxIncreasingSubarrays = function(nums) {
    let len = nums.length;
    let count = 1;
    let percent = 0;
    let ans = 0;
    for(let i=1; i<len; i++){
        if(nums[i] > nums[i-1]){
            count++;
        }else{
            percent = count;
            count=1;
        }
        //now update the ans
        ans = Math.max(ans, Math.min(percent, count));
        ans = Math.max(ans, Math.floor(count / 2));
    }
    return ans;
};