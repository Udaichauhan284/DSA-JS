/* 1631. Path With Minimum Effort

*/
/* in ques given, source, destination and absDiff of cell
 so we can use Dijkstra Algo, use of Priority Queue(Min Heap)
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
    this.data.length === 0;
  }
}
var minimumEffortPath = function (heights) {
  let m = heights.length;
  let n = heights[0].length;
  let result = Array(m)
    .fill(Number.MAX_VALUE)
    .map(() => Array(n).fill(Number.MAX_VALUE));
  let pq = new MinHeap();
  result[0][0] = 0;
  pq.push([0, [0, 0]]);
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (!pq.isEmpty()) {
    let [diff, [x, y]] = pq.poll();
    if (x === m - 1 && y === n - 1) {
      return diff;
    }
    for (let [dx, dy] of directions) {
      let newX = dx + x;
      let newY = dy + y;
      if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
        let absDiff = Math.abs(heights[x][y] - heights[newX][newY]);
        let maxDiff = Math.max(diff, absDiff);
        if (result[newX][newY] > maxDiff) {
          result[newX][newY] = maxDiff;
          pq.push([maxDiff, [newX, newY]]);
        }
      }
    }
  }
  return result[m - 1][n - 1];
};
