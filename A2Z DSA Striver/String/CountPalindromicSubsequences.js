/* Count Palindromic Subsequences
Str = "abcd"
Output: 
4
Explanation:
palindromic subsequence are : "a" ,"b", "c" ,"d"

Input: 
Str = "aab"
Output: 
4
Explanation:
palindromic subsequence are :"a", "a", "b", "aa"
*/

/*This can be solve by using DP, memoization
TC: O(n^2), SC: O(n^2)
*/
class Solution{
  countPS(str){
      //code here
      let n = str.length;
      let dp = Array.from({length: n}, () => Array(n).fill(-1));
      return this.solve(0,n-1,str,dp);
  }
  solve(i,j,str,dp){
      let mod = 1000000007;
      //base case
      if(i>j) return 0;
      if(i === j) return 1;
      //dp base case
      if(dp[i][j] !== -1) return dp[i][j];
      
      if(str[i] === str[j]){
           dp[i][j] = (1 + this.solve(i+1,j,str,dp) + this.solve(i,j-1,str,dp)) % mod;
      }else{
          dp[i][j] = (this.solve(i+1,j,str,dp) + this.solve(i,j-1,str,dp) - this.solve(i+1,j-1,str,dp)) % mod;
      }
      
      //check for no-nevative dp value
      if(dp[i][j] < 0) {
          dp[i][j] += mod;
      }
      return dp[i][j];
  }
}


/* Tabulization - DP - Bottom Up Approach
TC: O(n*n), SC: O(n*n), no auilary stack space
*/
class Solution1{
  countPS(str){
      //code here
      let n = str.length;
      let mod = 1000000007;
      let dp = Array.from({length: n}, () => Array(n).fill(0));
      //base case when i === j
      for(let i=0; i<n; i++){
          dp[i][i] = 1;
      }
      
      // Fill the table
      for (let i = n-1; i >= 0; i--) {
          for (let j = i+1; i < n; i++) {
              // let j = i + length - 1;
              if (str[i] === str[j]) {
                  dp[i][j] = (1 + dp[i + 1][j] + dp[i][j - 1]) % mod;
              } else {
                  dp[i][j] = (dp[i + 1][j] + dp[i][j - 1] - dp[i + 1][j - 1]) % mod;
              }

              if (dp[i][j] < 0) {
                  dp[i][j] += mod;
              }
          }
      }
      return dp[0][n-1];
  }
}