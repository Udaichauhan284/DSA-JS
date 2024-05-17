class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
    //now sort the queue
    this.queue.sort((a, b) => a[0] - b[0]);
  }
  dequeue() {
    if (this.queue.length === 0) return null;
    if (this.queue.length === 1) return this.queue.pop();
    return this.queue.shift(); //need to take out first one, min one
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}
class Solution {
  /**
    * @param number n
    * @param number m
    * @param number src
    * @param number[][] edges

    * @returns number[]
    */
  shortestPath(edges, n, m, src) {
    // code here
    const adj = new Map();

    for (const vec of edges) {
      const [u, v, w] = vec;

      if (!adj.has(u)) adj.set(u, []);
      if (!adj.has(v)) adj.set(v, []);

      adj.get(u).push([v, w]);
      adj.get(v).push([u, w]);
    }

    const pq = new PriorityQueue();
    const result = new Array(n + 1).fill(Infinity);
    const parent = new Array(n + 1).fill(0).map((_, i) => i);

    result[1] = 0;
    pq.enqueue([0, 1]);

    while (!pq.isEmpty()) {
      const [d, node] = pq.dequeue();

      for (const [adjNode, dist] of adj.get(node) || []) {
        if (d + dist < result[adjNode]) {
          result[adjNode] = d + dist;
          pq.enqueue([d + dist, adjNode]);
          parent[adjNode] = node;
        }
      }
    }

    const path = [];
    let node = n;

    if (result[node] === Infinity) return [-1];

    while (parent[node] !== node) {
      path.push(node);
      node = parent[node];
    }
    path.push(1);
    path.reverse();
    return path;
  }
}
