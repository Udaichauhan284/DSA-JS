/* Find the number for islands
this is done by DFS,
this question want to traverse in all 8 direction.
*/
class Solution {
  // Function to find the number of islands.
  numIslands(grid) {
    // code here
    let count = 0;
    if (grid.length === 0) return count;
    let m = grid.length;
    let n = grid[0].length;
    for (let row = 0; row < m; row++) {
      for (let col = 0; col < n; col++) {
        if (grid[row][col] === "1") {
          count++;
          this.dfs(grid, row, col, m, n);
        }
      }
    }
    return count;
  }

  dfs(grid, row, col, m, n) {
    if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] !== "1") {
      return;
    }

    // Mark visited
    grid[row][col] = "0";

    // Move in 8 directions
    this.dfs(grid, row - 1, col, m, n); // North
    this.dfs(grid, row + 1, col, m, n); // South
    this.dfs(grid, row, col - 1, m, n); // West
    this.dfs(grid, row, col + 1, m, n); // East
    this.dfs(grid, row - 1, col + 1, m, n); // North East
    this.dfs(grid, row - 1, col - 1, m, n); // North West
    this.dfs(grid, row + 1, col - 1, m, n); // South East
    this.dfs(grid, row + 1, col + 1, m, n); // South West
  }
}
