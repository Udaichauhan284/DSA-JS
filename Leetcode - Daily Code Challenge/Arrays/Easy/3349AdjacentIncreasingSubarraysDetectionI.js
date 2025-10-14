/* 3349. Adjacent Increasing Subarrays Detection I
14 Oct 2025, leetcode potd, EASY

Input: nums = [2,5,7,8,9,2,3,4,3,1], k = 3

Output: true

Explanation:

The subarray starting at index 2 is [7, 8, 9], which is strictly increasing.
The subarray starting at index 5 is [2, 3, 4], which is also strictly increasing.
These two subarrays are adjacent, so the result is true.
*/

/*Method 1, in this i will iterate over every other
elem and check for start to start+k-1, i=0 to i<0+3-2
i<2, and till where i will keep on checking
i=0 to i <= n-2*k, k=3, so 10-2*3=4
TC: O(n*k), SC: O(1)
*/
var hasIncreasingSubarrays = function(nums, k) {
    let len = nums.length;
    if(k === 1) return true; //one consecutive always true
    for(let i=0; i<=len-2*k; i++){
        if(isIncreasing(nums,i,k) && isIncreasing(nums,i+k,k)){
            return true;
        }
    }
    return false;
};
function isIncreasing(nums, i, k){
    for(let start=i; start<i+k-1; start++){
        if(nums[start] >= nums[start+1]) return false;
    }
    return true;
}