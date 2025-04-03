/* 2874. Maximum Value of an Ordered Triplet II
03 April 2024, Leetcode POTD
Input: nums = [12,6,1,2,7]
Output: 77
Explanation: The value of the triplet (0, 2, 4) is (nums[0] - nums[2]) * nums[4] = 77.
It can be shown that there are no ordered triplets of indices with a value greater than 77. 
*/

/*This is same as yesterday POTD, just 
constraint are high.
if we do with brute method, 3 nested loop
this will give TLE
Lets do with left max and right max array
TC: O(n), SC: O(n)
*/
var maximumTripletValue = function(nums) {
    let len = nums.length;
    let leftMax = Array(len).fill(0);
    let rightMax = Array(len).fill(0);
    for(let i=1; i<len; i++){
        leftMax[i] = Math.max(leftMax[i-1], nums[i-1]);
        rightMax[len-1-i] = Math.max(rightMax[len-i], nums[len-i]);
    }

    let res = 0;
    for(let i=1; i<len-1; i++){
        res = Math.max(res, (leftMax[i] - nums[i])*rightMax[i]);
    }
    return res;
};

/*In method2, we will take the variables
maxDiff and maxI, maxDiff will give the
difference of maxi - nums[k]
and maxi will give the max of maxi and 
nums[k]
TC: O(n), SC: O(1)
*/
var maximumTripletValue = function(nums) {
    let len = nums.length;
    let res = 0;
    let maxDiff = 0;
    let maxi = 0;
    for(let k=0; k<len; k++){
        res = Math.max(res, maxDiff * nums[k]);
        maxDiff = Math.max(maxDiff, maxi-nums[k]);
        maxi = Math.max(maxi, nums[k]);
    }
    return res;
};