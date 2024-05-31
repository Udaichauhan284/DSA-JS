/* 1584. Min Cost to Connect All Points
 */
//By Prim Algo
/* Form the adjList and then pass this adj to minMst
and apply Prim's Algo.
TC: adj lsit O(V^2) ~ O(V^2logV), SC: O(V^2)
*/
var minCostConnectPoints = function (points) {
  let V = points.length;
  //form adj list
  let adj = Array(V)
    .fill(0)
    .map(() => []);

  for (let i = 0; i < V; i++) {
    for (let j = i + 1; j < V; j++) {
      let x1 = points[i][0];
      let y1 = points[i][1];
      let x2 = points[j][0];
      let y2 = points[j][1];

      let dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
      adj[i].push([j, dist]);
      adj[j].push([i, dist]);
    }
  }
  return minMST(adj, V);
};
function minMST(adj, V) {
  let pq = new MinHeap();
  pq.push([0, 0]); //wt,node;
  let isMST = Array(V).fill(false);
  let sum = 0;
  while (!pq.isEmpty()) {
    let [wt, node] = pq.poll();
    if (isMST[node] === true) {
      continue;
    }
    isMST[node] = true;
    sum += wt;
    for (let [nextNode, nextWt] of adj[node]) {
      if (isMST[nextNode] === false) {
        //push into queue
        pq.push([nextWt, nextNode]);
      }
    }
  }
  return sum;
}
//minHeap
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

/* By Kruskal's Algo
create a vec, sort it by weight and apply Kruskal(DSU)
TC: O(V^2logV), SC: O(V^2)
*/
//DSU, which use by Kruskal Algo
class DSU {
  constructor(n) {
    this.parent = Array(n).fill(0);
    this.rank = Array(n).fill(0);
    //fill the parent array
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
    if (this.rank[xParent] < this.rank[yParent]) {
      this.parent[xParent] = yParent;
    } else if (this.rank[xParent] > this.rank[yParent]) {
      this.parent[yParent] = xParent;
    } else {
      this.parent[yParent] = xParent;
      this.rank[xParent]++;
    }
  }
}
var minCostConnectPoints = function (points) {
  //form the adj list
  let V = points.length;
  let adj = Array(V)
    .fill(0)
    .map(() => []);
  for (let i = 0; i < V; i++) {
    for (let j = i + 1; j < V; j++) {
      let x1 = points[i][0];
      let y1 = points[i][1];
      let x2 = points[j][0];
      let y2 = points[j][1];

      let dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);

      adj.push([i, j, dist]);
    }
  }
  //sort that adj list by weight
  adj.sort((a, b) => a[2] - b[2]);
  return kruskalAlgo(adj);
};
//now apply alog
function kruskalAlgo(adj) {
  let n = adj.length;
  let dsu = new DSU(n);
  let sum = 0;
  for (let [u, v, w] of adj) {
    if (dsu.find(u) !== dsu.find(v)) {
      dsu.union(u, v);
      sum += w;
    }
  }
  return sum;
}
