/* 1992. Find All Groups of Farmland
You are given a 0-indexed m x n binary matrix land where a 0 represents a hectare of forested land and a 1 represents a hectare of farmland.
To keep the land organized, there are designated rectangular areas of hectares that consist entirely of farmland. These rectangular areas are called groups. No two groups are adjacent, meaning farmland in one group is not four-directionally adjacent to another farmland in a different group.
land can be represented by a coordinate system where the top left corner of land is (0, 0) and the bottom right corner of land is (m-1, n-1). Find the coordinates of the top left and bottom right corner of each group of farmland. A group of farmland with a top left corner at (r1, c1) and a bottom right corner at (r2, c2) is represented by the 4-length array [r1, c1, r2, c2].
Return a 2D array containing the 4-length arrays described above for each group of farmland in land. If there are no groups of farmland, return an empty array. You may return the answer in any order.

Input: land = [[1,0,0],[0,1,1],[0,1,1]]
Output: [[0,0,0,0],[1,1,2,2]]
Explanation:
The first group has a top left corner at land[0][0] and a bottom right corner at land[0][0].
The second group has a top left corner at land[1][1] and a bottom right corner at land[2][2].
*/
//This is also done by DFS, O(mxn), TC : O(1), recursive O(m*n)
var findFarmland = function(land) {
  let result = [];
  let m = land.length;
  let n = land[0].length;
  for(let i=0; i<m; i++){
      for(let j=0; j<n; j++){
          if(land[i][j] === 1){
              let r1 = i;
              let c1 = j;
              let r2 = [0]; //array pass by reference
              let c2 = [0];
              dfs(land,i,j,r2,c2,m,n);
              result.push([r1,c1,r2,c2]);
          }
      }
  }
  return result;
};
function dfs(land,i,j,r2,c2,m,n){
  if(i<0 || i>=m || j<0 || j>=n || land[i][j] !== 1){
      return;
  }
  if(land[i][j] === 0) return;

  land[i][j] = 0;

  r2[0] = Math.max(r2[0],i);
  c2[0] = Math.max(c2[0],j);

  dfs(land,i+1,j,r2,c2,m,n);
  dfs(land,i-1,j,r2,c2,m,n);
  dfs(land,i,j-1,r2,c2,m,n);
  dfs(land,i,j+1,r2,c2,m,n);
}