/* 650. 2 keys keyboard
19 August 2024, Leetcode POTD, Array, DP

Input: n = 3
Output: 3
Explanation: Initially, we have one character 'A'.
In step 1, we use Copy All operation.
In step 2, we use Paste operation to get 'AA'.
In step 3, we use Paste operation to get 'AAA'.

*/

/*Method 1- use of recursion, as we need to repeat the process
till A will become to n, we can use first recursion and then
recursion + memoization DP
*/
var minSteps = function(n) {
  if(n === 1) return 0; //already have 1 A on screen

  return 1 + solve(1, 1, n);    
};
function solve(currA, clip, n){
  if(currA === n){
      return 0;
  }
  if(currA >= n){
      return 1e9;
  }

  //main code, first copyAll and Poste, 2 operation
  let copyAllPaste = 1 + 1 + solve(currA+currA, currA, n);
  let paste = 1 + solve(currA + clip, clip, n);

  return Math.min(copyAllPaste, paste);
}


/*Method 2- use of recursion, as we need to repeat the process
till A will become to n, we can use first recursion and then
recursion + memoization DP
TC: O(n^2), SC: O(n^2)
*/
var minSteps = function(n) {
  if(n === 1) return 0; //already have 1 A on screen
  let dp = Array.from({length: 1001}, () => Array(1001).fill(-1));
  return 1 + solve(1, 1, n, dp);    
};
function solve(currA, clip, n, dp){
  if(currA === n){
      return 0;
  }
  if(currA >= n){
      return 1000;
  }

  if(dp[currA][clip] !== -1) return dp[currA][clip];
  //main code, first copyAll and Poste, 2 operation
  let copyAllPaste = 1 + 1 + solve(currA+currA, currA, n,dp);
  let paste = 1 + solve(currA + clip, clip, n,dp);
  dp[currA][clip] = Math.min(copyAllPaste, paste);
  return dp[currA][clip];
}


/*Method 3- use of Bottom UP
TC: O(n^2), SC: O(n)
*/
var minSteps = function(n) {
  let dp = Array(n+1).fill(0);
  if(n === 1){
      return 0;
  }
  if(n === 2){
      return 2;
  }
  //initial dp, value
  dp[0] = 0;
  dp[1] = 0;
  dp[2] = 2;
  //main code
  for(let i=3; i<=n; i++){
      let factor = Math.floor(i/2);
      while(factor >= 1){
          if(i%factor === 0){
              let stepToFactor = dp[factor];
              let copy = 1;
              let paste = Math.floor(i / factor) - 1;
              dp[i] = dp[factor] + copy + paste;
              break;
          }
         factor--;    
      }
  }
  return dp[n];
};