/* 1219 Path with Maximum Gold
14 May 2024 - Leetcode Daily code challenge, Topic: Array, grid, backtraking, DFS
Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
Output: 24
Explanation:
[[0,6,0],
[5,8,7],
[0,9,0]]
Path to get the maximum gold, 9 -> 8 -> 7.
*/
//In this we just need to traverse from gold cell, we can apply DFS
//in DFS, we need to go for other goal cell maxGold+originalValue and reset that cell value TC:O((n*m)*4^(no.cell of gold)) ~ O((n*m)*4^25), SC: O(depth of recursion tree) system stack ~ O(4^25) 4^no. of cell of gola
var getMaximumGold = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let maxGold = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== 0) {
        maxGold = Math.max(maxGold, DFShelper(grid, i, j, m, n));
      }
    }
  }
  return maxGold;
};
//DFS helper function, for taking cell value and traversing futher in up,left,right,down
function DFShelper(grid, row, col, m, n) {
  if (row >= m || row < 0 || col >= n || col < 0 || grid[row][col] === 0) {
    return 0;
  }
  let maxGold = 0; //for calculating the gold
  //take the curr value for that cell
  let originalValue = grid[row][col];
  //mark that cell visited
  grid[row][col] = 0;
  let directions = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  //move into the direction
  for (let [dx, dy] of directions) {
    let newRow = row + dx;
    let newCol = col + dy;

    maxGold = Math.max(maxGold, DFShelper(grid, newRow, newCol, m, n));
  }

  //reset the original value for previous cell, from where we start moving
  grid[row][col] = originalValue;
  return originalValue + maxGold;
}

 //Preivious method taking much more runtime, trying witout direction for loop
 //TC: O((n*m) * 4^25), SC: O(4^25)
 //this taking less time and memory
 var getMaximumGold1= function(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let maxGold = 0;

  for(let i=0; i<m; i++){
      for(let j=0; j<n; j++){
          if(grid[i][j] !== 0){
              maxGold = Math.max(maxGold, DFS(grid,i,j,m,n));
          }
      }
  }
  return maxGold;
};
function DFS(grid,i,j,m,n){
  if(i >= m || i < 0 || j >=n || j < 0 || grid[i][j] === 0){
      return 0;
  }
  let maxGold = 0;
  let originalValue = grid[i][j];
  //mark visited
  grid[i][j] = 0;

  maxGold = Math.max(maxGold, DFS(grid,i-1,j,m,n));
  maxGold = Math.max(maxGold, DFS(grid,i+1,j,m,n));
  maxGold = Math.max(maxGold, DFS(grid,i,j-1,m,n));
  maxGold = Math.max(maxGold, DFS(grid,i,j+1,m,n));

  grid[i][j] = originalValue;
  return maxGold + originalValue;
}
