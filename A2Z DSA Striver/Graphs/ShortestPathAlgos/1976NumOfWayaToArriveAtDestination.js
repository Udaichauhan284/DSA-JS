/* 1976. Number of Ways to Arrive at Destination
Input: n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
Output: 4
Explanation: The shortest amount of time it takes to go from intersection 0 to intersection 6 is 7 minutes.
The four ways to get there in 7 minutes are:
- 0 ➝ 6
- 0 ➝ 4 ➝ 6
- 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
- 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6
*/
//Prioritty Queue - Min Heap
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
/* Use of Dijkstra Algo, just tale a ways array for storing 
the number of wasy, we reach at that node, change with previous node.
TC:O(ElogV), SC: O(n)
*/
var countPaths = function (n, roads) {
  let adj = Array(n)
    .fill(0)
    .map(() => []);
  //fill the adj
  for (let [u, v, time] of roads) {
    //this is undirected graph
    adj[u].push([v, time]);
    adj[v].push([u, time]);
  }
  let dist = Array(n).fill(Number.MAX_VALUE);
  let ways = Array(n).fill(0);
  let pq = new MinHeap();
  pq.push([0, 0]); //dist, node
  dist[0] = 0;
  ways[0] = 1;
  let mod = 1000000007;
  while (!pq.isEmpty()) {
    let [d, node] = pq.poll();
    for (let [v, time] of adj[node]) {
      if (d + time < dist[v]) {
        dist[v] = d + time;
        pq.push([d + time, v]);
        ways[v] = ways[node];
      }
      // If we again encounter a node with the same short distance
      // as before, we simply increment the no. of ways.
      else if (d + time === dist[v]) {
        ways[v] = (ways[v] + ways[node]) % mod;
      }
    }
  }
  return ways[n - 1] % mod;
};
