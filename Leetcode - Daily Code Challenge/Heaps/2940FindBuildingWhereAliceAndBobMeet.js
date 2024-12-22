/* 2940. Find Building Where Alice and Bob Can Meet
22 Dec 2024, Leetcode POTD, array, MinHeap, Map

Input: heights = [6,4,8,5,2,7], queries = [[0,1],[0,3],[2,4],[3,4],[2,2]]
Output: [2,5,-1,5,2]
Explanation: In the first query, Alice and Bob can move to building 2 since heights[0] < heights[2] and heights[1] < heights[2]. 
In the second query, Alice and Bob can move to building 5 since heights[0] < heights[5] and heights[3] < heights[5]. 
In the third query, Alice cannot meet Bob since Alice cannot move to any other building.
In the fourth query, Alice and Bob can move to building 5 since heights[3] < heights[5] and heights[4] < heights[5].
In the fifth query, Alice and Bob are already in the same building.  
For ans[i] != -1, It can be shown that ans[i] is the leftmost building where Alice and Bob can meet.
For ans[i] == -1, It can be shown that there is no building where Alice and Bob can meet.
*/

//TC: O(N + OlogQ), SC: O(Q)
var leftmostBuildingQueries = function (heights, queries) {
  let len = heights.length;
  let totalQueries = queries.length;

  let ans = Array(totalQueries).fill(-1);
  let map = {}; // Initialize the map to store index mappings
  let minHeap = new MinHeap();

  // Populate the map with query data
  for (let q = 0; q < totalQueries; q++) {
      let i = queries[q][0];
      let j = queries[q][1];

      if (i < j && heights[i] < heights[j]) {
          ans[q] = j;
      } else if (i > j && heights[i] > heights[j]) {
          ans[q] = i;
      } else if (i === j) {
          ans[q] = i;
      } else {
          if (!map[Math.max(i, j)]) {
              map[Math.max(i, j)] = [];
          }
          map[Math.max(i, j)].push([Math.max(heights[i], heights[j]), q]);
      }
  }

  // Process the buildings
  for (let i = 0; i < len; i++) {
      while (!minHeap.isEmpty() && minHeap.data[0][0] < heights[i]) {
          let [_, idx] = minHeap.poll();
          ans[idx] = i;
      }

      if (map[i]) {
          for (let [height, qIdx] of map[i]) {
              minHeap.push([height, qIdx]);
          }
      }
  }

  return ans;
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
  return this.data.length === 0;
}
}
