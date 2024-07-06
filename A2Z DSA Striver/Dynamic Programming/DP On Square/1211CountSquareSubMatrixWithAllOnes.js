/* 1277. Count Square Submatrices with All Ones
Input: matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.
*/

/*In this we will fill the DP, first row and col will be same
as arr. and then we will find the min of upper, left and 
diagonal + 1
then the sum of all square from DP is our ans
TC: O(n*m), SC: O(n*m)
*/
var countSquares = function(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let dp = Array.from({length: n}, () => Array(m).fill(0));

  //base case, fill the first row and col as same as arr
  //row will same, col will change
  for(let j=0; j<m; j++) dp[0][j] = matrix[0][j];
  //col will same , row will change
  for(let i=0; i<n; i++) dp[i][0] = matrix[i][0];

  //movement start
  for(let i=1; i<n; i++){
      for(let j=1; j<m; j++){
          if(matrix[i][j] === 0) dp[i][j] = 0;
          else{
              dp[i][j] = 1 + Math.min(dp[i-1][j], Math.min(dp[i-1][j-1], dp[i][j-1]));
          }
      }
  }

  //now sum of dp
  let sum = 0;
  for(let i=0; i<n; i++){
      for(let j=0; j<m; j++){
          sum += dp[i][j];
      }
  }
  return sum;
};