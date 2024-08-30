/* 2699 Modify Graph Edge Weights
30 August 2024, Leetcode POTD, HARD -> Graph, Heap, Shortest Path(Dijkstra Algo) as in question Undirected Weighted graph.

Input: n = 5, edges = [[4,1,-1],[2,0,-1],[0,3,-1],[4,3,-1]], source = 0, destination = 1, target = 5
Output: [[4,1,1],[2,0,1],[0,3,3],[4,3,1]]
Explanation: The graph above shows a possible modification to the edges, making the distance from 0 to 1 equal to 5.
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
/*Method 1- use of Dijkstra ALgo, know the Shortest path excluding the -ve, thta will give 3 case
Sp===taregt, in this we get the ans, and chnage the -ve edge to larger value and return ans
sp<target, if +ve edges givin ans less than target, so even after change the -ve edge not give ans
sp>target, one by one change -ve to +ve and call DJ again for knowing the ans
TC: O(E * ElogV) ~ O(E^2logV), SC: O(V+E)
*/
var modifiedGraphEdges = function (n, edges, source, destination, target) {
  const largeValue = 2e9;

  //calling for getting the shortes path now one
  let currShortestPath = dijAlgo(n, edges, source, destination);

  //case one SP < target
  if (currShortestPath < target) {
      return []; //not possible for getting the ans
  }
  //case two Sp === target, this part can we dont into step 3 for loop
  let matched = (currShortestPath === target); //true or false, this will tell the ans
  if (matched === true) {
      //find the negtive edge and change to big number
      for (let edge of edges) {
          if (edge[2] === -1) {
              edge[2] = largeValue;
          }
      }
      //in above for loop, i have change the ve to large value, now return the ans
      return edges;
  }

  //case 3
  for (let edge of edges) {
      if (edge[2] === -1) {
          edge[2] = (matched === true) ? largeValue : 1;

          if (matched !== true) {
              //measn we dont ans till now, so now find the new Dij ALgo and change the wt
              let newShortestPath = dijAlgo(n, edges, source, destination);
              if (newShortestPath <= target) {
                  matched = true;
                  edge[2] += (target - newShortestPath);
              }
          }
      }
  }
  if (matched === false) {
      return [];
  }
  return edges;
};
function dijAlgo(n, edges, s, d) {
  let adj = Array.from({ length: n }, () => []);

  for (let [u, v, wt] of edges) {
      if (wt !== -1) {
          //exclude -ve edges
          adj[u].push([v, wt]);
          adj[v].push([u, wt]);
      }
  }

  let visited = Array(n).fill(false);
  let result = Array(n).fill(Number.MAX_VALUE);
  let pq = new MinHeap();
  result[s] = 0;
  pq.push([0, s]); //wt, node

  while (!pq.isEmpty()) {
      let [currWt, currNode] = pq.poll();
      if(visited[currNode] === true) continue;
      //mark that visited 
      visited[currNode] = true;
      for (let [adjNode, adjWt] of adj[currNode]) {
          let newWt = adjWt + currWt;
          if (result[adjNode] > newWt) {
              result[adjNode] = newWt;
              pq.push([newWt, adjNode]);
          }
      }
  }
  return result[d];
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
/*Method 1- use of Dijkstra ALgo, know the Shortest path excluding the -ve, thta will give 3 case
Sp===taregt, in this we get the ans, and chnage the -ve edge to larger value and return ans
sp<target, if +ve edges givin ans less than target, so even after change the -ve edge not give ans
sp>target, one by one change -ve to +ve and call DJ again for knowing the ans
TC: O(E * ElogV) ~ O(E^2logV), SC: O(V+E)
*/
var modifiedGraphEdges = function (n, edges, source, destination, target) {
  const largeValue = 2e9;

  //calling for getting the shortes path now one
  let currShortestPath = dijAlgo(n, edges, source, destination);

  //case one SP < target
  if (currShortestPath < target) {
      return []; //not possible for getting the ans
  }
  let matched = (currShortestPath === target); //true or false,
  //case two Sp === target, this part can we dont into step 3 for loop
  // if (matched === true) {
  //     //find the negtive edge and change to big number
  //     for (let edge of edges) {
  //         if (edge[2] === -1) {
  //             edge[2] = largeValue;
  //         }
  //     }
  //     //in above for loop, i have change the ve to large value, now return the ans
  //     return edges;
  // }

  //case 3
  for (let edge of edges) {
      if (edge[2] === -1) {
          edge[2] = (matched === true) ? largeValue : 1;

          if (matched !== true) {
              //measn we dont ans till now, so now find the new Dij ALgo and change the wt
              let newShortestPath = dijAlgo(n, edges, source, destination);
              if (newShortestPath <= target) {
                  matched = true;
                  edge[2] += (target - newShortestPath);
              }
          }
      }
  }
  if (matched === false) {
      return [];
  }
  return edges;
};
function dijAlgo(n, edges, s, d) {
  let adj = Array.from({ length: n }, () => []);

  for (let [u, v, wt] of edges) {
      if (wt !== -1) {
          //exclude -ve edges
          adj[u].push([v, wt]);
          adj[v].push([u, wt]);
      }
  }

  let visited = Array(n).fill(false);
  let result = Array(n).fill(Number.MAX_VALUE);
  let pq = new MinHeap();
  result[s] = 0;
  pq.push([0, s]); //wt, node

  while (!pq.isEmpty()) {
      let [currWt, currNode] = pq.poll();
      if(visited[currNode] === true) continue;
      //mark that visited 
      visited[currNode] = true;
      for (let [adjNode, adjWt] of adj[currNode]) {
          let newWt = adjWt + currWt;
          if (result[adjNode] > newWt) {
              result[adjNode] = newWt;
              pq.push([newWt, adjNode]);
          }
      }
  }
  return result[d];
}