/* 743. Network Delay Time
Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2

Use of Priority Queue (MinHeap) and Dijsktra ALgo
*/
class MinHeap {
  constructor() {
    this.data = [];
  }

  getParentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftChildIndex(idx) {
    return 2 * idx + 1;
  }

  getRightChildIndex(idx) {
    return 2 * idx + 2;
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
      let parentIdx = this.getParentIndex(idx);
      if (this.data[idx][0] < this.data[parentIdx][0]) {
        this.swap(idx, parentIdx);
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  poll() {
    if (this.data.length === 0) return null;
    if (this.data.length === 1) return this.data.pop();
    const minValue = this.data[0];
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

  peek() {
    return this.data[0];
  }
}

var networkDelayTime = function (times, n, k) {
  const adj = new Map();
  for (let [u, v, t] of times) {
    if (!adj.has(u)) adj.set(u, []);
    adj.get(u).push([v, t]);
  }

  const pq = new MinHeap();
  const result = Array(n + 1).fill(Infinity);
  result[k] = 0;
  pq.push([0, k]);

  while (pq.data.length > 0) {
    const [d, node] = pq.poll();
    if (!adj.has(node)) continue;
    for (let [adjNode, time] of adj.get(node)) {
      if (d + time < result[adjNode]) {
        result[adjNode] = d + time;
        pq.push([d + time, adjNode]);
      }
    }
  }

  let maxDist = 0;
  for (let i = 1; i <= n; i++) {
    if (result[i] === Infinity) return -1;
    maxDist = Math.max(maxDist, result[i]);
  }
  return maxDist;
};
