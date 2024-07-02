/* Print Longest Increasing Subsequence

Input:
n = 16
arr = [0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]
Output:
0 4 6 9 13 15 
Explanation:
longest Increasing subsequence is 0 4 6 9 13 15  and the length of the longest increasing subsequence is 6.
*/

class Solution {
  /**
  * @param number n
  * @param number[] arr

  * @returns number[]
  */
  longestIncreasingSubsequence(n, arr) {
      // code here
      let dp = Array(n).fill(1);
      let hash = [];
      let maxi = 1;
      let lastIndex = 0;
      for(let i=0; i<n; i++){
          hash[i] = i;
          for(let prev = 0; prev<i; prev++){
              if(arr[i] > arr[prev] && dp[i] < dp[prev]+1){
                  dp[i] = 1+dp[prev];
                  hash[i] = prev;
              }
          }
           // Update the maximum length and the last index of LIS
          if(dp[i] > maxi) {
              maxi = dp[i];
              lastIndex = i;
          }
      }
      
      let lis = [];
      while(hash[lastIndex] !== lastIndex){
          lis.push(arr[lastIndex]);
          lastIndex = hash[lastIndex];
      }
      lis.push(arr[lastIndex]);
      return lis.reverse();
  }
}