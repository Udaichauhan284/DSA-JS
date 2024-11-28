/* 2290. Minimum Obstacle Removal to Reach Corner
28 Nov 2024, Leetcode POTD, Matrix, Array, Dijkstra, Shortest Path, Graphs

Input: grid = [[0,1,1],[1,1,0],[1,1,0]]
Output: 2
Explanation: We can remove the obstacles at (0, 1) and (0, 2) to create a path from (0, 0) to (2, 2).
It can be shown that we need to remove at least 2 obstacles, so we return 2.
Note that there may be other ways to remove 2 obstacles to create a path.
*/
/*In this we need to go from source to destination
so we can use Dijkstra ALgo in that we can assume
cell as node [i][j] and wt as 1 or 0.
TC: O(m*nlog(m*n)), SC: O(n*m)
*/
const minimumObstacles = (grid) => {
  let m = grid.length;
  let n = grid[0].length;
  let result = Array.from({length: m}, () => Array(n).fill(Number.MAX_VALUE));
  //for source to source distance
  result[0][0] = 0;
  let minHeap = new MinHeap();
  minHeap.push([0,[0,0]]); //dist, [i,j]

  let directions = [[1,0],[-1,0],[0,1],[0,-1]];
  while(!minHeap.isEmpty()){
    let [dist,[i,j]] = minHeap.poll();
    for(let [x,y] of directions){
      let newX = x+i;
      let newY = y+j;

      if(newX < 0 || newX >=m || newY < 0 || newY >= n){
        continue;
      }
      let wt = grid[newX][newY] === 0 ? 1: 0;
      if(dist+wt < result[newX][newY]){
        result[newX][newY] = dist+wt;
        minHeap.push(dist+wt, [newX,newY]);
      }
    }
  }
  return result[m-1][n-1];
}

class MinHeap {
  constructor() {
      this.data = [];
  }
  getParentIndex(idx) {
      return Math.floor((idx - 1) / 2);
  }
  getLeftChildIndex(idx) {
      return idx * 2 + 1;
  }
  getRightChildIndex(idx) {
      return idx * 2 + 2;
  }
  swap(i1, i2) {
      [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
  }
  push(pair) {
      this.data.push(pair);
      this.heapifyUp();
  }
  heapifyUp() {
      let idx = this.data.length - 1;
      while (idx > 0) {
          let parent = this.getParentIndex(idx);
          if (this.data[idx][0] < this.data[parent][0]) {
              this.swap(idx, parent);
              idx = parent;
          } else {
              break;
          }
      }
  }
  poll() {
      if (this.data.length === 0) return null;
      if (this.data.length === 1) return this.data.pop();
      let minValue = this.data[0];
      this.data[0] = this.data.pop();
      this.heapifyDown(0);
      return minValue;
  }
  heapifyDown(idx) {
      while (true) {
          let smallest = idx;
          let left = this.getLeftChildIndex(idx);
          let right = this.getRightChildIndex(idx);

          if (left < this.data.length && this.data[left][0] < this.data[smallest][0]) {
              smallest = left;
          }

          if (right < this.data.length && this.data[right][0] < this.data[smallest][0]) {
              smallest = right;
          }

          if (smallest !== idx) {
              this.swap(idx, smallest);
              idx = smallest;
          } else {
              break;
          }
      }
  }
  isEmpty(){
      return this.data.length === 0;
  }
}