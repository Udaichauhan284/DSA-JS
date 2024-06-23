/* 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit

23 June 2024 Leetcode POTD, Array, Heap, Sliding Window.
Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit.

Input: nums = [8,2,4,7], limit = 4
Output: 2 
Explanation: All subarrays are: 
[8] with maximum absolute diff |8-8| = 0 <= 4.
[8,2] with maximum absolute diff |8-2| = 6 > 4. 
[8,2,4] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
[2] with maximum absolute diff |2-2| = 0 <= 4.
[2,4] with maximum absolute diff |2-4| = 2 <= 4.
[2,4,7] with maximum absolute diff |2-7| = 5 > 4.
[4] with maximum absolute diff |4-4| = 0 <= 4.
[4,7] with maximum absolute diff |4-7| = 3 <= 4.
[7] with maximum absolute diff |7-7| = 0 <= 4. 
Therefore, the size of the longest subarray is 2.
*/

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
      if (smallest != idx) {
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
  top() {
    if (this.data.length === 0) return null;
    return this.data[0];
  }
}
class MaxHeap {
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
      if (this.data[idx][0] > this.data[parentIndex][0]) {
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
    let maxValue = this.data[0];
    this.data[0] = this.data.pop();
    this.heapifyDown(0);
    return maxValue;
  }

  heapifyDown(idx) {
    while (true) {
      let largest = idx;
      let left = this.getLeftChildIndex(idx);
      let right = this.getRightChildIndex(idx);
      if (
        left < this.data.length &&
        this.data[left][0] > this.data[largest][0]
      ) {
        largest = left;
      }
      if (
        right < this.data.length &&
        this.data[right][0] > this.data[largest][0]
      ) {
        largest = right;
      }
      if (largest !== idx) {
        this.swap(idx, largest);
        idx = largest;
      } else {
        break;
      }
    }
  }

  isEmpty() {
    return this.data.length === 0;
  }

  top() {
    if (this.data.length === 0) return null;
    return this.data[0];
  }
}
/*SLiding WIndow, also need to see the min and max elem, for that
we will take maxheap and minheap, so when we move window
no need to recalucate min and max, heap will handle it.
TC: O(nlogn), SC: O(n)
*/
var longestSubarray = function (nums, limit) {
  let n = nums.length;
  let maxHeap = new MaxHeap();
  let minHeap = new MinHeap();
  let i = 0;
  let j = 0;
  let maxlength = 0;
  while (j < n) {
    //now push the curr elem in both the heap
    maxHeap.push([nums[j], j]);
    minHeap.push([nums[j], j]);
    //now see the differece of max and min, and move i to next pos
    while (maxHeap.top()[0] - minHeap.top()[0] > limit) {
      i = Math.min(maxHeap.top()[1], minHeap.top()[1]) + 1;

      //now we have i, move those elem which index is less then curr i
      while (maxHeap.top()[1] < i) {
        maxHeap.poll();
      }
      while (minHeap.top()[1] < i) {
        minHeap.poll();
      }
    }

    //now calculate maxLen
    maxlength = Math.max(maxlength, j - i + 1);
    j++;
  }
  return maxlength;
};
