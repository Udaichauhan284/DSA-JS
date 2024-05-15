/* 2812 Find the safest Path in a grid
15 May 2024 Daily Leetcode Code Challenge, Tpic: Array, Grid, Binary Search< BFS
Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
Output: 0
Explanation: All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).
*/
var maximumSafenessFactor = function (grid) {
  const n = grid.length;
  if (grid[n - 1][n - 1] === 1 || grid[0][0] === 1) return 0;

  const dist = computeDistanceGrid(grid);
  const pq = new MaxPriorityQueue({ priority: (x) => x[0] });
  const vis = Array.from({ length: n }, () => Array(n).fill(false));

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  pq.enqueue([dist[0][0], 0, 0]);
  vis[0][0] = true;

  while (!pq.isEmpty()) {
    const [ds, i, j] = pq.dequeue().element;

    if (i === n - 1 && j === n - 1) return ds;

    for (const [dx, dy] of directions) {
      const newRow = i + dx;
      const newCol = j + dy;
      if (
        isValid(newRow, newCol, n) &&
        grid[newRow][newCol] !== 1 &&
        !vis[newRow][newCol]
      ) {
        vis[newRow][newCol] = true;
        const ds1 = dist[newRow][newCol];
        pq.enqueue([Math.min(ds, ds1), newRow, newCol]);
      }
    }
  }

  return 0;
};

function isValid(x, y, n) {
  return x >= 0 && x < n && y >= 0 && y < n;
}

function computeDistanceGrid(grid) {
  const n = grid.length;
  const distGrid = Array.from({ length: n }, () => Array(n).fill(Infinity));
  const q = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        q.push([i, j]);
        distGrid[i][j] = 0;
      }
    }
  }

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (q.length > 0) {
    const [x, y] = q.shift();
    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      if (isValid(newX, newY, n) && distGrid[newX][newY] === Infinity) {
        distGrid[newX][newY] = distGrid[x][y] + 1;
        q.push([newX, newY]);
      }
    }
  }

  return distGrid;
}
