class Solution {
  bellmanFord(V, edges, S) {
    let result = new Array(V).fill(1e8);
    result[S] = 0;

    for (let c = 1; c <= V - 1; c++) {
      for (let edge of edges) {
        let u = edge[0];
        let v = edge[1];
        let w = edge[2];

        if (result[u] !== 1e8 && result[u] + w < result[v]) {
          result[v] = result[u] + w;
        }
      }
    }

    // Now detect negative cycle
    for (let edge of edges) {
      let u = edge[0];
      let v = edge[1];
      let w = edge[2];

      if (result[u] !== 1e8 && result[u] + w < result[v]) {
        return [-1];
      }
    }

    return result;
  }
}
