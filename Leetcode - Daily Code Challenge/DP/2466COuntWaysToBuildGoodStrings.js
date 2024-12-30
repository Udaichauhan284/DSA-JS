/* 2466 Count Ways To Build Good Strings
30 Dec 2024, Leetcode POTD, Dynamic Programming

Input: low = 3, high = 3, zero = 1, one = 1
Output: 8
Explanation: 
One possible valid good string is "011". 
It can be constructed as follows: "" -> "0" -> "01" -> "011". 
All binary strings from "000" to "111" are good strings in this example.
*/

/*In this question, we have options that we can take zero or one
so we have options, so we can use Recursion+Memo DP, in this we
just need to see the length, which is in between low and high
TC: O(H), SC: O(H)
*/
var countGoodStrings = function(low, high, zero, one) {
  let MOD = 1e9+7;
  //let take a DP, only len is changing so, we take the High+1 len array
  let dp = Array(high+1).fill(-1);
  return solve(0, low, high, zero, one, dp, MOD);
};
function solve(len, low, high, zero, one, dp, MOD){
  //base case, if len is greater then high, return 0
  if(len > high){
      return 0;
  }
  //now when len is in between low and high, this is one ans
  let addOne = false;
  if(len >= low && len <= high){
      addOne = true;
  }

  if(dp[len] !== -1) return dp[len];

  //appendOne, one times to len
  let appendOne = solve(len+one, low, high, zero, one, dp, MOD);
  //appendZero, zero times to len
  let appendZero = solve(len+zero, low, high, zero, one, dp, MOD);

  if(addOne === true){
      dp[len] = (appendOne + appendZero + 1) % MOD;
  }else{
      dp[len] = (appendOne + appendZero) % MOD;
  }
  return dp[len];
}


/*Bottom-Up Approach, here only len is changing, so in loop we check len
with zero and one, and add curr one and len-zero from dp
TC: O(H), SC: O(H)
*/
function countGoodStrings(low, high, zero, one) {
  const MOD = 1e9 + 7;
  // dp[i] represents number of valid strings of length i
  const dp = Array(high + 1).fill(0);
  
  // Empty string has length 0, so dp[0] = 1
  dp[0] = 1;
  
  // Build up from shorter to longer lengths
  for (let len = 1; len <= high; len++) {
      // If we can add zero (len-zero exists)
      if (len >= zero) {
          dp[len] = (dp[len] + dp[len - zero]) % MOD;
      }
      // If we can add one (len-one exists)
      if (len >= one) {
          dp[len] = (dp[len] + dp[len - one]) % MOD;
      }
  }
  
  // Sum up all valid lengths between low and high
  let result = 0;
  for (let i = low; i <= high; i++) {
      result = (result + dp[i]) % MOD;
  }
  
  return result;
}