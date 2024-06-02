/* 787. Cheapest Flights Within K Stops
Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
Output: 700
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.
*/
/* Need to Find cheapeast price
we can use BFS, in this we need to visit node, muliple time
according to steps
TC: O(E)+O(E*n) SC: O(n+m) m is adj and n for graph
*/
var findCheapestPrice = function (n, flights, src, dst, k) {
  let adj = Array(n)
    .fill(0)
    .map(() => []);
  for (let [u, v, cost] of flights) {
    adj[u].push([v, cost]);
  }
  //bfs
  let queue = [];
  let dist = Array(n).fill(Number.MAX_VALUE);
  //in queue push node and distance
  queue.push([src, 0]);
  dist[src] = 0;
  let steps = 0;
  while (queue.length > 0 && steps <= k) {
    let N = queue.length;
    while (N--) {
      //BFS for each level.
      let [u, d] = queue.shift();
      for (let [v, cost] of adj[u]) {
        if (d + cost < dist[v]) {
          dist[v] = d + cost;
          queue.push([v, d + cost]);
        }
      }
    }

    steps++;
  }
  return dist[dst] === Number.MAX_VALUE ? -1 : dist[dst];
};
