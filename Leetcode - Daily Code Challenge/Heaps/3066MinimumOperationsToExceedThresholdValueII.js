/*3066. Minimum Operations to Exceed Threshold Value II
13 Feb 25, Leetcode POTD
Input: nums = [2,11,10,1,3], k = 10
Output: 2
Explanation: In the first operation, we remove elements 1 and 2, then add 1 * 2 + 2 to nums. nums becomes equal to [4, 11, 10, 3].
In the second operation, we remove elements 3 and 4, then add 3 * 2 + 4 to nums. nums becomes equal to [10, 11, 10].
At this stage, all the elements of nums are greater than or equal to 10 so we can stop.
It can be shown that 2 is the minimum number of operations needed so that all elements of the array are greater than or equal to 10.
*/


/*In this we need to take out the min value first
min and then max which is second smallest, we can
use MinHeap, till minHeap is not empty and top is less
then k, we do task.
TC: O(nlogn), SC:O(n)
*/
var minOperations = function(nums, k) {
    let len = nums.length;
    let minHeap = new MinHeap();
    for(let num of nums){
        minHeap.push(num);
    }
    let count = 0;
    while(!minHeap.isEmpty() && minHeap.top() < k){
        let firstSmall = minHeap.poll();
        let secondSmall = minHeap.poll();

        //now do the operation and push into the 
        //minHeap
        minHeap.push(firstSmall * 2 + secondSmall);
        count++;
    }
    return count;
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
      if (this.data[idx] < this.data[parentIndex]) {
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
        this.data[left] < this.data[smallest]
      ) {
        smallest = left;
      }
      if (
        right < this.data.length &&
        this.data[right] < this.data[smallest]
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
  top(){
    return this.data[0];
  }
}