/* 959 Regions Cut By Slashes
10 August 2024, Leetcode POTD, Array, Sumbol to 1 and 0 of 3*3 matrix, DFS
Input: grid = [" /","/ "]
Output: 2
take _/ => blank will be 3*3 matrix fill with 0
/ => 3 * 3 =>  0 0 1
               0 1 0
               1 0 0

\ => 3 * 3 => 1 0 0
              0 1 0
              0 0 1
*/ 

/*First in ques of symbols try to change symbol in 1or0, 2*2 grid
of 1and0 and 3*3 grid of 1and0, fill this matrix of row*3 and
col*3, and then apply DFS on zero to find the regions, in this
we can apply Number of Island approach
TC: O(n*m), SC: O(n*m) for matrix
*/
var regionsBySlashes = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  //matrix of rows*3 and cols*3, for each cell we need to take 3*3 matrix.
  let matrix = Array.from({ length: rows * 3 }, () => Array(cols * 3).fill(0));
  //fill the matrix
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === "/") { //forward
              matrix[i * 3][j * 3 + 2] = 1;
              matrix[i * 3 + 1][j * 3 + 1] = 1;
              matrix[i * 3 + 2][j * 3] = 1;
          } else if (grid[i][j] === "\\") { //backward
              matrix[i * 3][j * 3] = 1;
              matrix[i * 3 + 1][j * 3 + 1] = 1;
              matrix[i * 3 + 2][j * 3 + 2] = 1;
          }
      }
  }
  //now count the region
  let region = 0;
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] === 0) {
              numberOfRegion(matrix, i, j);
              region++;
          }
      }
  }
  return region;
};
//dfs function which count the number of region
function numberOfRegion(matrix, i, j) {
  if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length || matrix[i][j] === 1) {
      return;
  }
  //mark that visited
  matrix[i][j] = 1;

  //move in 4 direction
  numberOfRegion(matrix, i - 1, j); //up
  numberOfRegion(matrix, i + 1, j); //down
  numberOfRegion(matrix, i, j - 1); //left
  numberOfRegion(matrix, i, j + 1); //right
}