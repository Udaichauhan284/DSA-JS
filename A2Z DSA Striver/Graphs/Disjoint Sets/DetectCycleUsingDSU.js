/* Detect Cycle Using DSU

*/
//In this, just implement DSu(find-union) by rank, parentu and parent v same true cycle.
class Solution {
  detectCycle(n, adj) {
    let parent = Array(n).fill(0);
    let rank = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      parent[i] = i; //initial
    }

    for (let u = 0; u < n; u++) {
      for (let v of adj[u]) {
        if (u < v) {
          let parentU = this.find(u, parent);
          let parentV = this.find(v, parent);

          if (parentU === parentV) {
            return 1;
          } else {
            this.union(u, v, parent, rank);
          }
        }
      }
    }
    return 0;
  }

  find(x, parent) {
    if (parent[x] !== x) {
      return (parent[x] = this.find(parent[x], parent));
    }
    return parent[x];
  }

  union(u, v, parent, rank) {
    let uParent = this.find(u, parent);
    let vParent = this.find(v, parent);

    if (uParent === vParent) return;

    if (rank[uParent] > rank[vParent]) {
      parent[vParent] = uParent;
    } else if (rank[uParent] < rank[vParent]) {
      parent[uParent] = vParent;
    } else {
      parent[vParent] = uParent;
      rank[uParent]++;
    }
  }
}
