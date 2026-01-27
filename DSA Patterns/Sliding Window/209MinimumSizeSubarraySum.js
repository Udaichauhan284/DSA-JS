/* 209. Minimum Size Subarray Sum
22 jan 2026, leetcode potd, medium
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
*/

/*Brute Method, in this we dont the windowSum, means window size is
moving is dynamic, so in this we can put condition on windowSize
use of nested loop
TC: O(n^2), SC: O(1)
*/
var minSubArrayLen = function(target, nums) {
    let n = nums.length;
    let minLen = Infinity;

    for (let i = 0; i < n; i++) {
        let sum = 0;

        for (let j = i; j < n; j++) {
            sum += nums[j];

            if (sum >= target) {
                minLen = Math.min(minLen, j - i + 1);
                break; // important optimization
            }
        }
    }

    return minLen === Infinity ? 0 : minLen;
};


/*Optimal Method, in this window is dynamic, so in this
we need to fix low and need to move the high
TC: O(n), SC: O(1)
*/
var minSubArrayLen = function(target, nums) {
    let len = nums.length;
    let minLen = Infinity;
    let low = 0;
    let windowSum = 0;
    let high = 0;
    while(high < len){
        windowSum += nums[high];

        while(windowSum >= target){
            windowSum -= nums[low];
            minLen = Math.min(minLen, high-low+1);
            low++;
        }
        high++;
    }
    return minLen === Infinity ? 0 : minLen;
};


/*In this we need to find the Subarray, sum, and minWindow
with sum >= k, so we can apply Sliding window, as we need
to find the minWindow, we will shirnk window, because when 
we shrink window, still we are getting the sum less then
target, so no use of that.
TC: O(n), SC: O(1)
*/
var minSubArrayLen = function(target, nums) {
    let len = nums.length;
    let low = 0, high = 0;
    let windowSum = 0, minLen = Infinity;
    while(high < len){
        windowSum += nums[high];

        while(windowSum >= target){
            minLen = Math.min(minLen, high-low+1);
            windowSum -= nums[low];
            low++;
        }
        high++;
    }
    return (minLen === Infinity) ? 0 : minLen;
};