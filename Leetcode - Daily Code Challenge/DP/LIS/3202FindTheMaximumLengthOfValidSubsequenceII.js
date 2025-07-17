/*3202. Fin The Maximum Length of Valid Subsequence II
17 July 25, Leetcode POTD, Medium
Input: nums = [1,2,3,4,5], k = 2

Output: 5

Explanation:

The longest valid subsequence is [1, 2, 3, 4, 5].
*/

//Approach - Using LIS Pattern (Bottom Up)
//T.C : O(n^2)
//S.C : O(n*k)
var maximumLength = function(nums, k) {
    const n = nums.length;
    
    // Initialize a 2D array dp[k][n] filled with 1s
    const dp = Array.from({ length: k }, () => Array(n).fill(1));
    
    let maxSub = 1;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const mod = (nums[j] + nums[i]) % k;
            dp[mod][i] = Math.max(dp[mod][i], 1 + dp[mod][j]);
            maxSub = Math.max(maxSub, dp[mod][i]);
        }
    }

    return maxSub;
};