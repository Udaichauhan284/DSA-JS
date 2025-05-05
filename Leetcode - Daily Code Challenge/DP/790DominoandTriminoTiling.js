/* 790. Domino and Tromino Tiling
05 May 25, Leetcode POTD, Medium
Input: n = 3
Output: 5
Explanation: The five different ways are show above.

*/

//TC: O(n), SC: O(n)
var mod = 1000000007;
var numTilings = function(n) {
    let dp = Array(1001).fill(-1);
    return solve(n,dp);
};
function solve(n,dp){
    if(n===1 || n===2){
        return n;
    }
    if(n===3){
        return 5;
    }
    if(dp[n] !== -1){
        return dp[n];
    }

    dp[n] = (2*solve(n-1, dp)%mod + solve(n-3,dp)%mod)%mod;
    return dp[n];
}