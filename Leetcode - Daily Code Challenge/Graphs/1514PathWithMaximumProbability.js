/* 1514 Path with Maximum Probanility
27 August 2024, Leetcode POTD, Graph, Dijkstra's Algo -> Medium

Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
Output: 0.25000
Explanation: There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 * 0.5 = 0.25.

*/

/*In this we need to find maxi succProb, we given start and end point
and also Undirected Weighted graph, so we can use Dijkstra's Algo
TC: O(ElogV) e is edges and v is vertex, SC: O(n) for maxHeap
*/
class MaxHeap {
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
          let parentIndex = this.getParentIndex(idx);
          if (this.data[idx][0] > this.data[parentIndex][0]) {
              this.swap(idx, parentIndex);
              idx = parentIndex;
          } else {
              break;
          }
      }
  }
  poll() {
      if (this.data.length === 0) return 0;
      if (this.data.length === 1) return this.data.pop();
      let maxValue = this.data[0];
      this.data[0] = this.data.pop();
      this.heapifyDown(0);
      return maxValue;
  }
  heapifyDown(idx) {
      while (true) {
          let largest = idx;
          let left = this.getLeftChildIndex(idx);
          let right = this.getRightChildIndex(idx);
          if (left < this.data.length && this.data[left][0] > this.data[largest][0]) {
              largest = left;
          }
          if (right < this.data.length && this.data[right][0] > this.data[largest][0]) {
              largest = right;
          }
          if (largest !== idx) {
              this.swap(idx, largest);
              idx = largest;
          } else {
              break;
          }
      }
  }
  isEmpty() {
      return this.data.length === 0;
  }
}
var maxProbability = function (n, edges, succProb, start_node, end_node) {
  //build the adj
  let adj = Array.from({ length: n }, () => []);
  for (let i = 0; i < edges.length; i++) {
      let u = edges[i][0];
      let v = edges[i][1];

      adj[u].push([v, succProb[i]]);
      adj[v].push([u, succProb[i]]);
  }
  let maxHeap = new MaxHeap();
  let result = Array(n).fill(0);
  //for start to start result[start] = succProb is 1;
  result[start_node] = 1;
  maxHeap.push([1, start_node]); // prob, node

  while (!maxHeap.isEmpty()) {
      let [prob, node] = maxHeap.poll();
      for (let [adjNode, adjProb] of adj[node]) {
          let currProb = adjProb * prob;
          if (result[adjNode] < currProb) {
              result[adjNode] = currProb;
              maxHeap.push([currProb, adjNode]);
          }
      }
  }
  return result[end_node];
};