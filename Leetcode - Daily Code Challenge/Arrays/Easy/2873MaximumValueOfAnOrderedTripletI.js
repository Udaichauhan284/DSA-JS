/* 2873. Maximum Value of an Ordered Triplet I
02 April 25, Leetcode POTD, Easy

Input: nums = [12,6,1,2,7]
Output: 77
Explanation: The value of the triplet (0, 2, 4) is (nums[0] - nums[2]) * nums[4] = 77.
It can be shown that there are no ordered triplets of indices with a value greater than 77. 
*/

/*Brute Method, use of triple loop
TC: O(n^3), SC: O(1)
*/
var maximumTripletValue = function(nums) {
    let len = nums.length;
    let max = Number.MIN_VALUE;
    for(let i=0; i<len-2; i++){
        for(let j=i+1; j<len-1; j++){
            for(let k=j+1; k<len; k++){
                max = Math.max(max, (nums[i] - nums[j])*nums[k]);
            }
        }
    }
    return max > Number.MIN_VALUE ? max : 0;
};

var maximumTripletValue = function(nums) {
    let len = nums.length;
    let leftMax = Array(len).fill(0);
    let rightMax = Array(len).fill(0);
    for(let i=1; i<len; i++){
        leftMax[i] = Math.max(leftMax[i-1], nums[i-1]);
        rightMax[len-1-i] = Math.max(rightMax[len-i], nums[len-i]);
    }
    let res = 0;
    for(let j=1; j<len-1; j++){
        res = Math.max(res, (leftMax[j]-nums[j]) * rightMax[j]);
    }
    return res;
};