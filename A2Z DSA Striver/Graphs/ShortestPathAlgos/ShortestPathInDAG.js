/* Shortest Path in Directed Acyclic Path
*/
class Graph {
  constructor(vertices) {
      this.V = vertices;
      this.adj = new Map();
  }

  addEdge(u, v, weight) {
      if (!this.adj.has(u)) {
          this.adj.set(u, []);
      }
      this.adj.get(u).push({ vertex: v, weight: weight });
  }

  topologicalSortUtil(v, visited, stack) {
      visited[v] = true;

      if (this.adj.has(v)) {
          for (let node of this.adj.get(v)) {
              if (!visited[node.vertex]) {
                  this.topologicalSortUtil(node.vertex, visited, stack);
              }
          }
      }

      stack.push(v);
  }

  shortestPath(src) {
      let stack = [];
      let visited = new Array(this.V).fill(false);
      let dist = new Array(this.V).fill(Infinity);

      dist[src] = 0;

      for (let i = 0; i < this.V; i++) {
          if (!visited[i]) {
              this.topologicalSortUtil(i, visited, stack);
          }
      }

      while (stack.length !== 0) {
          let u = stack.pop();

          if (dist[u] !== Infinity && this.adj.has(u)) {
              for (let node of this.adj.get(u)) {
                  if (dist[node.vertex] > dist[u] + node.weight) {
                      dist[node.vertex] = dist[u] + node.weight;
                  }
              }
          }
      }

      for (let i = 0; i < this.V; i++) {
          if (dist[i] === Infinity) {
              console.log("INF");
          } else {
              console.log(dist[i]);
          }
      }
  }
}