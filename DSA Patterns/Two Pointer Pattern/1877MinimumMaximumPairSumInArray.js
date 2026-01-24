/* 1877. Minimize Maximum Pair Sum in Array
24 Jan 2026, leetcode potd, medium

Input: nums = [3,5,2,3]
Output: 7
Explanation: The elements can be paired up into pairs (3,3) and (5,2).
The maximum pair sum is max(3+3, 5+2) = max(6, 7) = 7.
*/


/*Optimal Method, this is array ques, need to
find the max pair, for max pair we can sort
it out. so we can use the Two Pointer Method
TC: O(nlogn), SC: O(1)
*/
var minPairSum = function(nums) {
    //need to sort the nums, it will help
    //in finding the maxSum
    nums.sort((a,b) => a-b);
    let len = nums.length;
    let low = 0, high = len-1;
    let maxSum = 0;
    while(low < high){
        let sum = nums[low]+nums[high];
        maxSum = Math.max(maxSum, sum);
        low++;
        high--;
    }
    return maxSum;
};