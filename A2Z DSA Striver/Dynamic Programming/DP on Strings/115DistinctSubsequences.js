/* 115 Distinct Subsequences
Given two strings s and t, return the number of distinct subsequences of s which equals t.
The test cases are generated so that the answer fits on a 32-bit signed integer.

Input: s = "rabbbit", t = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from s.
rabbbit
rabbbit
rabbbit
*/

/* Recursion: in this type of DP on string, we need to see 
the ways, when ways come, measn we need recursion + possibilties
match and not match.
TC: O(2^n * 2^m), SC: O(n+m)
*/
var numDistinct = function(s, t) {
  let n = s.length;
  let m = t.length;
  return solve(n,m,s, t);
};
function solve(i,j,s,t){
  //base case, if j exhast means we matched t str
  if(j < 0) return 1;
  //but if i exhast measn s string exhast and we didnot completly match 
  //string
  if(i < 0) return 0;

  //movement match and not match
  if(s[i-1] === t[j-1]){
      return (solve(i-1,j-1,s,t) + solve(i-1,j,s,t));
  }else{
      return solve(i-1,j,s,t);
  }
}

/* Method 1 - use of Recursion + memoization DP array
Recursion: in this type of DP on string, we need to see 
the ways, when ways come, measn we need recursion + possibilties
match and not match.
TC: O(n*m), SC: O(n*m)+O(n)
in this i am not doing right shift of index, 0 base, take dp n
+m 
*/
var numDistinct = function(s, t) {
  let n = s.length;
  let m = t.length;
  let dp = Array.from({length: n}, () => Array(m).fill(-1));
  return solve(n-1,m-1,s, t, dp);
};
function solve(i,j,s,t, dp){
  //base case, if j exhast means we matched t str
  if(j < 0) return 1;
  //but if i exhast measn s string exhast and we didnot completly match 
  //string
  if(i < 0) return 0;
  if(dp[i][j] !== -1) return dp[i][j];
  //movement match and not match
  if(s[i] === t[j]){
      dp[i][j] =  (solve(i-1,j-1,s,t,dp) + solve(i-1,j,s,t,dp));
  }else{
      dp[i][j] =  solve(i-1,j,s,t,dp);
  }
  return dp[i][j];
}


/* Method 2 - Use of Tabulization
TC: O(n*m), SC: O(n*m)
*/
var numDistinct = function(s, t) {
  let n = s.length;
  let m = t.length;
  let dp = Array.from({length: n+1}, () => Array(m+1).fill(0));

  //base case, for j and i
  //this for j when we exhast the j
  for(let i=0; i<=n; i++){
      dp[i][0] = 1;
  }
  for(let j=1; j<=m; j++){
      dp[0][j] = 0; //when we exhast the first str, we still left with str2
  }

  //movement start, matching and not match
  for(let i=1; i<=n; i++){
      for(let j=1; j<=m; j++){
          if(s[i-1] === t[j-1]){
              dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
          }else {
              dp[i][j] = dp[i-1][j];
          }
      }
  }
  return dp[n][m];
};


/* Method 3 - Use of Space Optimization
TC: O(n*m), SC: O(n)
in this we checking the i-1, so we only need previous 2 value, no need of curr
row and with prev row we can solve this.
*/
var numDistinct = function(s, t) {
  let n = s.length;
  let m = t.length;
  let prev = Array(m+1).fill(0);
  //base case
  prev[0] = 1;

  //movement start, matching and not match
  for(let i=1; i<=n; i++){
      for(let j=m; j>=1; j--){
          if(s[i-1] === t[j-1]){
              prev[j] = prev[j-1] + prev[j];
          }
      }
  }
  return prev[m];
};