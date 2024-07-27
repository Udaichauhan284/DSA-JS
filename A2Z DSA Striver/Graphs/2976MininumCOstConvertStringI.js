/* 2976. Minimum Cost to Convert String I
27 July 2024, Leetcode POTD, String, Array, Graph, Shortest Distance

Input: source = "abcd", target = "acbe", original = ["a","b","c","c","e","d"], changed = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]
Output: 28
Explanation: To convert the string "abcd" to string "acbe":
- Change value at index 1 from 'b' to 'c' at a cost of 5.
- Change value at index 2 from 'c' to 'e' at a cost of 1.
- Change value at index 2 from 'e' to 'b' at a cost of 2.
- Change value at index 3 from 'd' to 'e' at a cost of 20.
The total cost incurred is 5 + 1 + 2 + 20 = 28.
It can be shown that this is the minimum possible cost.
*/

/*Method 1- in this ques, see we need to go from source to target, by changing some
node a->b->e, as here are multiple source we can move from orginal to changed.
this show can use Graph concept. Multiple Source -> can use FloydWarshall ALgo and
Dijkstra's Algo. In this method using Dijkstra algo
TC: O(n.(V+E)logE), SC: O(n^2)
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
          if (left < this.data.length && this.data[left][0] < this.data[smallest][0]) {
              smallest = left;
          }
          if (right < this.data.length && this.data[right][0] < this.data[smallest][0]) {
              smallest = right;
          }
          if (idx !== smallest) {
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

var minimumCost = function (source, target, original, changed, cost) {
  // Create adjacency list
  let adj = Array.from({ length: 26 }, () => []);

  // Fill adjacency list from original, changed, and cost
  for (let i = 0; i < original.length; i++) {
      let origIdx = String(original[i]).charCodeAt(0) - 'a'.charCodeAt(0);
      let changeIdx = String(changed[i]).charCodeAt(0) - 'a'.charCodeAt(0);
      adj[origIdx].push([cost[i], changeIdx]);
  }

  // Create cost matrix
  let costMatrix = Array.from({ length: 26 }, () => Array(26).fill(Number.MAX_VALUE));

  // Initialize costMatrix for direct transitions
  for (let i = 0; i < 26; i++) {
      costMatrix[i][i] = 0; // Cost to stay at the same node is 0
  }

  // Run Dijkstra's algorithm for each node
  for (let i = 0; i < 26; i++) {
      dijkstraAlgo(i, adj, costMatrix);
  }

  // Calculate minimum cost
  let ans = 0;
  for (let i = 0; i < source.length; i++) {
      let srcChar = source.charCodeAt(i) - 'a'.charCodeAt(0);
      let targetChar = target.charCodeAt(i) - 'a'.charCodeAt(0);
      if (srcChar !== targetChar) {
          if (costMatrix[srcChar][targetChar] === Number.MAX_VALUE) {
              return -1; // Cannot find min cost
          }
          ans += costMatrix[srcChar][targetChar];
      }
  }
  return ans;
};

// Dijkstra's algorithm
function dijkstraAlgo(source, adj, costMatrix) {
  let pq = new MinHeap();
  pq.push([0, source]); // cost, node

  let dist = Array(26).fill(Number.MAX_VALUE);
  dist[source] = 0;

  while (!pq.isEmpty()) {
      let [cost, node] = pq.poll();
      if (cost > dist[node]) continue;

      for (let [currCost, adjNode] of adj[node]) {
          let totalCost = cost + currCost;
          if (totalCost < dist[adjNode]) {
              dist[adjNode] = totalCost;
              pq.push([totalCost, adjNode]);
          }
      }
  }

  for (let i = 0; i < 26; i++) {
      costMatrix[source][i] = dist[i];
  }
}



/* Method 2- use of Floyd Warshal Algo
 TC: O(n) + O(n)
 SC: O(26)
 */
 var minimumCost = function(source, target, original, changed, cost) {
  let adj = Array.from({length: 26}, () => Array(26).fill(Number.MAX_VALUE));

   // Initialize self-transition costs to 0
  for (let i = 0; i < 26; i++) {
      adj[i][i] = 0;
  }
  //call floydwarshall algo, for filling the adj 2d matrix
  floydWarshallAlgo(adj, original, changed, cost);

  //main code for finding the ans
  let ans = 0;
  for(let i=0; i<source.length; i++){
      let srcChar = source.charCodeAt(i)-'a'.charCodeAt(0);
      let trgChar = target.charCodeAt(i)-'a'.charCodeAt(0);
      if(srcChar === trgChar){
          continue;
      }
      if(adj[srcChar][trgChar] === Number.MAX_VALUE){
          return -1;
      }
      
      ans += adj[srcChar][trgChar];
  }
  return ans;
};
function floydWarshallAlgo(adj, original, changed, cost){
  for(let i=0; i<original.length; i++){
      let source = String(original[i]).charCodeAt(0) - 'a'.charCodeAt(0);
      let target = String(changed[i]).charCodeAt(0) - 'a'.charCodeAt(0);

      adj[source][target] = Math.min(adj[source][target], cost[i]);
  }

  //floydWarshall Algo
  for(let via=0; via<26; via++){
      for(let i=0; i<26; i++){
          for(let j=0; j<26; j++){
              if(adj[i][via] === Number.MAX_VALUE || adj[via][j] === Number.MAX_VALUE){
                  continue;
              }

              adj[i][j] = Math.min(adj[i][j], adj[i][via]+adj[via][j]);
          }
      }
  }
}