/* 502 IPO
15 June 2024, Leetcode POTD, Topic: Array, Greedy, Sorting, Priority Queue.
Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
Output: 4
Explanation: Since your initial capital is 0, you can only start the project indexed 0.
After finishing it you will obtain profit 1 and your capital becomes 1.
With capital 1, you can either start the project indexed 1 or the project indexed 2.
Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.
*/
class MaxHeap {
  constructor() {
    this.data = [];
  }
  getParentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftChildIndex(idx) {
    return 2 * idx + 1;
  }
  getRightChildIndex(idx) {
    return 2 * idx + 2;
  }
  swap(i1, i2) {
    [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
  }
  push(key) {
    this.data.push(key);
    this.heapifyUp();
  }
  heapifyUp() {
    let idx = this.data.length - 1;
    while (idx > 0) {
      let parentIndex = this.getParentIndex(idx);
      if (this.data[idx] > this.data[parentIndex]) {
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
      let biggest = idx;
      let left = this.getLeftChildIndex(idx);
      let right = this.getRightChildIndex(idx);
      if (left < this.data.length && this.data[left] > this.data[biggest]) {
        biggest = left;
      }
      if (right < this.data.length && this.data[right] > this.data[biggest]) {
        biggest = right;
      }
      if (biggest !== idx) {
        this.swap(biggest, idx);
        idx = biggest;
      } else {
        break;
      }
    }
  }
  isEmpty() {
    return this.data.length === 0;
  }
}
/*In this we need maxProfit from a captial which we have to buy
from initial captial w, we start buying and wrt profit we will
take profit from a arr, we need BIgger proft, for this we need
to add [capital, profits] as pair in arr. and for max profit
we need MaxHeap, in this we will push profit.
TC: O(nlogn)+O(nlogn), n for k worst case, when k is equal to n
and logn for maxheap push , poll method
~O(2nlogn) ~ O(nlogn), SC: O(n)
*/
var findMaximizedCapital = function (k, w, profits, capital) {
  let n = capital.length;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([capital[i], profits[i]]);
  }
  //sort the arr, by capital
  arr.sort((a, b) => a[0] - b[0]);
  //need maxHeap
  let maxHeap = new MaxHeap();
  let i = 0;
  while (k--) {
    while (i < n && arr[i][0] <= w) {
      maxHeap.push(arr[i][1]); //adding only profit
      i++;
    }
    if (maxHeap.isEmpty()) {
      break;
    }
    w += maxHeap.poll(); //bigger profit will be on top
  }
  return w;
};
