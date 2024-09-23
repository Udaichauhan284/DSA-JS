/* 2707 Extra Characters in a String
23 Sept 2024, Leetcode POTD, Array, Stirng, DP, recursion

Input: s = "leetscode", dictionary = ["leet","code","leetcode"]
Output: 1
Explanation: We can break s in two substrings: "leet" from index 0 to 3 and "code" from index 5 to 8. There is only 1 unused character (at index 4), so we return 1.
*/

/*Method 1- use of recursion we have two option we can take curr i char
and check in dic or we can skip it and check next substr
TC: O(2^n * N * n) 2^n is for option, N is for evey char, n is for 
substr, SC: O(n) recursion stack space, TLE
*/
var minExtraChar = function(s, dictionary) {
  let n = s.length;
  let set = new Set(dictionary);
  return solve(0, s, set, n);
};
function solve(i, s, set, n){
  if(i>=n){
      return 0;
  }
  let result = 1 + solve(i+1, s, set, n); //skiping first char
  //now not skip and considering first char
  for(let j=i; j<n; j++){
      let char = s.substr(i, j-i+1);
      if(set.has(char)){
          //valid substring
          result = Math.min(result, solve(j+1, s, set, n));
      }
  }
  return result;
}


/*Method 2- use of DP we have two option we can take curr i char
and check in dic or we can skip it and check next substr
TC: O(n * N * n) 2^n is for option, N is for evey char, n is for 
substr, SC: O(n) of DP space
*/
var minExtraChar = function(s, dictionary) {
  let n = s.length;
  let dp = Array(n).fill(-1);
  let set = new Set(dictionary);
  return solve(0, s, set, n, dp);
};
function solve(i, s, set, n, dp){
  if(i>=n){
      return 0;
  }
  if(dp[i] !== -1){
      return dp[i];
  }
  let result = 1 + solve(i+1, s, set, n, dp); //skiping first char
  //now not skip and considering first char
  for(let j=i; j<n; j++){
      let char = s.substr(i, j-i+1);
      if(set.has(char)){
          //valid substring
          result = Math.min(result, solve(j+1, s, set, n, dp));
      }
  }
  dp[i] = result;
  return result;
}


/* Method3 use of Bottom Up, in this we want ans from dp[0], so the 
code will be same as recursion one, we just use reverse for loop for
filling it, TC: O(n * N *n) last n for substr ~ O(n^2), SC: O(n)
*/
var minExtraChar = function(s, dictionary) {
  let n = s.length;
  let dp = Array(n+1).fill(0);
  let set = new Set(dictionary);

  //now we will traverse from n-1 to 0
  for(let i=n-1; i>=0; i--){
      //first char we will skip 
      dp[i] = 1+dp[i+1]; //skip it one add with dp next one
      //now we will take it, no skip
      for(let j=i; j<n; j++){
          let char = s.substr(i, j-i+1);
          if(set.has(char)){
              //valid substring
              dp[i] = Math.min(dp[i], dp[j+1]);
          }
      }
  }
  return dp[0];
};