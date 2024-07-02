/* 300. Longest Increasing Subsequence
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
*/

/*Here we have to take the longest subsequence, so here we can use take
and notTake, and here we need to check the prevInde elem , so that we
can take it or not.
Recursion: TC: O(2^n), SC: O(n)
*/
var lengthOfLIS = function(nums) {
  let n = nums.length;
  return solve(0,-1,n,nums); //ind, prevInd
};
function solve(ind,prevInd, n, nums){
  //base case
  if(ind === n) return 0;

  let len = 0;
  //notTake
  len = 0 + solve(ind+1,prevInd,n,nums); 
  if(prevInd === -1 || nums[ind] > nums[prevInd]){
      len = Math.max(len, 1+solve(ind+1,ind,n,nums));
  }
  return len;
}

/*Here we have to take the longest subsequence, so here we can use take
and notTake, and here we need to check the prevInde elem , so that we
can take it or not.
Method 1 use of DP array, here we will take DP[N][N+1] n+1 for prevInd
as we cannot store -1 so we need to move the indx
TC: O(n*n), SC: O(n*n)+O(n)
*/
var lengthOfLIS = function(nums) {
  let n = nums.length;
  let dp = Array.from({length: n}, () => Array(n+1).fill(-1));
  return solve(0,-1,n,nums,dp); //ind, prevInd
};
function solve(ind,prevInd, n, nums,dp){
  //base case
  if(ind === n) return 0;
  if(dp[ind][prevInd+1] !== -1) return dp[ind][prevInd+1];
  let len = 0;
  //notTake
  len = 0 + solve(ind+1,prevInd,n,nums,dp); 
  if(prevInd === -1 || nums[ind] > nums[prevInd]){
      len = Math.max(len, 1+solve(ind+1,ind,n,nums,dp));
  }
  dp[ind][prevInd+1] = len;
  return dp[ind][prevInd+1];
}

/*Here we have to take the longest subsequence, so here we can use take
and notTake, and here we need to check the prevInde elem , so that we
can take it or not.
Method 2 use of Tabulization
TC: O(n*n), SC: O(n*n)
*/
var lengthOfLIS = function(nums) {
  let n = nums.length;
  let dp = Array.from({length: n+1}, () => Array(n+1).fill(0));
  //base case as we already filled DP array with 0. 
  //movement start
  let len = 0;
  for(let ind=n-1; ind>=0; ind--){
      for(let prevInd=ind-1; prevInd>=-1; prevInd--){
          len = 0 + dp[ind+1][prevInd+1];
          if(prevInd === -1 || nums[ind] > nums[prevInd]){
              len = Math.max(len, 1+dp[ind+1][ind+1]);
          }
          dp[ind][prevInd+1] = len;
      }
  }
  return dp[0][-1+1];
};


/*Here we have to take the longest subsequence, so here we can use take
and notTake, and here we need to check the prevInde elem , so that we
can take it or not.
Method 3 use of Space Optimization
TC: O(n*n), SC: O(n)*2 ~ O(n)
*/
var lengthOfLIS = function(nums) {
  let n = nums.length;
  let ahead = Array(n+1).fill(0);
  //base case as we already filled DP array with 0. 
  //movement start
  let len = 0;
  for(let ind=n-1; ind>=0; ind--){
      let curr = Array(n+1).fill(0);
      for(let prevInd=ind-1; prevInd>=-1; prevInd--){
          len = 0 + ahead[prevInd+1];
          if(prevInd === -1 || nums[ind] > nums[prevInd]){
              len = Math.max(len, 1+ahead[ind+1]);
          }
          curr[prevInd+1] = len;
      }
      ahead = curr;
  }
  return ahead[-1+1];
};


/* This can be solve by one different method or form of Tabulization
take dp arr of n and in this dp[i] will tell the LIS that end at i.
TC: O(n^2), SC: O(n)
*/
var lengthOfLIS = function(nums) {
  let n = nums.length;
  let dp = Array(n).fill(1);
  let maxi = 1;
  for(let i=0; i<n; i++){
      for(let prev=0; prev<i; prev++){
          if(nums[i] > nums[prev]){
              dp[i] = Math.max(dp[i], 1+dp[prev]);
          }
      }
      maxi = Math.max(maxi, dp[i]);
  }
  return maxi;
};