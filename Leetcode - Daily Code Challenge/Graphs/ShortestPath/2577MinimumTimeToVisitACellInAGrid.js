/* 2577 Minimum Time to Visit a Cell In a Grid
29 Nov 2024, Leetcode POTD, Matrix, Array, Dijkstra Algo, Visited Scene

Input: grid = [[0,1,3,2],[5,1,2,5],[4,3,8,6]]
Output: 7
Explanation: One of the paths that we can take is the following:
- at t = 0, we are on the cell (0,0).
- at t = 1, we move to the cell (0,1). It is possible because grid[0][1] <= 1.
- at t = 2, we move to the cell (1,1). It is possible because grid[1][1] <= 2.
- at t = 3, we move to the cell (1,2). It is possible because grid[1][2] <= 3.
- at t = 4, we move to the cell (1,1). It is possible because grid[1][1] <= 4.
- at t = 5, we move to the cell (1,2). It is possible because grid[1][2] <= 5.
- at t = 6, we move to the cell (1,3). It is possible because grid[1][3] <= 6.
- at t = 7, we move to the cell (2,3). It is possible because grid[2][3] <= 7.
The final time is 7. It can be shown that it is the minimum time possible.
*/

/*In this we need to move next cells to check currtime+1
is less than coming cell value, we can move, after moving
to next cell, if there is big cell value, we can do
curr to start, vice-versa till we can achieve the next
cell bigger, we can do like if next cell time - with
currtime is even, just add +1 to grid[row][cel] that 
much time we take to move next. in this we can use
Dijkstra Algo. TC: O(m*nlog(m*n)), SC: O(m*n)
*/
var minimumTime = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  // Base case: Check if it's possible to move from the start
  if ((m > 1 && grid[1][0] > 1) && (n > 1 && grid[0][1] > 1)) {
      return -1;
  }

  let visited = Array.from({ length: m }, () => Array(n).fill(false));
  let minHeap = new MinHeap();
  minHeap.push([0, [0, 0]]); // [time, [row, col]]

  let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  while (!minHeap.isEmpty()) {
      let [time, [i, j]] = minHeap.poll();

      // If we reach the bottom-right cell, return the time
      if (i === m - 1 && j === n - 1) {
          return time;
      }

      if (visited[i][j]) continue;
      visited[i][j] = true;

      for (let [dx, dy] of directions) {
          let newRow = i + dx;
          let newCol = j + dy;

          // Skip invalid or already visited cells
          if (newRow < 0 || newRow >= m || newCol < 0 || newCol >= n || visited[newRow][newCol]) {
              continue;
          }

          if (grid[newRow][newCol] <= time + 1) {
              // We can move immediately
              minHeap.push([time + 1, [newRow, newCol]]);
          } else if((grid[newRow][newCol]-time)%2 === 0) {
              //if currTime diff with new cell is even, so
              //add +1 to newCell time and push in minHeap
              minHeap.push([grid[newRow][newCol]+1, [newRow, newCol]]);
          }else{
              //if odd then simple add new cell
              minHeap.push([grid[newRow][newCol], [newRow, newCol]]);
          }
      }
  }

  return -1; // If no path is found
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
          let parent = this.getParentIndex(idx);
          if (this.data[idx][0] < this.data[parent][0]) {
              this.swap(idx, parent);
              idx = parent;
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

          if (smallest !== idx) {
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