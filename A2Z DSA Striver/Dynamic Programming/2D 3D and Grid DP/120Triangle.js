/* 120 Triangle
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
*/
/* Method 1- use of Memoization (use of dp array)
in this at last row we have 4 value which will be our ans.
so its good to start from 0,0.
TC: O(n*n), SC: O(n*n)+O(n*n)
*/
var minimumTotal = function(triangle) {
  let n = triangle.length;
  let dp = Array(n).fill(-1).map(() => Array(n).fill(-1));
  return solve(0,0,dp,triangle,n);
};
function solve(i,j,dp,arr,n){
  //base case
  if(dp[i][j] !== -1) return dp[i][j];
  if(i === n-1) return arr[i][j]; //last rpw
  let down = arr[i][j] + solve(i+1,j,dp,arr,n);
  let diagonal = arr[i][j] + solve(i+1,j+1,dp,arr,n);

  dp[i][j] = Math.min(down,diagonal);
  return dp[i][j];
}

/* Method 2- use of Tabulization (use of dp array)
see in this we need to do base case first so, base case if n-1,j
set this in dp[n-1][j]. and ans will be at0,0. so we need to start
loop from n-2 to 0 and j loop from 0 to j
TC: O(n*n), SC: O(n*n)
*/
var minimumTotal = function(triangle) {
  let n = triangle.length;
  let dp = Array(n).fill(-1).map(() => Array(n).fill(-1));
  //base case n-1,j need to set to dp array
  for(let j=0; j<n; j++){
      dp[n-1][j] = triangle[n-1][j];
  }
  //we already set the last row value into dp and need to start 
  //from last to 0,0, as we get the ans from 0,0
  for(let i=n-2; i>=0; i--){
      for(let j=0; j<=i; j++){
          let down = triangle[i][j] + dp[i+1][j];
          let diagonal = triangle[i][j] + dp[i+1][j+1];

          dp[i][j] = Math.min(down, diagonal);
      }
  }
  return dp[0][0];
};

/* Method 3- use of Space Optimization (use of only one last row)
see in this we need to do base case first so, base case if n-1,j
set this in dp[n-1][j]. and ans will be at0,0. so we need to start
loop from n-2 to 0 and j loop from 0 to j
TC: O(n*n), SC: O(n)
*/
var minimumTotal = function(triangle) {
  let n = triangle.length;
  let prev = Array(n).fill(-1)
  //base case n-1,j need to set to dp array
  for(let j=0; j<n; j++){
      prev[j] = triangle[n-1][j];
  }
  //we already set the last row value into dp and need to start 
  //from last to 0,0, as we get the ans from 0,0
  for(let i=n-2; i>=0; i--){
      let curr = Array(n).fill(-1);
      for(let j=0; j<=i; j++){
          let down = triangle[i][j] + prev[j];
          let diagonal = triangle[i][j] + prev[j+1];

          curr[j] = Math.min(down, diagonal);
      }
      prev = curr;
  }
  return prev[0];
};


//====> 25 Sept 2025, Leetcode POTD <===

/*
we can also use the Bottom Up Dp approach, start from
last to top
TC: O(n^2), SC: O(n)
*/
var minimumTotal = function(triangle) {
    let n = triangle.length;
    // start with last row
    let dp = [...triangle[n-1]];

    // go from second last row to top
    for (let i = n - 2; i >= 0; i--) {
        let newDp = [];
        for (let j = 0; j <= i; j++) {
            let down = triangle[i][j] + dp[j];
            let diagonal = triangle[i][j] + dp[j+1];
            newDp[j] = Math.min(down, diagonal);
        }
        dp = newDp;
    }
    return dp[0];
};