/* 1695. Maximum Erasure Value
22 July 2025, Leetcode POTD, Medium
Input: nums = [4,2,4,5,6]
Output: 17
Explanation: The optimal subarray here is [2,4,5,6].
*/

/*In this we can apply Sliding Window as we need to 
traverse over the array, and if we have already seen it
if not, we will add into sum and check with maxSum
if we have seen, we can delete that seen one from set
and move the left pointer and also minus that left one
TC: O(n), SC: O(n)
*/
var maximumUniqueSubarray = function(nums) {
    let seen = new Set();
    let left = 0;
    let sum = 0;
    let maxSum = Number.MIN_VALUE;
    for(let right=0; right<nums.length; right++){
        while(seen.has(nums[right])){
            //delete from sum, delete from seen
            //and move the left pointer
            seen.delete(nums[left]);
            sum -= nums[left];
            left++;
        }
        seen.add(nums[right]);
        sum += nums[right];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
};