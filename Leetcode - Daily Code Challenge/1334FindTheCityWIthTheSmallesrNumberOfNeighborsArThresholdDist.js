/* 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance

-> This question i have done in Graph section -> sortest distance section
-> 26 July 2024, For LEETCODE POTD, so putting this in leetcode coding section
for partice.

Input: n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4
Output: 3
Explanation: The figure above describes the graph. 
The neighboring cities at a distanceThreshold = 4 for each city are:
City 0 -> [City 1, City 2] 
City 1 -> [City 0, City 2, City 3] 
City 2 -> [City 0, City 1, City 3] 
City 3 -> [City 1, City 2] 
Cities 0 and 3 have 2 neighboring cities at a distanceThreshold = 4, but we have to return city 3 since it has the greatest number.
*/


/* 26 July LC POTD
Method 1 - use of Dijkstra Algo, as this question is of Multisouce
point, but can be solve using Dij Algo, use of MinHeap
Dijkstra Algo TC: O(V + ElogE), so overavll O(V.(V+ElogE)) ~ O(n.(n+ElogE))
SC: O(n^2 + n + e)
*/
class MinHeap{
  constructor(){
    this.data = [];
  }
  getParentIndex(idx){
    return Math.floor((idx-1)/2);
  }
  getLeftChildIndex(idx){
    return 2 * idx + 1;
  }
  getRightChildIndex(idx){
    return 2 * idx + 2;
  }
  swap(i1, i2){
    [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
  }
  push(pair){
    this.data.push(pair);
    this.heapifyUp();
  }
  heapifyUp(){
    let idx = this.data.length - 1;
    while(idx > 0){
      let parenIndex = this.getParentIndex(idx);
      if(this.data[idx][0] < this.data[parenIndex][0]){
        this.swap(idx, parenIndex);
        idx = parenIndex;
      }else{
        break;
      }
    }
  }
  poll(){
    if(this.data.length === 0) return null;
    if(this.data.length === 1) return this.data.pop();
    let minValue = this.data[0];
    this.data[0] = this.data.pop();
    this.heapifyDown(0);
    return minValue;
  }
  heapifyDown(idx){
    while(true){
      let smallest = idx;
      let left = this.getLeftChildIndex(idx);
      let right = this.getRightChildIndex(idx);
      if(left < this.data.length && this.data[left][0] < this.data[smallest][0]){
        smallest = left;
      }
      if(right < this.data.length && this.data[right][0] < this.data[samllest][0]){
        smallest = right;
      }
      if(smallest !== idx){
        this.swap(idx, smallest);
        idx = smallest;
      }else{
        break;
      }
    }
  }
  isEmpty(){
    return this.data.length === 0;
  }
}
const findTheCity1 = (n, edges, distanceThreshold) => {
  //for dij algo we need adj graph
  let adj = Array.from({length : n}, () => []);
  for(let [u,v,wt] of edges){
    adj[u].push([v,wt]);
    adj[v].push([u,wt]);
  }

  //main code
  let minReachableCities = n;
  let resultCity = -1;
  for(let i=0; i<n; i++){
    //here dij algo start
    let dist = Array(n).fill(Number.MAX_VALUE);
    dist[i] = 0;
    let pq = new MinHeap();
    pq.push([0,i]); //dist, source node

    while(!pq.isEmpty()){
      let [currDist, node] = pq.poll();
      if(currDist > dist[node]) continue;

      for(let [nextNode, wt] of adj[node]){
        let nextDist = currDist + wt;
        if(nextDist < dist[nextNode]){
          dist[nextNode] = nextDist;
          pq.push([nextDist, nextNode]);
        }
      }
    }

    let reachableCity = 0;
    for(let city=0; city<n; city++){
      if(dist[city] <= distanceThreshold){
        reachableCity++;
      }
    }
    if(reachableCity <= minReachableCities){
      minReachableCities = reachableCity;
      resultCity = i;
    }
  }
  return resultCity;
}


/*26 July LC POTD
Method 2 - this is multisource node question, need to find city from multiple node, 
so for this we can use Floy Warshall Algo, build the dist 2d matrix, fill it
and then find the city.
TC: O(n)+O(n^2)+O(n^2) ~ O(n^2)
SC: O(n^2)
*/
var findTheCity = function(n, edges, distanceThreshold) {
  let dist = Array.from({length: n}, () => Array(n).fill(Number.MAX_VALUE));
  //now fill the dist from using edges
  for(let [u,v,wt] of edges){
      dist[u][v] = wt;
      dist[v][u] = wt;
  }

  //now fill the disr, first for distance from itself
  for(let i=0; i<n; i++) dist[i][i] = 0;

  //now fill the dist, use of FloyWarshall Algo, using via method
  for(let via=0; via<n; via++){
      for(let i=0; i<n; i++){
          for(let j=0; j<n; j++){
              //first condition if dist[i][j] is max, no need to proced as we need min
              if(dist[i][via] === Number.MAX_VALUE || dist[via][j] === Number.MAX_VALUE){
                  continue;
              }

              dist[i][j] = Math.min(dist[i][j] , dist[i][via] + dist[via][j]);
          }
      }
  }

  //now find the city
  let minReachableCities = n;
  let resultCity = -1;
  for(let city=0; city<n; city++){
      let cnt = 0;
      for(let adjCity=0; adjCity < n; adjCity++){
          if(dist[city][adjCity] <= distanceThreshold){
              cnt++;
          }
      }
      if(cnt <= minReachableCities){
          minReachableCities = cnt;
          resultCity = city;
      }
  }
  return resultCity;
};