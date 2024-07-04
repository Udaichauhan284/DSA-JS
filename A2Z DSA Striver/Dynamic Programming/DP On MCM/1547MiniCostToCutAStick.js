/* 1547 Minimum Cost to Cut a Stick
Input: n = 7, cuts = [1,3,4,5]
Output: 16
Explanation: Using cuts order = [1, 3, 4, 5] as in the input leads to the following scenario:
The first cut is done to a rod of length 7 so the cost is 7. The second cut is done to a rod of length 6 (i.e. the second part of the first cut), the third is done to a rod of length 4 and the last cut is to a rod of length 3. The total cost is 7 + 6 + 4 + 3 = 20.
Rearranging the cuts to be [3, 5, 1, 4] for example will lead to a scenario with total cost = 16 (as shown in the example photo 7 + 4 + 3 + 2 = 16).
*/

/* This can be solve by Matrix Chain Multiplication technique
in this just we need to add 0 and n at start and ending of cuts
arr. so that we can caluclate price cust[j+1]-cuts[i-1]
Recursion : TC: O(expontetial), SC: O(n)
TLE
*/
var minCost = function(n, cuts) {
  let cutsLen = cuts.length;
  //add 0 and n at start and last respectviley
  cuts.unshift(0);
  cuts.push(n);
  //need to sort the cuts, so that in come in ascending order and 
  //no part is dependent on other
  cuts.sort((a,b) => a-b);
  return solve(1,cutsLen,cuts);
};
function solve(i,j,cuts){
  //base case
  if(i>j) return 0;
  let mini = Number.MAX_VALUE;
  for(let ind=i; ind<=j; ind++){
      let cost = cuts[j+1]-cuts[i-1]+solve(i,ind-1,cuts)+solve(ind+1,j,cuts);
      mini = Math.min(mini, cost);
  }
  return mini;
}


/* This can be solve by Matrix Chain Multiplication technique
in this just we need to add 0 and n at start and ending of cuts
arr. so that we can caluclate price cust[j+1]-cuts[i-1]
Method 1 - use of DP array, we want cuts length DP[c+1][c+1] i and j 
changes
TC: O(n^2)*n(for inner loop) ~ O(n^3), SC: O(n^2)+O(n)(auxilary space)
*/
var minCost = function(n, cuts) {
  let cutsLen = cuts.length;
  //add 0 and n at start and last respectviley
  cuts.unshift(0);
  cuts.push(n);
  //need to sort the cuts, so that in come in ascending order and 
  //no part is dependent on other
  cuts.sort((a,b) => a-b);
  let dp = Array.from({length: cutsLen+1}, () => Array(cutsLen+1).fill(-1));
  return solve(1,cutsLen,cuts,dp);
};
function solve(i,j,cuts,dp){
  //base case
  if(i>j) return 0;
  if(dp[i][j] !== -1) return dp[i][j];
  let mini = Number.MAX_VALUE;
  for(let ind=i; ind<=j; ind++){
      let cost = cuts[j+1]-cuts[i-1]+solve(i,ind-1,cuts,dp)+solve(ind+1,j,cuts,dp);
      mini = Math.min(mini, cost);
  }
  return (dp[i][j] = mini);
}


/*Tabulization - in this we just need to reverse the movement
i will move from c to 1 and j will from 1 to c
dp array will c+2 and c+2
TC: o(n^3), SC: O(n^2)
*/
var minCost = function(n, cuts) {
  let len = cuts.length;
  // Add 0 and n to the cuts array
  cuts.unshift(0);
  cuts.push(n);
  // Sort the cuts array
  cuts.sort((a, b) => a - b);
  // Initialize the DP array
  let dp = Array.from({length: len + 2}, () => Array(len + 2).fill(0));
  
  // Fill the DP array
  for (let i = len; i >= 1; i--) {
      for (let j = 1; j <= len; j++) {
          if (i > j) continue;
          let mini = Number.MAX_VALUE;
          for (let ind = i; ind <= j; ind++) {
              let cost = cuts[j + 1] - cuts[i - 1] + dp[i][ind - 1] + dp[ind + 1][j];
              mini = Math.min(mini, cost);
          }
          dp[i][j] = mini;
      }
  }
  return dp[1][len];
};