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

//Good Verison of MinHeap with pair push
class MinHeap {
  constructor() {
    this.data = [];
  }
  getParentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftChildIndex(idx) {
    return idx * 2 + 1;
  }
  getRightChildIndex(idx) {
    return idx * 2 + 2;
  }
  swap(i1, i2) {
    let temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }
  push(pair) {
    this.data.push(pair);
    this.heapifyUp();
  }
  heapifyUp() {
    let idx = this.data.length - 1;
    while (idx > 0) {
      let parentIndex = this.getParentIndex(idx);
      if (this.data[idx][0] < this.data[parentIndex][0]) {
        this.swap(idx, parentIndex);
        idx = parentIndex;
      } else {
        break;
      }
    }
  }
  poll() {
    if (this.data.length === 0) return null;
    if (this.data.length === 1) return this.data.pop();
    let minValue = this.data[0];
    this.data[0] = this.data.pop();
    this.heapifyDown(0);
    return minValue;
  }
  heapifyDown(idx) {
    while (true) {
      let smallest = idx;
      let left = this.getLeftChildIndex(idx);
      let right = this.getRightChildIndex(idx);
      if (
        left < this.data.length &&
        this.data[left][0] < this.data[smallest][0]
      ) {
        smallest = left;
      }
      if (
        right < this.data.length &&
        this.data[right][0] < this.data[smallest][0]
      ) {
        smallest = right;
      }
      if (smallest !== idx) {
        this.swap(idx, smallest);
        idx = smallest;
      } else {
        break;
      }
    }
  }
  isEmpty() {
    this.data.length === 0;
  }
}