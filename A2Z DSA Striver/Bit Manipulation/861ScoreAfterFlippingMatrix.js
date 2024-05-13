/* 861. Score After Flipping Matrix
13 May 2024 Leetcode Code Daily Challenge - Topic: Array, Matrix, Greedy, Bit Manipulation

Input: grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
*/
/*Method 1- modifing the input grip, fliing the value, to finding the ans.
first change the, first colum value in each row. then coutzero and countone
starting from col 2, because first col will automaticaly filled, then find the score TC: O(n*m), SC: O(1)
*/
var matrixScore = function(grid) {
  let m = grid.length; //row
  let n = grid[0].length; //col

  //set the first colum value for each row
  for(let i=0; i<m; i++){
      if(grid[i][0] === 0){
          //flip the zero
          for(let j=0; j<n; j++){
              grid[i][j] = 1-grid[i][j];
          }
      }
  }

  //now countZero and one from second col
  for(let j=1; j<n; j++){
      let countZero = 0;
      for(i=0; i<m; i++){
          if(grid[i][j] === 0){
              countZero++;
          }
      }
      let countOne = m-countZero; //num of row-countZero
      if(countZero > countOne){
          //flip the zero
          for(let i=0; i<m; i++){
              grid[i][j] = 1-grid[i][j];
          }
      }
  }

  //count the score
  let score=0;
  for(let i=0; i<m; i++){
      for(let j=0; j<n; j++){
          let value = grid[i][j] * Math.pow(2, n-j-1);
          score += value;
      }
  }
  return score;
};
 //Method2-in this we are not changing the input TC: O(n*m), SC: O(1)
 var matrixScore1 = function(grid) {
  let m = grid.length;
  let n = grid[0].length;

  //in pervious methos, we change first col, so do this same here, we change to one, just count that here only.
  //MSB - 2^n-j-1 -> 2^n-0-1 -> 2^n-1
  let score = m * Math.pow(2,n-1);

  //now start traversing on col
  for(let j=1; j<n; j++){
      let countSameBits = 0;
      for(let i=0; i<m; i++){
          if(grid[i][j] === grid[i][0]){
              countSameBits++;
          }
      }

      let countOne = countSameBits
      let countZero = m-countOne;
      let ones = Math.max(countOne,countZero);

      score += Math.pow(2,n-j-1) * ones
  }
  return score;
};
