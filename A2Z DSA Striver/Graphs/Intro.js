/* There are many types of Graphs in DSA
1. Undirected Graph.
2. Directed Graph.
3. Cyclic Graph and many more

in Graph there are Nodes/ Vertices and Egdes also edges are weighted edges too.

2 type of Traversal BFS (Breadth First Search/ Traversal)
DFS (Deoth First Search/Traversal).
*/
class Graph {
  #nodes; //private

  constructor() {
    this.#nodes = {};
  }

  addNode(node) {
    this.#nodes[node] = [];
  }

  addEdge(source, destination) {
    if (!this.#nodes[source] || !this.#nodes[destination]) {
      return false;
    }

    if (!this.#nodes[source].includes(destination)) {
      this.#nodes[source].push(destination);
    }

    if (!this.#nodes[destination].includes(source)) {
      this.#nodes[destination].push(source);
    }
  }

  showNodes() {
    console.log(this.#nodes);
  }

  //bfs - search
  bfs(source, destination) {
    const queue = [];
    const visited = {};

    queue.push(0);
    visited[0] = true;
    while(queue.length > 0){
      let current = queue.shift();
      if(visited[current]){
        continue;
      }
      if(source === destination){
        return true;
      }

      //mark visited
      visited[current] = true;
      let neighbor = this.#nodes[current];
      for(let i=0; i<neighbor.length; i++){
        queue.push(neighbor[i]);
      }
    }
    return false; //not found
  }

  //dfs - search
  dfs(source, destination, visited = {}){
    if(visited[source]){
      return false;
    }

    if(source === destination){
      return true;
    }
    visited[source] = true;
    let neighbor = this.#nodes[source];
    for(let i=0; i<neighbor.length; i++){
      if(this.dfs(neighbor[i],destination,visited)){
        return true;
      }
    }
    return false;
  }
}
