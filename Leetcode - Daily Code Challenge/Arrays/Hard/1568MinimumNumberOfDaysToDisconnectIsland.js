/* 1568. Minimum Number of Days to Disconnect Island
11 August 2024, Leetcode POTD, Array, Matrix, DFS, Number of island

Input: grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]

Output: 2
Explanation: We need at least 2 days to get a disconnected grid.
Change land grid[1][1] and grid[0][2] to water and get 2 disconnected island.
*/


/*Method 1-this is good compared to brute method, in this we
need minDays, is number of island is >1 or ===0, measn we dont
need to disconnect minDay = 0, otherwise we will get the ans
in 1 or 2 days, this measn we need to find the num of island
using DFS. TC: O((n*m)^2), SC: O(n*m) for visited arr.
*/
var minDays = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let island = numberOfIsland(grid);
  
  if (island > 1 || island === 0) {
      return 0; // Minimum days required
  } else {
      for (let i = 0; i < m; i++) {
          for (let j = 0; j < n; j++) {
              if (grid[i][j] === 1) {
                  grid[i][j] = 0; // Temporarily remove land
                  island = numberOfIsland(grid);
                  grid[i][j] = 1; // Restore land
                  
                  if (island > 1 || island === 0) {
                      return 1; // Minimum days required
                  }
              }
          }
      }
  }
  return 2; // If none of the single land removals split the island, return 2 days
};

function numberOfIsland(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let island = 0;
  let visited = Array.from({ length: m }, () => Array(n).fill(false));
  
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === 1 && !visited[i][j]) {
              DFS(grid, i, j, visited, m, n);
              island++;
          }
      }
  }
  return island;
}

function DFS(grid, i, j, visited, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || grid[i][j] === 0) {
      return;
  }
  
  visited[i][j] = true;
  
  DFS(grid, i + 1, j, visited, m, n);
  DFS(grid, i - 1, j, visited, m, n);
  DFS(grid, i, j + 1, visited, m, n);
  DFS(grid, i, j - 1, visited, m, n);
}