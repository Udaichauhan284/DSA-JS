/* 703. Kth Largest Element in a Stream
12 August 2024, Leetcode POTD, Array, Data Stream, MinHeap, class

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:

KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

*/
/*IN this we need to maintain the MinHeap for getting the kth
largest element, this is kinda of design question, do what 
asked.
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
    let temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }
  push(key) {
    this.data.push(key);
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
      if (left < this.data.length && this.data[left] < this.data[smallest]) {
        smallest = left;
      }
      if (right < this.data.length && this.data[right] < this.data[smallest]) {
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
  size() {
    return this.data.length;
  }
  peek() {
    return this.data[0];
  }
}
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.nums = nums;
    this.minHeap = new MinHeap();
    for (let num of this.nums) {
      this.minHeap.push(num);
    }
  }
  add(val) {
    this.minHeap.push(val);
    while (this.minHeap.size() > this.k) {
      //for getting the kth largest elem, till the
      //minHeap size is greater than k, remove it
      this.minHeap.poll();
    }
    //return the the peek elem, which is kth elem
    return this.minHeap.peek();
  }
}
