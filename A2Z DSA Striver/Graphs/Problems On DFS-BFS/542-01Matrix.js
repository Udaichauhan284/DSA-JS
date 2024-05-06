/* 542. 01 Matrix
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.
Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]
*/
//In this we need to see the nearest 0, so use the BSF from 0 to 1. Take a new diest of mat, dont change the mat. TC: O(n*m), SC : O(n*m) just for dist
const updateMatrix = (mat) => {
  let m = mat.length;
  let n = mat[0].length;
  let dist = Array(m)
    .fill(-1)
    .map(() => Array(n).fill(-1));
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        dist[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  while (queue.length > 0) {
    let [row, col] = queue.shift();

    for (let [dx, dy] of directions) {
      let newR = row + dx;
      let newC = col + dy;

      if (newR >= 0 && newR < m && newC >= 0 && newC < n) {
        if (dist[newR][newC] === -1) {
          dist[newR][newC] = 1 + dist[row][col];
          queue.push([newR, newC]);
        }
      }
    }
  }
  return dist;
};

//DP
const updateMatrix1 = (mat) => {
  let m = mat.length;
  let n = mat[0].length;

  //traversal from Top-left to bottom right
  for(let i=0; i<m; i++){
      for(let j=0; j<n; j++){
          if(mat[i][j] === 0) continue;

          //update
          mat[i][j] = Infinity;

          if(i-1 >= 0){
              mat[i][j] = Math.min(mat[i][j], 1+mat[i-1][j]);
          }
          if(j-1 >= 0){
              mat[i][j] = Math.min(mat[i][j], 1+mat[i][j-1]);
          }
      }
  }

  for(let i=m-1; i>=0; i--){
      for(let j=n-1; j>=0; j--){
          if(mat[i][j] === 0){
              continue;
          }

          if(i+1 < m){
              mat[i][j] = Math.min(mat[i][j], 1+mat[i+1][j]);
          }
          if(j+1 < n){
              mat[i][j] = Math.min(mat[i][j], 1+mat[i][j+1]);
          }
      }
  }
  return mat;
}
