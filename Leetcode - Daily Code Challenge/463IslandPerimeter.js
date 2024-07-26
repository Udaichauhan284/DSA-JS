/* 463. Island Perimeter
Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.
*/
//Approach 1. use of DFS, when you see 1, apply DFS in this when pointer cross the boundry and see the water, this means there is a ball increase the perimiter and return, mark that i and j -1 as visted. and do dfs for up, down, left and right, TC : O(n*m), SC : O(1)
const islandPerimeter = (grid) => {
  let m = grid.length;
  let n = grid[0].length;
  let perimeter = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        perimeter += dfs(grid, i, j, m, n);
      }
    }
  }
  return perimeter;
};
function dfs(grid, i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
    return 1; //increase the perimeter;
  }
  if (grid[i][j] === -1) return 0;

  grid[i][j] = -1;

  let perimeter = 0;
  // call for up,down,left and right direction
  perimeter += dfs(grid, i - 1, j, m, n); //up
  perimeter += dfs(grid, i + 1, j, m, n); //down
  perimeter += dfs(grid, i, j - 1, m, n); //left
  perimeter += dfs(grid, i, j + 1, m, n); //right

  return perimeter;
}
console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
); // 16

//Approach 2 - simple use of iterative method and visit each grid and see is that island and move up,down,left,right TC: O(n*m), SC : O(1)
const islandPerimeter1 = (grid) => {
  let perimeter = 0;
  let m = grid.length;
  let n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        continue;
      }

      //grid[i][j] === 1 , now move up and down
      if (i - 1 < 0 || grid[i - 1][j] === 0) {
        //up
        perimeter++;
      }
      if (i + 1 >= m || grid[i + 1][j] === 0) {
        //down
        perimeter++;
      }
      if (j - 1 < 0 || grid[i][j - 1] === 0) {
        //left
        perimeter++;
      }
      if (j + 1 >= n || grid[i][j + 1] === 0) {
        //right
        perimeter++;
      }
    }
  }
  return perimeter;
};
console.log(
  islandPerimeter1([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
); // 16

