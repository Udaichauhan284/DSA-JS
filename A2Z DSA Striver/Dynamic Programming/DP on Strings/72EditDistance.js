/* 72 Edit Distance
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

*/

/* Recursion
for insert, we dont move i word1 pointer move j-1
for delete, move move i pointer i-1, not k
for replace, move both
TC: exponentially, SC: O(n+m)
*/
var minDistance = function(word1, word2) {
  let n = word1.length;
  let m = word2.length;
  return solve(n-1,m-1,word1,word2);
};
function solve(i,j, word1, word2){
  //base case, if i exhasted return j+!
  if(i<0) return j+1;
  if(j<0) return i+1;
  if(word1[i] === word2[j]){
      //need to move both
      return solve(i-1,j-1,word1,word2);
  }
  let insert = 1 + solve(i,j-1,word1,word2);
  let deleted = 1 + solve(i-1,j,word1,word2);
  let replace = 1 + solve(i-1,j-1,word1, word2);
  return Math.min(insert, Math.min(deleted, replace));
}

/* Recursion
for insert, we dont move i word1 pointer move j-1
for delete, move move i pointer i-1, not k
for replace, move both
TC: exponentially, SC: O(n+m)
TLE
*/
var minDistance = function(word1, word2) {
  let n = word1.length;
  let m = word2.length;
  let dp = Array.from({length: n}, () => Array(m).fill(-1));
  return solve(n-1,m-1,word1,word2, dp);
};
function solve(i,j, word1, word2, dp){
  //base case, if i exhasted return j+!
  if(i < 0) return j+1;
  if(j < 0) return i+1;
  if(dp[i][j] !== -1) return dp[i][j]
  if(word1[i] === word2[j]){
      //need to move both
      dp[i][j] = solve(i-1,j-1,word1,word2,dp);
  }else{
      let insert = 1 + solve(i,j-1,word1,word2,dp);
  let deleted = 1 + solve(i-1,j,word1,word2, dp);
  let replace = 1 + solve(i-1,j-1,word1, word2, dp);
  dp[i][j] = Math.min(insert, Math.min(deleted, replace));
  }
  
  return dp[i][j];
}


/* Tabulization TC: O(n*m), SC: O(n*m)
*/
var minDistance = function(word1, word2) {
  let n = word1.length;
  let m = word2.length;
  let dp = Array.from({length: n+1}, () => Array(m+1).fill(0));

  //for every i, j will 0
  for(let i=0; i<=n; i++){
      dp[i][0] = i;
  }
  //for every j, i will 0
  for(let j=0; j<=m; j++){
      dp[0][j] = j;
  }

  //movement
  for(let i=1; i<=n; i++){
      for(let j=1; j<=m; j++){
          if(word1[i-1] === word2[j-1]){
              dp[i][j] = dp[i-1][j-1];
          }else{
              let insert = 1 + dp[i][j-1];
              let deleted = 1 + dp[i-1][j];
              let replace = 1 + dp[i-1][j-1];
              dp[i][j] = Math.min(insert, Math.min(deleted, replace));
          }
      }
  }
  return dp[n][m];
};

/* Space Optimization TC: O(n*m), SC: O(n)
*/
var minDistance = function(word1, word2) {
  let n = word1.length;
  let m = word2.length;
  let prev = Array(m+1).fill(0);

  //for every j, i will 0, in this we are filling prev row
  for(let j=0; j<=m; j++){
      prev[j] = j;
  }

  //movement
  for(let i=1; i<=n; i++){
      let curr = Array(m+1).fill(0);
      curr[0] = i; //because of base case j===0 =>j
      for(let j=1; j<=m; j++){
          if(word1[i-1] === word2[j-1]){
              curr[j] = prev[j-1];
          }else{
              let insert = 1 + curr[j-1];
              let deleted = 1 + prev[j];
              let replace = 1 + prev[j-1];
              curr[j] = Math.min(insert, Math.min(deleted, replace));
          }
      }
      prev = curr;
  }
  return prev[m];
};