/* 1020. Number of Enclaves
Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.
*/
 //This question is same as surrondes region, here also we dont need to see the boundary one, just need to count the inner one. apply same logic, first traverse the boundary, mark them visited. TC: O(n*m)+O(n+m) ~ O(n*m), SC : O(n*m) for recursion
const numEnclaves = (grid) => {
  let m = grid.length;
  let n = grid[0].length;
  let count = 0;

  //traverse the boundary, row will same, col will change
  for(let i=0; i<n; i++){
    if(grid[0][i] === 1){
      dfs(grid,0,i,m,n);
    }
    if(grid[m-1][i]){
      dfs(grid,m-1,i,m,n);
    }
  }

  //row will change, col will same
  for(let i=0; i<m; i++){
    if(grid[i][0] === 1){
      dfs(grid,i,0,m,n);
    }
    if(grid[i][n-1] === 1){
      dfs(grid,i,n-1,m,n);
    }
  }

  for(let i=0; i<m; i++){
    for(let j=0; j<n; j++){
      if(grid[i][j] === 0){
        grid[i][j] = 1;
      }else if(grid[i][j] === 1){
        count++;
      }
    }
  }
  return count;
}
function dfs(grid,row,col,m,n){
  if(row < 0 || row >= m || col < 0 || col >= n || grid[row][col] !== 1) return;

  //mark that visited
  grid[row][col] = 0;

  dfs(grid, row-1, col, m,n);
  dfs(grid, row+1, col, m,n);
  dfs(grid, row, col-1, m,n);
  dfs(grid, row, col+1, m,n);
}