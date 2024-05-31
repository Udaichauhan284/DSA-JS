class DSU {
  constructor(n) {
      this.parent = Array(n).fill(0).map((_, i) => i);
      this.rank = Array(n).fill(0);
  }

  find(x) {
      if (x !== this.parent[x]) {
          this.parent[x] = this.find(this.parent[x]);
      }
      return this.parent[x];
  }

  union(x, y) {
      const xParent = this.find(x);
      const yParent = this.find(y);

      if (xParent === yParent) return;

      if (this.rank[xParent] > this.rank[yParent]) {
          this.parent[yParent] = xParent;
      } else if (this.rank[xParent] < this.rank[yParent]) {
          this.parent[xParent] = yParent;
      } else {
          this.parent[yParent] = xParent;
          this.rank[xParent]++;
      }
  }
}

class Solution {
  spanningTree(arr, v, e) {
      // Create a sorted edge list
      const vec = [];
      for (let [u, v, w] of arr) {
          vec.push([u, v, w]);
      }

      // Sort the edges by weight
      vec.sort((a, b) => a[2] - b[2]);

      // Call Kruskal's algorithm
      return this.kruskalAlgo(vec, v);
  }

  kruskalAlgo(vec, v) {
      const dsu = new DSU(v);
      let sum = 0;

      for (let [u, v, w] of vec) {
          if (dsu.find(u) !== dsu.find(v)) {
              dsu.union(u, v);
              sum += w;
          }
      }

      return sum;
  }
}