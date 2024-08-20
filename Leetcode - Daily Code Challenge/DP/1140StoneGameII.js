/* 1140 Stone Game II
20 August 2024, Leetcode POTD, DP, Array, Game Strategy

Input: piles = [2,7,9,4,4]
Output: 10
Explanation:  If Alice takes one pile at the beginning, Bob takes two piles, then Alice takes 2 piles again. Alice can get 2 + 4 + 4 = 10 piles in total. If Alice takes two piles at the beginning, then Bob can take all three piles left. In this case, Alice get 2 + 7 = 9 piles in total. So we return 10 since it's larger. 
*/

/*Game strategy-when its your turn do your best, whe its other 
turn expect the worst case.
Method 1- use of recursion, GS mostly solve by recursion
*/
var stoneGameII = function(piles) {
  //we want max ans for Alice, so we only focus on Alice stone
  return solveForAlice(1, 0, 1, piles); //person-Alice,i,M
};
function solveForAlice(person, i, M, piles){
  let len = piles.length;
  if(i >= len) return 0; //base case, when ind if > len

  let stones = 0;
  let result = (person === 1) ? -1 : Number.MAX_VALUE;
  //for alice result -1, and for bob Max value

  for(let x=1; x<=Math.min(2*M, len-i); x++){
      stones += piles[i+x-1];
      if(person === 1){
          //alice turn, do your best
          result = Math.max(result, stones+solveForAlice(0, i+x, Math.max(M,x), piles));
      }else{
          //bob turn expect worst
          result = Math.min(result, solveForAlice(1, i+x, Math.max(M,x), piles));
      }
  }
  return result;
}


/*Game strategy-when its your turn do your best, whe its other 
turn expect the worst case.
Method 2- use of recursion+memo, GS mostly solve by recursion
DP, TC: O(n^3), SC: O(n^3)
*/
var stoneGameII = function(piles) {
  let len = piles.length;
  let dp = Array.from({length : 2}, () => Array.from({length : len + 1}, () => Array(len+1).fill(-1)));
  //we want max ans for Alice, so we only focus on Alice stone
  return solveForAlice(1, 0, 1, piles, dp); //person-Alice,i,M
};
function solveForAlice(person, i, M, piles, dp){
  let len = piles.length;
  if(i >= len) return 0; //base case, when ind if > len
  //condition to check for DP
  if(dp[person][i][M] !== -1) return dp[person][i][M];
  let stones = 0;
  let result = (person === 1) ? -1 : Number.MAX_VALUE;
  //for alice result -1, and for bob Max value

  for(let x=1; x<=Math.min(2*M, len-i); x++){
      stones += piles[i+x-1];
      if(person === 1){
          //alice turn, do your best
          result = Math.max(result, stones+solveForAlice(0, i+x, Math.max(M,x), piles, dp));
      }else{
          //bob turn expect worst
          result = Math.min(result, solveForAlice(1, i+x, Math.max(M,x), piles, dp));
      }
  }
  dp[person][i][M] = result;
  return dp[person][i][M];
}