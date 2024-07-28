/* 2045. Second Minimum Time to Reach Destination
28 july 2024, Leetcode POTD, Graph, shortest path, bfs

Input: n = 5, edges = [[1,2],[1,3],[1,4],[3,4],[4,5]], time = 3, change = 5
Output: 13
Explanation:
The figure on the left shows the given graph.
The blue path in the figure on the right is the minimum time path.
The time taken is:
- Start at 1, time elapsed=0
- 1 -> 4: 3 minutes, time elapsed=3
- 4 -> 5: 3 minutes, time elapsed=6
Hence the minimum time needed is 6 minutes.

The red path shows the path to get the second minimum time.
- Start at 1, time elapsed=0
- 1 -> 3: 3 minutes, time elapsed=3
- 3 -> 4: 3 minutes, time elapsed=6
- Wait at 4 for 4 minutes, time elapsed=10
- 4 -> 5: 3 minutes, time elapsed=13
Hence the second minimum time is 13 minutes.
*/

//Fiest solve BFS and then solve for Dijkstra's Algo

/*Method2- use of BFS, as we need to go from 1 to n node, in minTime and 
need to find the secondMinTime, we can use BFS, we traverse level wise, for each level, 
signal change will be same, green or red, for finding which zine we are we already use
ttimePassed/change, and timePassed will get from freq 1 or 2, in 2 travere we will get our 
secondMinTime
TC: O(V+E)
SC: O(v+e)
*/
var secondMinimum = function(n, edges, time, change) {
  let adj = Array.from({length: n+1}, () => []);
  for(let [u,v] of edges){
      adj[u].push(v);
      adj[v].push(u);
  }
  let minTime = Array(n+1).fill(Number.MAX_VALUE);
  let secondMinTime = Array(n+1).fill(Number.MAX_VALUE);
  //in this we need queue
  let queue = [];
  queue.push([1,1]); //node, freq-how many time node accessed
  minTime[1] = 0; //for first node time will be 0.

  while(queue.length > 0){
      let [node, freq] = queue.shift();
      let timePassed = (freq === 1) ? minTime[node] : secondMinTime[node];
      //check the main condition for ans
      if(node === n && secondMinTime[node] !== Number.MAX_VALUE){
          return secondMinTime[node];
      }
      //now check in which zone it is, can we move or not
      let div = Math.floor(timePassed / change);
      if(div % 2 === 1){
          //odd, red zone, cant move, need to wait for next change cycle, for that
          timePassed = (div+1) * change;
      }

      //move to nextnode
      for(let nextNode of adj[node]){
          let currTime = timePassed + time;
          if(minTime[nextNode] === Number.MAX_VALUE){
              minTime[nextNode] = currTime;
              queue.push([nextNode, 1]); //1 because 1st traverse and filling minTime
          }else if(secondMinTime[nextNode] === Number.MAX_VALUE && minTime[nextNode] !== currTime){
              secondMinTime[nextNode] = currTime;
              queue.push([nextNode, 2]); //2 because 2nd traverse and filling secondMin
          }
      }
  }
  return -1;
};





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
      [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
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
          if (left < this.data.length && this.data[left][0] < this.data[smallest][0]) {
              smallest = left;
          }
          if (right < this.data.length && this.data[right][0] < this.data[smallest][0]) {
              smallest = right;
          }
          if (idx !== smallest) {
              this.swap(idx, smallest);
              idx = smallest;
          } else {
              break;
          }
      }
  }
  isEmpty() {
      return this.data.length === 0;
  }
}
/*Method 1- use of Dijkstra's Algo, just here we need to focus on singal change
for that we will make changes in timePassed
TC: O(ElogV)
SC: O(V+E)+O(V)+O(V) ~ O(V+E)
*/
var secondMinimum = function(n, edges, time, change) {
    let adj = Array.from({length: n+1}, () => []);
    for(let [u,v] of edges){
        adj[u].push(v);
        adj[v].push(u);
    }
    let minTime = Array(n+1).fill(Number.MAX_VALUE);
    let secondMinTime = Array(n+1).fill(Number.MAX_VALUE);
    let pq = new MinHeap();
    pq.push([0,1]); //time, source-node;
    minTime[1] = 0;
    while(!pq.isEmpty()){
        let [timePassed, node] = pq.poll();
        //check the condition
        if(node === n && secondMinTime[n] !== Number.MAX_VALUE){
            return secondMinTime[n];
        }
        //now check the timePassed, is even (green zone) or odd(red zone)
        let div = Math.floor(timePassed / change);
        if(div % 2 === 1){
            //odd- means red zone, need to wait
            timePassed = (div + 1) * change;
        }

        //move to nextNode
        for(let nextNode of adj[node]){
            let currTime = timePassed + time;
            if(minTime[nextNode] > currTime){//means here minTime[nextNode] sye bhi chota time mil gaya hai.
                secondMinTime[nextNode] = minTime[nextNode];
                minTime[nextNode] = currTime;
                pq.push([currTime, nextNode]);
            }else if(secondMinTime[nextNode] > currTime && minTime[nextNode] !== currTime){
                secondMinTime[nextNode] = currTime;
                pq.push([currTime, nextNode]);
            }
        }
    }
    return -1;
};