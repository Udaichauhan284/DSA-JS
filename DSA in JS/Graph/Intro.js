/* Graph
- A graph is a non-linear data structure that consists of a finite number of vertices(also called nodes) connected by edges.
- tress is a specific type of Graph DS.

-Types of Graph
1. Directed: a graph in which the edges have a direction. A->B->C
Edges are usually represented by arrows pointing in the direction the graph can be traversed.

2. Undirected: A graph in which the edges are bidirectional.
The graph can be traversed in either direction
The absence of an arrow tells un that the graph is undirected.

-- Usages
Google Maps
Social Media Sites

-- Representation
a. Adjacency Matrix.
b. Adjacency List.

-- Adjacency Matrix
-An adjacency matix is a 2D array of size VxV where V is the number of vertices in the graph.
-Each row and column represent a vertex.
-If the value of any element say, matrix[i][j] is 1, it represents that there is an edge connecting vertex i and vertex j.

-- Adjacency List
-vertices are stored in a map like data structure, and every vertex stores a list of its adjacent vertices.
A->B, B->A,C , C->B

-- Adjacency Matrix(AM) vs Adjacency List(AL)
- With an AL, we only need to store the values for the edges that exist. With AM, you store alues irrespective of whether an edge exists or not. Storage wise, an AL is way more efficient.

- With AL, inserting and finding adjacent nodes is constant time complexity whereas with AM, it is linear time complexity.

- An AL allows you to store additional values with an edge such as weight of the edge. WIth adjanency matrix, such information would have to be stored extrenally.
*/

//adjacency Matrix
// const matix = [
//   [0,1,0],
//   [1,0,1],
//   [0,1,0]
// ]
// console.log(matix[0][1]);

//adjacency list
// const list = {
//   'A' : ['B'],
//   'B' : ['A','C'],
//   'C' : ['B']
// }
// console.log(list.A);

class Graph {
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2){
    if(!this.adjacencyList[vertex1]){
      this.addVertex(vertex1);
    }
    if(!this.adjacencyList[vertex2]){
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  //display
  display(){
    for(let vertex in this.adjacencyList){
      console.log(vertex + "-> " + [...this.adjacencyList[vertex]]);
    }
  }

  //checking there is edge
  hasEdge(vertex1,vertex2){
    return (
      this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    )
  }

  //removeEdge
  removeEdge(vertex1, vertex2){
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }
  
  //remove vertex
  removeVertex(vertex){
    if(!this.adjacencyList[vertex]){
      return 
    }
    for(let adjacentVertex of this.adjacencyList[vertex]){
      this.removeEdge(vertex,adjacentVertex); //here deleting edge for vertex 
    }
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.display();
console.log(graph.hasEdge("A", "C"));
graph.removeEdge("A", "B");
graph.display();
graph.removeVertex("B");
graph.display();