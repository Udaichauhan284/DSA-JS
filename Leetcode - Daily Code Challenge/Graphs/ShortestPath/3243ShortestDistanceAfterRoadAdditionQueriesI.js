/* 3243. Shortest Distance After Road Addition Queries I
27 Nov 2024, Leetcode POTD, Array, BFS, Graph

Input: n = 5, queries = [[2,4],[0,2],[0,4]]

Output: [3,2,1]
*/
/*Method1-use of BFS, we first create adjList and then for
every query we need to hit the BFS, so that we can get the
shortest path and that ans we put in the result array
TC: O(Q * (V+E)), SC: O(v+e)+O(n) for adjList, for visted
*/
const shortestDistanceAfterQueries = (n,queries) => {
  let adj = new Map();
  for(let i=0; i<n-1; i++){
    if(!adj.has(i)){
      adj.set(i, []);
    }
    adj.get(i).push(i+1);
  }
  let result = [];
  //npw traverse over the queries to find the shortest dist
  for(let [u,v] of queries){
    if(!adj.has(u)){
      adj.set(u, []);
    }
    adj.get(u).push(v);

    let shortestDis = bfs(n,adj);
    result.push(shortestDis);
  }
  return result;
}
function bfs(n,adj){
  let que = [];
  let visited = Array(n).fill(false);
  que.push(0);
  visited[0] = true;
  let level = 0;
  while(que.length > 0){
    let len = que.length;
    while(len--){
      let node = que.shift();
      if(node === n-1){
        return level;
      }
      for(let ngr of adj.get(node)){
        if(!visited[ngr]){
          que.push(ngr);
          visited[ngr]=true;
        }
      }
    }
    level++;
  }
  return -1;
}


/*Method2-use of Dijkstra Algo
TC: O(Q * (ElogV)), SC: O(v+e)
*/
var shortestDistanceAfterQueries1 = function(n, queries) {
  let adj = new Map();
  for(let i=0; i<n-1; i++){
      if(!adj.has(i)){
          adj.set(i, []);
      }
      adj.get(i).push([i+1,1]); //i->i+1 and its weight
  }
  let result = [];
  for (let [u, v] of queries) {
      // Add edge dynamically
      if (!adj.has(u)) adj.set(u, []);
      adj.get(u).push([v, 1]);

      // Find shortest distance from 0 to n-1 using Dijkstra
      let shortestDist = dijkstra(n, adj);
      result.push(shortestDist);
  }
  return result;
};
function dijkstra(n,adj){
  //in this we take result with max value and 
  //priority queue(minheap), return result[n-1];
  let dist = Array(n).fill(Number.MAX_VALUE);
  let minHeap = new MinHeap();

  dist[0] = 0; // Start node distance
  minHeap.push([0, 0]); // [distance, node]

  while (!minHeap.isEmpty()) {
      let [currDist, currNode] = minHeap.poll();

      if (currNode === n - 1) {
          return currDist; // Return shortest distance to node n-1
      }

      if (!adj.has(currNode)) continue;

      for (let [neighbor, weight] of adj.get(currNode)) {
          let newDist = currDist + weight;
          if (newDist < dist[neighbor]) {
              dist[neighbor] = newDist;
              minHeap.push([newDist, neighbor]);
          }
      }
  }

  return -1; // If n-1 is not reachable
}
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
          let left = this.getLeftChildIndex(idx);
          let right = this.getRightChildIndex(idx);
          let smallest = idx;

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

  isEmpty() {
      return this.data.length === 0;
  }
}