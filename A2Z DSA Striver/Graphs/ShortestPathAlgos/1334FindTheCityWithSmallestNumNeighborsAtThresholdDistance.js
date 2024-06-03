/* 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance
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
/* This is multi source question , we need to start from every city and 
find the min numof neighbour city
Use Flyod Warshall Algo TC: O(n)+O(n^2)+O(n^2), SC: O(n^2)
*/
var findTheCity = function (n, edges, distanceThreshold) {
  //first create a matrix
  let dist = Array(n)
    .fill(Number.MAX_VALUE)
    .map(() => Array(n).fill(Number.MAX_VALUE));
  //fill the diganol [i][i] = 0;
  for (let i = 0; i < n; i++) dist[i][i] = 0;
  //fill the dist matrix
  for (let [u, v, wt] of edges) {
    dist[u][v] = wt;
    dist[v][u] = wt;
  }

  //implement FLouy Warshal Algo
  for (let via = 0; via < n; via++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (
          dist[i][via] === Number.MAX_VALUE ||
          dist[via][j] === Number.MAX_VALUE
        ) {
          continue;
        }
        dist[i][j] = Math.min(dist[i][j], dist[i][via] + dist[via][j]);
      }
    }
  }

  //logic for city finding
  let cntCity = n;
  let cityNo = -1;
  for (let city = 0; city < n; city++) {
    let cnt = 0;
    for (let adjCity = 0; adjCity < n; adjCity++) {
      if (dist[city][adjCity] <= distanceThreshold) {
        cnt++;
      }
    }
    if (cnt <= cntCity) {
      cntCity = cnt;
      cityNo = city;
    }
  }
  return cityNo;
};


/* Method 2- use of Dijkstra's Algo, in this we need to go for every city, use 
DA method in for i loop
it will take a time,
so for this question - multi source - floyd waeshall algo is good.
*/
var findTheCity = function(n, edges, distanceThreshold) {
  let adj = Array(n).fill(0).map(() => []);

  // Fill the adjacency list
  for (let [u, v, cost] of edges) {
      adj[u].push([v, cost]);
      adj[v].push([u, cost]);
  }

  let minReachableCities = n;
  let resultCity = -1;

  for (let i = 0; i < n; i++) {
      let dist = Array(n).fill(Number.MAX_VALUE);
      dist[i] = 0;
      let pq = new MinHeap();
      pq.push([0, i]); // [cost, city]

      while (!pq.isEmpty()) {
          let [cost, node] = pq.poll();
          if (cost > dist[node]) continue;

          for (let [neighbor, weight] of adj[node]) {
              let newDist = cost + weight;
              if (newDist < dist[neighbor]) {
                  dist[neighbor] = newDist;
                  pq.push([newDist, neighbor]);
              }
          }
      }

      let reachableCities = 0;
      for (let j = 0; j < n; j++) {
          if (dist[j] <= distanceThreshold) {
              reachableCities++;
          }
      }

      if (reachableCities <= minReachableCities) {
          minReachableCities = reachableCities;
          resultCity = i;
      }
  }

  return resultCity;
};