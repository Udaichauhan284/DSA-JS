/* 2406. Divide Intervals Into Minimum Number of Groups
12 Oct 2024, Leetcode POTD, Array, Interval, Sorting MinHeap
Input: intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]]
Output: 3
Explanation: We can divide the intervals into the following groups:
- Group 1: [1, 5], [6, 8].
- Group 2: [2, 3], [5, 10].
- Group 3: [1, 10].
It can be proven that it is not possible to divide the intervals into fewer than 3 groups.

*/

/*Brute Method- this is of interval based, so first we need 
to sort the interval based on start time, after that we 
will take array to store the end time based on 
currStart > prevEnd, if yes remove that prevEnd and store 
currEnd. TC: O(n^2) one n is for traversing on interval and 
other n is traversing on endTIme arr. so for this issues
Better - method is take MinHeap, so that we have min endTime
at top and we can check TC:O(n), SC: O(n)
*/
class MinHeap {
  constructor(){
      this.data = [];
  }
  getParentIndex(idx){
      return Math.floor((idx-1)/2);
  }
  getLeftChildIndex(idx){
      return idx * 2 + 1; // Fix: Corrected left child index calculation
  }
  getRightChildIndex(idx){
      return idx * 2 + 2; // Fix: This was correct
  }
  swap(i1, i2){
      [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
  }
  push(value){ // Push value instead of pair
      this.data.push(value);
      this.heapifyUp();
  }
  heapifyUp(){
      let idx = this.data.length-1;
      while(idx > 0){
          let parentIndex = this.getParentIndex(idx);
          if(this.data[idx] < this.data[parentIndex]){ // Fix: Compare values directly
              this.swap(idx, parentIndex);
              idx = parentIndex;
          } else {
              break;
          }
      }
  }
  poll(){
      if(this.data.length === 0) return null;
      if(this.data.length === 1) return this.data.pop();
      let minValue = this.data[0];
      this.data[0] = this.data.pop();
      this.heapifyDown(0);
      return minValue;
  }
  heapifyDown(idx){
      while(true){
          let smallest = idx;
          let left = this.getLeftChildIndex(idx);
          let right = this.getRightChildIndex(idx);
          
          if(left < this.data.length && this.data[left] < this.data[smallest]){ 
              smallest = left;
          }
          if(right < this.data.length && this.data[right] < this.data[smallest]){ 
              smallest = right;
          }
          if(smallest !== idx){ // Swap with smallest child
              this.swap(smallest, idx);
              idx = smallest;
          } else {
              break;
          }
      }
  }
  isEmpty(){
      return this.data.length === 0;
  }
  top(){
      return this.data[0];
  }
  size(){
      return this.data.length;
  }
}
var minGroups = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // Sort intervals by start time
  let minHeap = new MinHeap();
  for(let [start, end] of intervals){
      // If the current interval's start time is greater than the minimum end time in the heap
      if(!minHeap.isEmpty() && start > minHeap.top()){
          minHeap.poll(); // Remove the interval that has already ended
      }
      // Push the current interval's end time into the heap
      minHeap.push(end);
  }
  // Return the size of the heap, which gives the number of groups
  return minHeap.size(); 
};