/* 1353. Maximum Number of Events That Can be Attended
07 July 2025, Leetcode POTD, Medium
Input: events = [[1,2],[2,3],[3,4]]
Output: 3
Explanation: You can attend all the three events.
One way to attend them all is as shown.
Attend the first event on day 1.
Attend the second event on day 2.
Attend the third event on day 3.
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
  push(val) {
    this.data.push(val);
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
  peek() {
    return this.data[0];
  }
}

var maxEvents = function (events) {
  let n = events.length;
  events.sort((a, b) => a[0] - b[0]);
  let minHeap = new MinHeap();
  let day = events[0][0];
  let i = 0;
  let count = 0;

  while (!minHeap.isEmpty() || i < n) {
    if (minHeap.isEmpty()) {
      day = events[i][0];
    }

    while (i < n && events[i][0] === day) {
      minHeap.push(events[i][1]);
      i++;
    }

    if (!minHeap.isEmpty()) {
      minHeap.poll(); // attend one event
      count++;
    }

    day++;

    while (!minHeap.isEmpty() && minHeap.peek() < day) {
      minHeap.poll(); // remove expired events
    }
  }

  return count;
};
