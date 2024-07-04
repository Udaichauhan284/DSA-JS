/* Matrix Chain Multiplication
Given a sequence of matrices, find the most efficient way to multiply these matrices together. The efficient way is the one that involves the least number of multiplications.

The dimensions of the matrices are given in an array arr[] of size N (such that N = number of matrices + 1) where the ith matrix has the dimensions (arr[i-1] x arr[i]).

Input: N = 5
arr = {40, 20, 30, 10, 30}
Output: 26000
Explanation: There are 4 matrices of dimension 
40x20, 20x30, 30x10, 10x30. Say the matrices are 
named as A, B, C, D. Out of all possible combinations,
the most efficient way is (A*(B*C))*D. 
The number of operations are -
20*30*10 + 40*20*10 + 40*10*30 = 26000.
*/

//Recursion, this will give TLE, TC: O(explonation), SC: O(n)
class Solution {
    
  matrixMultiplication(arr, n)
  {
      //your code here
      return this.solve(1,n-1,arr); //i,j
  }
  solve(i,j,arr){
      //base case 
      if(i===j) return 0;
      let mini = Number.MAX_VALUE;
      //movement, partititon
      for(let k=i; k<j; k++){
          let steps = arr[i-1]*arr[k]*arr[j]+this.solve(i,k,arr)+this.solve(k
          +1,j,arr);
          
          if(steps < mini){
              mini = steps;
          }
      }
      return mini;
  }
}


//Memoization - Use of DP array [N][N] TC: O(n*n)*n ~ O(n^3), SC: O(n^2)+O(n)
class Solution {
    
  matrixMultiplication(arr, n)
  {
      //your code here
      let dp = Array.from({length: n}, () => Array(n).fill(-1));
      return this.solve(1,n-1,arr,dp); //i,j
  }
  solve(i,j,arr,dp){
      //base case 
      if(i===j) return 0;
      if(dp[i][j] !== -1) return dp[i][j];
      let mini = Number.MAX_VALUE;
      //movement, partititon
      for(let k=i; k<j; k++){
          let steps = arr[i-1]*arr[k]*arr[j]+this.solve(i,k,arr,dp)+this.solve(k
          +1,j,arr,dp);
          
          if(steps < mini){
              mini = steps;
          }
      }
      return (dp[i][j] = mini);
  }
}


//Tabulization TC: O(n^3), SC: O(n^2)
class Solution {
    
  matrixMultiplication(arr, n)
  {
      //your code here
      let dp = Array.from({length: n}, () => Array(n).fill(0));
      //base case for i === j
      for(let i=0; i<n; i++){
          dp[i][i] = 0;
      }
      //movement start for partition, just do oppostion of i and j from Memoization

      for(let i=n-1; i>=1; i--){
          for(let j=i+1; j<n; j++){
              let mini = Number.MAX_VALUE;
              for(let k=i; k<j; k++){
                  let steps = arr[i-1]*arr[k]*arr[j]+dp[i][k]+dp[k+1][j];
                  if(steps < mini){
                      mini = steps;
                  }
                  dp[i][j] = mini;
              }
          }
      }
      return dp[1][n-1];
  }
}