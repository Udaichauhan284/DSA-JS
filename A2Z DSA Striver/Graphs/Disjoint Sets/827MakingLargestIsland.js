/* 827. Making a largest island
Input: grid = [[1,0],[0,1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
*/
//DSU by Size
class DSU {
  constructor(n) {
    this.parent = Array(n).fill(0);
    this.size = Array(n).fill(1);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }
  find(x) {
    if (x !== this.parent[x]) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x, y) {
    let xParent = this.find(x);
    let yParent = this.find(y);
    if (xParent === yParent) {
      return;
    }
    if (this.size[xParent] < this.size[yParent]) {
      this.parent[xParent] = yParent;
      this.size[yParent] += this.size[xParent];
    } else if (this.size[xParent] > this.size[yParent]) {
      this.parent[yParent] = xParent;
      this.size[xParent] += this.size[yParent];
    } else {
      this.parent[yParent] = xParent;
      this.size[xParent] += this.size[yParent];
    }
  }
}
/* this is a matrix question , graph and need to find the largest
island, measn we need to connect the graph cell, so we can use DSU
steps 1. make the connecteion, connected component
step 2. covert 0 to 1, and need to find the ultimate paent and need to
set into Set DS and then we need to find the max rank from Set
step 3. now find max for when all the 1
TC: O(n^2)+O(n^2)+O(n^2) ~ O(n^2), SC: O(2*n^2), 2 for parent and rank
*/
var largestIsland = function (grid) {
  let n = grid.length;
  let dsu = new DSU(n * n);
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 0) continue;
      //move into 4 direction to see the 1, and form the componet
      let direction = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];
      for (let [dx, dy] of direction) {
        let adjR = row + dx;
        let adjC = col + dy;
        if (adjR >= 0 && adjR < n && adjC >= 0 && adjC < n) {
          if (grid[adjR][adjC] === 1) {
            //find the cell number
            let nodeNo = row * n + col;
            let adjNodeNo = adjR * n + adjC;
            dsu.union(nodeNo, adjNodeNo);
          }
        }
      }
    }
  }

  //step2, convert 0 to 1 and find the ulitmate parent for cell and find max
  let max = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1) continue;
      let directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];
      let component = new Set(); // for ultimate parent
      for (let [dx, dy] of directions) {
        let adjR = row + dx;
        let adjC = col + dy;
        if (adjR >= 0 && adjR < n && adjC >= 0 && adjC < n) {
          if (grid[adjR][adjC] === 1) {
            //add in set the ulitimate parent for that node
            let ultimateParent = adjR * n + adjC;
            component.add(dsu.find(ultimateParent));
          }
        }
      }
      //find the size
      let sizeTotal = 0;
      for (let parent of component) {
        sizeTotal += dsu.size[parent];
      }
      max = Math.max(max, sizeTotal + 1);
    }
  }

  //steps 3, find the max when grid will all 1
  for (let cellNo = 0; cellNo < n * n; cellNo++) {
    max = Math.max(max, dsu.size[dsu.find(cellNo)]);
  }
  return max;
};
