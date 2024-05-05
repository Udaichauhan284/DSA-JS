/* 994. Roting Oranges
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
*/
 //Grid Traversal - BFS, because we need to rotten the negibor organge also TC : O(n*m)+O(n*m) ~ O(n*m), SC : O(n*m)
const orangesRotting = (gird) => {
  let minutes = 0;
  let freshOranges = 0;
  let queue = [];

  for(let i=0; i<gird.length; i++){
    for(let j=0; j<grid[0].length; j++){
      if(grid[i][j] === 1) freshOranges++;
      if(grid[i][j] === 2) queue.push([i,j]);
    }
  }

  //bfs
  while(queue.length && freshOranges){
    let newQueue = [];
    while(queue.length){
      let [x,y] = queue.shift();
      [[-1,0],[1,0],[0,-1],[0,1]].forEach(([dx,dy]) => {
        let nx = x+dx, ny = y+dy;
        if(nx >=0 && ny >= 0 && nx < grid.length && ny < grid[0].length && grid[nx][ny] === 1){
          freshOranges--;
          newQueue.push([nx,ny]);
          grid[nx][ny]=2;
        }
      });
    }
    minutes++;
    queue = newQueue;
  }
  return freshOranges === 0 ? minutes : -1;
}