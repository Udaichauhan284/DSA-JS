/* 2593. Find Score of an Array After Marking All Elements
13 Dec 2024, Leetcode POTD, Array, Sorting, MinHeap

Input: nums = [2,1,3,4,5,2]
Output: 7
Explanation: We mark the elements as follows:
- 1 is the smallest unmarked element, so we mark it and its two adjacent elements: [2,1,3,4,5,2].
- 2 is the smallest unmarked element, so we mark it and its left adjacent element: [2,1,3,4,5,2].
- 4 is the only remaining unmarked element, so we mark it: [2,1,3,4,5,2].
Our score is 1 + 2 + 4 = 7.
*/

/*In this ques, we need to take the min elem, and add that to
score and marked that as visited, so for taking mini, we can sort
the arr, but we lost the index, so for that, we make a newArray
where we first put the nums and indx, and then sort it, based
on nums. TC: O(nlogn + n), SC: O(n)
*/

var findScore = function(nums) {
  let len = nums.length;
  let sortedArr = Array(len).fill(0);
  //now fill this arr
  for(let i=0; i<len; i++){
      sortedArr[i] = [nums[i], i];
  }
  //now sort this based on nums
  sortedArr.sort((a,b) => a[0]-b[0]); //O(nlogn)
  //now take visited Arr to mark elem true or false
  let visited = Array(len).fill(false);
  let score = 0; //this is our result
  for(let [num,idx] of sortedArr){ //O(n)
      if(visited[idx] === false){
          //mark that true, and add in score
          score += num;
          visited[idx] = true;

          //now mark the adjacent also visited
          if(idx-1 >=0 && visited[idx-1] === false){
              visited[idx-1] = true;
          }
          if(idx+1 < len && visited[idx+1] === false){
              visited[idx+1] = true;
          }
      }
  }
  return score;
};

/*In Method2-we can use MinHeap, as we need minelem, in minHeap, we can
push nums and its idx, and other logic will be same. 
TC: O(nlogn), SC: O(n)
*/
var findScore = function(nums) {
  let len = nums.length;
  let minHeap = new MinHeap();
  for (let i = 0; i < len; i++) {
      minHeap.push([nums[i], i]);
  }
  
  let score = 0;
  let visited = Array(len).fill(false);

  while (!minHeap.isEmpty()) {
      let [num, idx] = minHeap.poll();
      // Only process unvisited indices
      if (!visited[idx]) {
          // Add the current number to the score
          score += num;
          // Mark the current index as visited
          visited[idx] = true;

          // Mark adjacent indices as visited
          if (idx - 1 >= 0) visited[idx - 1] = true;
          if (idx + 1 < len) visited[idx + 1] = true;
      }
  }
  return score;
};

// Modified MinHeap implementation
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
  
  // Key modification: compare both value and index
  compare(a, b) {
      // If values are different, compare values
      if (a[0] !== b[0]) {
          return a[0] - b[0];
      }
      // If values are equal, compare indices (smaller index comes first)
      return a[1] - b[1];
  }
  
  push(pair) {
      this.data.push(pair);
      this.heapifyUp();
  }
  
  heapifyUp() {
      let idx = this.data.length - 1;
      while (idx > 0) {
          let parent = this.getParentIndex(idx);
          if (this.compare(this.data[idx], this.data[parent]) < 0) {
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
  
  heapifyDown(idx = 0) {
      while (true) {
          let smallest = idx;
          let left = this.getLeftChildIndex(idx);
          let right = this.getRightChildIndex(idx);
          
          if (left < this.data.length && this.compare(this.data[left], this.data[smallest]) < 0) {
              smallest = left;
          }
          
          if (right < this.data.length && this.compare(this.data[right], this.data[smallest]) < 0) {
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