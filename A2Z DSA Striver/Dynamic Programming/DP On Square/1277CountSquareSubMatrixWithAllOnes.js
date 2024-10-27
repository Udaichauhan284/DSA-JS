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
var countSquares = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let dp = Array.from({ length: n }, () => Array(m).fill(0));

  //base case, fill the first row and col as same as arr
  //row will same, col will change
  for (let j = 0; j < m; j++) dp[0][j] = matrix[0][j];
  //col will same , row will change
  for (let i = 0; i < n; i++) dp[i][0] = matrix[i][0];

  //movement start
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] === 0) dp[i][j] = 0;
      else {
        dp[i][j] =
          1 + Math.min(dp[i - 1][j], Math.min(dp[i - 1][j - 1], dp[i][j - 1]));
      }
    }
  }

  //now sum of dp
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      sum += dp[i][j];
    }
  }
  return sum;
};


//This is the good approach follow this
//Leetcode POTD on 27 Oct 2024
/*in this for creating the sqaure we need to move right, below, diagonal
for creating the square we will take min of all these 3 side.
Approach 1-use of recursion + memoization -> DP. TC: O(n*m), SC: O(n*m)
*/
var countSquares = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let dp = Array.from({length: n}, ()=>Array(m).fill(-1));

    let result = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            result += solve(i,j,n,m,matrix,dp);
        }
    }
    return result;
};
function solve(i,j,n,m,matrix,dp){
    if(i >= n || j >= m){
        return 0;
    }
    if(matrix[i][j] === 0){
        return 0;
    }
    if(dp[i][j] !== -1){
        return dp[i][j];
    }

    //check in right for 1
    let right = solve(i,j+1,n,m,matrix,dp);
    //check below for 1
    let below = solve(i+1,j,n,m,matrix,dp);
    //check digonal for 1
    let digonal = solve(i+1,j+1,n,m,matrix,dp);
    //now for creating the sqaure we need to take the min for all 3s side
    dp[i][j] = 1 + Math.min(right,below,digonal);
    return dp[i][j];
}


/*Approach Bottom Up DP method
TC: O(n*m), SC: O(n*m)
*/
var countSquares = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let result = 0;
    let dp = Array.from({length: n}, () => Array(m).fill(0));

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(i===0 || j===0){ //base case 0th row and 0thcol in matrix
                dp[i][j] = matrix[i][j]; //is 1 in dp[0][0]=1, if 0 then 0
            }else{
                //now check for 1s
                if(matrix[i][j] === 1){
                    dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
                }
            }
            result += dp[i][j];
        } 
    }
    return result;
};
