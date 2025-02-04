/* 1800 Maximum Ascending Subarry Sum
04 Feb 25, Leetcode POTD, Array

Input: nums = [10,20,30,5,10,50]
Output: 65
Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
*/
//TC: O(n^2), SC: O(1)
var maxAscendingSum = function(nums) {
    let len = nums.length;
    let maxSum = 0;
    for(let i=0; i<len; i++){
        let currSum = nums[i];
        for(let j=i+1; j<len; j++){
            if(nums[j] > nums[j-1]){
                currSum += nums[j];
            }else{
                break;
            }
        }
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};

var maxAscendingSum = function(nums) {
    let len = nums.length;
    let maxSum = 0;
    let currSum = nums[0];
    for(let i=1; i<len; i++){
        if(nums[i] > nums[i-1]){
            currSum += nums[i];
        }else{
            maxSum = Math.max(maxSum, currSum);
            currSum = nums[i];
        }
    }
    return Math.max(maxSum, currSum);
};
