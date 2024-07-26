/* 200 Number of Isalnd
19 April 2024
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

this question is same as Perimeter of Island, just here we need to count the island, so mark that visited with "$" char, here char are in use. TC : O(n*m), SC : O(1)
*/
const numIslands = (grid) => {
  let count = 0;
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, i, j, m, n);
        count++;
      }
    }
  }
  return count;
};
function dfs(grid, i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== "1") {
    return;
  }

  if (grid[i][j] === "$") return;

  grid[i][j] = "$"; //mark that visted

  dfs(grid, i - 1, j, m, n); //up
  dfs(grid, i + 1, j, m, n); //down
  dfs(grid, i, j - 1, m, n); //left
  dfs(grid, i, j + 1, m, n); //right
}

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
); //1

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
); //3
