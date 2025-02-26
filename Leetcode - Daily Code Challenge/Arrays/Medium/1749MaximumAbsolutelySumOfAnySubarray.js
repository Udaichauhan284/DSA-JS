/*1749. Maximum Absolute Sum of Any Subarray
26 Feb 25, Leetcode POTD, Array

Input: nums = [1,-3,2,3,-4]
Output: 5
Explanation: The subarray [2,3] has absolute sum = abs(2+3) = abs(5) = 5.
*/

/*Method 1, we use the 2 pass Kadne's Algo for finding
the maxSubArrSum and minSubArrSum, from these two we 
can get the max subarrsum. TC: O(2n), SC: O(1)
*/
var maxAbsoluteSum = function(nums) {
    let len = nums.length;

    let currSubSum = nums[0];
    let maxSubArrSum = nums[0];
    //find the maxSubArrSum
    for(let i=1; i<len; i++){
        currSubSum = Math.max(nums[i], currSubSum+nums[i]);
        maxSubArrSum = Math.max(maxSubArrSum, currSubSum);
    }

    let minSubArrSum = nums[0];
    currSubSum = nums[0];
    //find the minSubArrSum
    for(let i=1; i<len; i++){
        currSubSum = Math.min(nums[i], currSubSum+nums[i]);
        minSubArrSum = Math.min(minSubArrSum, currSubSum);
    }

    return Math.max(maxSubArrSum, Math.abs(minSubArrSum));
};


/*Method 2, use of 1 pass of Kadne's Algo for finding the maxSum
and minSum, TC: O(n), SC: O(1)
*/
var maxAbsoluteSum = function(nums) {
    let len = nums.length;
    let maxSum = nums[0];
    let minSum = nums[0];

    let currMaxSum = nums[0];
    let currMinSum = nums[0];

    for(let i=1; i<len; i++){
        currMaxSum = Math.max(nums[i], currMaxSum+nums[i]);
        maxSum = Math.max(maxSum, currMaxSum);

        currMinSum = Math.min(nums[i], currMinSum+nums[i]);
        minSum = Math.min(minSum, currMinSum);
    }
    return Math.max(maxSum, Math.abs(minSum));
};