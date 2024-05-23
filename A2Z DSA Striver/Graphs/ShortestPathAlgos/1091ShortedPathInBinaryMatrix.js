/* 1091 Shorted Path in Binary Matrix
Input: grid = [[0,1],[1,0]]
Output: 2
*/
//Method 1 - in this question we need to find the shortes distance
//and cell value is 1, so that we can apply BFS, TC: O(m*n), SC: O(m*n)
var shortestPathBinaryMatrix = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  if (m === 0 || n === 0 || grid[0][0] !== 0) {
    return -1;
  }
  let directions = [
    [1, 1],
    [1, 0],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [0, -1],
    [-1, 0],
  ];
  let queue = [];
  queue.push([0, 0]);
  grid[0][0] = 1;
  let steps = 1;
  while (queue.length > 0) {
    let len = queue.length;
    while (len--) {
      let [x, y] = queue.shift();
      //check if we reach at last cell
      if (x === m - 1 && y === n - 1) {
        return steps;
      }
      //move in directions
      for (let [dx, dy] of directions) {
        let newX = x + dx;
        let newY = y + dy;
        if (
          newX >= 0 &&
          newX < m &&
          newY >= 0 &&
          newY < n &&
          grid[newX][newY] === 0
        ) {
          queue.push([newX, newY]);
          grid[newX][newY] = 1;
        }
      }
    }
    steps++;
  }
  return -1;
};

//Method-2 use of Dijkstra's Algo use of MinHeap (Priority Queue)
//Use of Dijkstra's Algo
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
      let parentIndex = this.getParentIndex(idx);
      if (this.data[idx][0] < this.data[parentIndex][0]) {
        this.swap(idx, parentIndex);
        idx = parentIndex;
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
var shortestPathBinaryMatrix = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  if (m === 0 || n === 0 || grid[0][0] !== 0) {
    return -1;
  }
  let pq = new MinHeap();
  let result = Array(m)
    .fill(Number.MAX_VALUE)
    .map(() => Array(n).fill(Number.MAX_VALUE));
  pq.push([0, [0, 0]]);
  result[0][0] = 0;
  let direction = [
    [1, 1],
    [1, 0],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [-1, 0],
    [0, -1],
  ];
  while (!pq.isEmpty()) {
    let [d, [x, y]] = pq.poll();
    for (let [dx, dy] of direction) {
      let newX = dx + x;
      let newY = dy + y;
      let dist = 1;
      if (
        newX >= 0 &&
        newX < m &&
        newY >= 0 &&
        newY < n &&
        grid[newX][newY] === 0 &&
        d + dist < result[newX][newY]
      ) {
        pq.push([d + dist, [newX, newY]]);
        result[newX][newY] = d + dist;
        grid[newX][newY] = 1;
      }
    }
  }
  if (result[m - 1][n - 1] === Number.MAX_VALUE) {
    return -1;
  }
  return result[m - 1][n - 1] + 1;
};

//Method-3 Use of Simple Queue, in Dijkstra Algo , rather than Priority Queue (Min Heap)
//Method 3 just by simple queue
var shortestPathBinaryMatrix = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  if (m === 0 || n === 0 || grid[0][0] !== 0) {
    return -1;
  }
  let pq = [];
  let result = Array(m)
    .fill(Number.MAX_VALUE)
    .map(() => Array(n).fill(Number.MAX_VALUE));
  pq.push([0, [0, 0]]);
  result[0][0] = 0;
  let direction = [
    [1, 1],
    [1, 0],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [-1, 0],
    [0, -1],
  ];
  while (pq.length > 0) {
    let [d, [x, y]] = pq.shift();
    for (let [dx, dy] of direction) {
      let newX = dx + x;
      let newY = dy + y;
      let dist = 1;
      if (
        newX >= 0 &&
        newX < m &&
        newY >= 0 &&
        newY < n &&
        grid[newX][newY] === 0 &&
        d + dist < result[newX][newY]
      ) {
        pq.push([d + dist, [newX, newY]]);
        result[newX][newY] = d + dist;
        grid[newX][newY] = 1;
      }
    }
  }
  if (result[m - 1][n - 1] === Number.MAX_VALUE) {
    return -1;
  }
  return result[m - 1][n - 1] + 1;
};
