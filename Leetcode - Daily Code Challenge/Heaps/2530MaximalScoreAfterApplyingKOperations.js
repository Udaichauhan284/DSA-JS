/*2530. Maximal Score After Applying K Operations
14 Oct 2024, Leetcode POTD, Use of MaxHeap

Input: nums = [10,10,10,10,10], k = 5
Output: 50
Explanation: Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50.
*/

/*IN this we need the maxScore, so for getting the max elem
from nums we can use MaxHeap for easy taking out of elem
1.need to build the heap, 2. then while loop on k and push,
poll in maxHeap. TC: O(n + klogn) SC: O(n)
*/
var maxKelements = function(nums, k) {
  let maxHeap = new MaxHeap();
  //build of maxHeap
  for(let num of nums){ //O(n)
      maxHeap.push(num);
  }
  //now loop on k, for getting the maxScore
  let maxScore = 0;
  while(k > 0){ //O(klogn)
      let currTop = maxHeap.poll();
      maxScore += currTop;
      let ceilScore = Math.ceil(currTop / 3);
      maxHeap.push(ceilScore);
      k--;
  }
  return maxScore;
};
class MaxHeap {
  constructor(){
      this.data = [];
  }
  getParentIndex(idx){
      return Math.floor((idx-1)/2);
  }
  getLeftChildIndex(idx){
      return idx * 2 + 1;
  }
  getRightChildIndex(idx){
      return idx * 2 + 2;
  }
  swap(i1, i2){
      [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
  }
  push(value){ 
      this.data.push(value);
      this.heapifyUp();
  }
  heapifyUp(){ //O(logn)
      let idx = this.data.length - 1;
      while(idx > 0){
          let parentIndex = this.getParentIndex(idx);
          if(this.data[idx] > this.data[parentIndex]){
              this.swap(parentIndex, idx);
              idx = parentIndex;
          }else{
              break;
          }
      }
  }
  poll(){ 
      if(this.data.length === 0) return null;
      if(this.data.length === 1) return this.data.pop();
      let maxValue = this.data[0];
      this.data[0] = this.data.pop();
      this.heapifyDown(0);
      return maxValue;
  }
  heapifyDown(idx) { //O(logn)
      while(true){
          let largest = idx;
          let left = this.getLeftChildIndex(idx);
          let right = this.getRightChildIndex(idx);
          if(left < this.data.length && this.data[left] > this.data[largest]){
              largest = left;
          }
          if(right < this.data.length && this.data[right] > this.data[largest]){
              largest = right;
          }
          if(largest !== idx){
              this.swap(largest, idx);
              idx = largest;
          }else{
              break;
          }
      }
  }
  isEmpty(){
      return this.data.length === 0;
  }
  size(){
      return this.data.length;
  }
}