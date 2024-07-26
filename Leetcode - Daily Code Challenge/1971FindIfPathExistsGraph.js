/* 1971. Find if path exists in graph
Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2
*/
//use dfs, and take a map for storing the vertices and edges
// TC : O(n+m), SC : O(1)
var validPath = function (n, edges, source, destination) {
  if (source === destination) return true;

  let map = new Map();
  for (let edge of edges) {
      let u = edge[0];
      let v = edge[1];

      if (!map.has(u)) {
          map.set(u, []);
      }
      if (!map.has(v)) {
          map.set(v, []);
      }
      map.get(u).push(v);
      map.get(v).push(u);
  }
  let visited = Array(n).fill(false);
  return check(map, source, destination, visited);
};
function check(map, node, des, visited) {
  if (node === des) return true;

  if (visited[node]) return false;

  visited[node] = true;
  for (let it of map.get(node)) {
      if (check(map, it, des, visited))
          return true;
  }
  return false;
}