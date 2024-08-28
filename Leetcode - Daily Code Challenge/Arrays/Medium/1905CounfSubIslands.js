/* 1905. Count Sub Islands
28 August 2024, Leetcode POTD, Medium, Array, DFS, BFS, Disjoint Set

Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
Output: 3
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.
*/

/*Method 1- use of DSU, in this we need to travel grid2 and also need to check in
grid1[r][c] === 1, is yes, subIsaland++, otherwise no
TC: O((rows * cols)^2) for worst case, it will search for each root
TC: O(rows * cols)
*/
class DSU{
  constructor(n){
      this.parent = Array(n).fill(0);
      this.rank = Array(n).fill(0);
      for(let i=0; i<n; i++){
          this.parent[i] = i;
      }
  }
  find(x){
      if(x !== this.parent[x]){
          this.parent[x] = this.find(this.parent[x]);
      }
      return this.parent[x];
  }
  union(x, y){
      let xParent = this.find(x);
      let yParent = this.find(y);
      if(xParent === yParent){
          return;
      }
      if(this.rank[xParent] < this.rank[yParent]){
          this.parent[xParent] = yParent;
      }else if(this.rank[xParent] > this.rank[yParent]){
          this.parent[yParent] = xParent;
      }else{
          this.parent[yParent] = xParent;
          this.rank[xParent] += 1;
      }
  }
}
var countSubIslands = function(grid1, grid2) {
  let rows = grid2.length;
  let cols = grid2[0].length;
  let dsu = new DSU(rows * cols);

  const getIndex = (r, c) => r * cols + c;
  const directions = [[1,0],[-1,0],[0,1],[0,-1]];
  //first do the union for all node and adjNode
  for(let r=0; r<rows; r++){
      for(let c=0; c<cols; c++){
          if(grid2[r][c] === 1){
              for(let [dr, dc] of directions){
                  let nr = r + dr;
                  let nc = c + dc;
                  if(nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid2[nr][nc] === 1){
                      let nodeNo = getIndex(r, c);
                      let adjNodeNo = getIndex(nr, nc);
                      dsu.union(nodeNo, adjNodeNo);
                  }
              }
          }
      }
  }
  //now find the root
  const subIslandSet = new Set();
  for(let r=0; r<rows; r++){
      for(let c=0; c<cols; c++){
          if(grid2[r][c] === 1){
              let nodeNo = getIndex(r, c);
              let root = dsu.find(nodeNo);
              subIslandSet.add(root);
          }
      }
  }

  //now find the ans
  let subIsland = 0;
  for(let root of subIslandSet){
      let isSubIsland = true;
      for(let r = 0; r<rows; r++){
          for(let c=0; c<cols; c++){
              let nodeNo = getIndex(r,c);
              if(grid2[r][c] === 1 && dsu.find(nodeNo) === root){
                  if(grid1[r][c] !== 1){
                      isSubIsland = false;
                  }
              }
          }
      }
      if(isSubIsland){
          subIsland++;
      }
  }
  return subIsland;
};

/*Method 2 - use of DFS
TC: O(rows * cols), SC: O(n) for stack space
*/
var countSubIslands = function(grid1, grid2) {
  let rows = grid2.length;
  let cols = grid2[0].length;

  let subIsland = 0;
  for(let r=0; r<rows; r++){
      for(let c=0; c<cols; c++){
          if(grid2[r][c] === 1 && checkSubIsland(grid1, grid2, r, c)){
              subIsland++;
          }
      }
  }
  return subIsland;
};
function checkSubIsland(grid1, grid2, r, c){
  let rows = grid2.length;
  let cols = grid2[0].length;

  if(r < 0 || r >= rows || c < 0 || c >= cols){
      return true;
  }
  if(grid2[r][c] !== 1) return true; //as we only need 1, land
  //mark the curr on visted
  grid2[r][c] = -1;

  let result = (grid1[r][c] === 1); //check for grid 1 or 0, give true or false

  //move in 4 direction and ADD with result for giving true and false
  result = result & checkSubIsland(grid1, grid2, r+1, c);
  result = result & checkSubIsland(grid1, grid2, r-1, c);
  result = result & checkSubIsland(grid1, grid2, r, c+1);
  result = result & checkSubIsland(grid1, grid2, r, c-1);

  return result;
}

/*Method 3 - use of BFS
TC: O(rows * cols), SC: O(n) for queue
*/
var countSubIslands = function(grid1, grid2) {
  let rows = grid2.length;
  let cols = grid2[0].length;
  let subIsland = 0;
  for(let r = 0; r < rows ; r++){
      for(let c=0; c<cols; c++){
          if(grid2[r][c] === 1 && checkForSubIsland(grid1, grid2, r, c)){
              subIsland++;
          }
      }
  }
  return subIsland;
};
//BFS
function checkForSubIsland(grid1, grid2, r, c){
  let rows = grid2.length;
  let cols = grid2[0].length;
  let result = true;
  const directions = [[1,0],[-1,0],[0,1],[0,-1]];
  let que = [];
  que.push([r,c]); //initial push the curr r and c;
  grid2[r][c] = -1; //marking visted curr one

  while(que.length > 0){
      let [x, y] = que.shift();
      if(grid1[x][y] !== 1){
          result = false;
      }
      //move into 4 direction
      for(let [dx, dy] of directions){
          let nr = x + dx;
          let nc = y + dy;
          if(nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid2[nr][nc] === 1){
              //mark this one visited and add into quq
              grid2[nr][nc] = -1;
              que.push([nr, nc]);
          }
      }
  }
  return result;
}