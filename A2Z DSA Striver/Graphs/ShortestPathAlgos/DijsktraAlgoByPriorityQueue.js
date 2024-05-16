/* Dijkstra's Algo
this algo is used in weight graph, to find the shortest path
Method-1 by Priority Queue (Min-Heap);
*/
//Priority Queue - (Min-Heap), measn ascending order, and smallest one on top
class PriorityQueue{
  constructor(){
    this.queue = [];
  }
  enqueue(element){
    this.queue.push(element);
    //now sort the queue
    this.queue.sort((a,b) => a[0]-b[0]);
  }
  dequeue(){
    if(this.queue.length === 0) return null;
    if(this.queue.length === 1) return this.queue.pop();
    return this.queue.shift(); //need to take out first one, min one
  }
  isEmpty(){
    return this.queue.length === 0;
  }
}
class Solution {
  dijkstra(V,adj,source){
    //first take priority queue
    let pq = new PriorityQueue();
    let result = Array(V).fill(Number.MAX_SAFE_INTEGER);
    //first push 0 for soruce
    result[source] = 0;
    pq.enqueue([0,source]); //weight, node
    while(!pq.isEmpty()){
      let [d,node] = pq.dequeue();
      for(let [adjNode, wt] of adj[node]){
        let currWeight = d+wt;
        if(currWeight < result[adjNode]){
          result[adjNode] = currWeight;
          pq.enqueue([currWeight, adjNode]);
        }
      }
    }
    return result;
  }
}