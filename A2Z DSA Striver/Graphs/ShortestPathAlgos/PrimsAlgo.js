//use of MinHeap
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
class Solution {
  spanningTree(V, adj) {
    let pq = new PriorityQueue((a, b) => a[0] - b[0]);
    pq.push([0, 0]);
    let inMST = new Array(V).fill(false);
    let sum = 0;

    while (!pq.isEmpty()) {
      let [wt, node] = pq.pop();

      if (inMST[node]) continue;

      inMST[node] = true;
      sum += wt;

      for (let i = 0; i < adj[node].length; i++) {
        let neighbor = adj[node][i][0];
        let neighbor_wt = adj[node][i][1];

        if (!inMST[neighbor]) {
          pq.push([neighbor_wt, neighbor]);
        }
      }
    }

    return sum;
  }
}