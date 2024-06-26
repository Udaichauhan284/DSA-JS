/* Longest Common SUbstring (consecutive)
Input: S1 = "ABCDGH", S2 = "ACDGHR", n = 6, m = 6
Output: 4
Explanation: The longest common substring
is "CDGH" which has length 4.
*/

/* Method 1- use of Tabulization
TC: O(n*m), SC: O(n*m)
*/
class Solution {
  longestCommonSubstr(S1, S2, n, m) {
    //code here
    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    let ans = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        if (S1[i - 1] === S2[j - 1]) {
          dp[i][j] = 1 + dp[i - 1][j - 1];
          ans = Math.max(ans, dp[i][j]);
        } else {
          dp[i][j] = 0;
        }
      }
    }
    return ans;
  }
}


/* Method 2- use of Space Optimization
TC: O(n*m), SC: O(n)
*/
class Solution {
  longestCommonSubstr(S1,S2,n,m){
      //code here
      let prev = Array(m+1).fill(0);
      
      let ans = 0;
      for(let i=1; i<=n; i++){
          let curr = Array(m+1).fill(0);
          for(let j=1; j<=m; j++){
              if(S1[i-1] === S2[j-1]){
                  curr[j] = 1+prev[j-1];
                  ans = Math.max(ans, curr[j]);
              }else{
                  curr[j] = 0
              }
          }
          prev = curr;
      }
      return ans;
  }
}
