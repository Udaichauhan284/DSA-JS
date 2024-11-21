/* 2257 Count Ungruarded Cells in the Grid
21 Nov 2024, Leetcode POTD, Array, DFS, Matrix

Input: m = 4, n = 6, guards = [[0,0],[1,1],[2,3]], walls = [[0,1],[2,2],[1,4]]
Output: 7
Explanation: The guarded and unguarded cells are shown in red and green respectively in the above diagram.
There are a total of 7 unguarded cells, so we return 7.
*/

/*In this we can use DFS
TC: O(n*m + G*(n*m))
*/
var countUnguarded = function(m, n, guards, walls) {
  let grid = Array.from({length: m}, () => Array(n).fill(0));
  //fill for gaurd
  for(let [i,j] of guards){
      grid[i][j] = 1;
  }
  //fill the wall
  for(let [i,j] of walls){
      grid[i][j] = 2;
  }
  //now move into grid
  for(let [row,col] of guards){
      dfs(grid,row-1,col,m,n,1); //UP
      dfs(grid,row+1,col,m,n,2); //DOWN
      dfs(grid,row,col-1,m,n,3); //LEFT
      dfs(grid,row,col+1,m,n,4); //RIGHT
  }
  let ungaurdedCell=0;
  for(let i=0; i<grid.length; i++){
      for(let j=0; j<grid[0].length; j++){
          if(grid[i][j] === 0){
              ungaurdedCell++;
          }
      }
  }
  return ungaurdedCell;
};
function dfs(grid,row,col,m,n,direction){
  //base case
  if(row < 0 || col < 0 || row >= m || col >= n || grid[row][col] === 1 || grid[row][col] === 2){
      return;
  }
  //mark visited
  grid[row][col] = 3;
  //move in direction
  if(direction === 1){
      dfs(grid,row-1,col,m,n, direction);
  }else if(direction === 2){
      dfs(grid,row+1,col,m,n,direction);
  }else if(direction === 3){
      dfs(grid,row,col-1,m,n,direction);
  }else{
      dfs(grid,row,col+1,m,n,direction);
  }
}