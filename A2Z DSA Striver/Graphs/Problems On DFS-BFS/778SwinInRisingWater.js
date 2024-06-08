/* 778. Swin in Rising Water
Input: grid = [[0,2],[1,3]]
Output: 3
Explanation:
At time 0, you are in grid location (0, 0).
You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.
You cannot reach point (1, 1) until time 3.
When the depth of water is 3, we can swim anywhere inside the grid.
*/
/* As we need least time, so we can use Dijkstra Algo here.
this is same like Dijkstra Algo in Matrix.
TC: O(n^2logn), SC: O(n^2)
*/
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
    let temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
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
      if (
        left < this.data.length &&
        this.data[left][0] < this.data[smallest][0]
      ) {
        smallest = left;
      }
      if (
        right < this.data.length &&
        this.data[right][0] < this.data[smallest][0]
      ) {
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
  isEmpty() {
    return this.data.length === 0;
  }
}
var swimInWater = function (grid) {
  let n = grid.length;
  let visited = Array(n)
    .fill(false)
    .map(() => Array(n).fill(false));
  let pq = new MinHeap();
  pq.push([grid[0][0], 0, 0]); //time, row, col
  visited[0][0] = true; //mark first one visited;
  while (!pq.isEmpty()) {
    let [t, row, col] = pq.poll();
    if (row === n - 1 && col === n - 1) {
      return t;
    }
    let directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (let [dx, dy] of directions) {
      let newR = dx + row;
      let newC = dy + col;
      if (
        newR >= 0 &&
        newR < n &&
        newC >= 0 &&
        newC < n &&
        !visited[newR][newC]
      ) {
        visited[newR][newC] = true;
        //in MinHeap Priority Queue, we push a Max value of time
        pq.push([Math.max(t, grid[newR][newC]), newR, newC]);
      }
    }
  }
};
