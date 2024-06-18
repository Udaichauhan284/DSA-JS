/* 826. Most Profit Assigning Work
18 June 2024 Leetcode POTD, Array,Two Pointer, BinarySearch, Maxheap
Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
Output: 100
Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a profit of [20,20,30,30] separately.
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
      let biggest = idx;
      let left = this.getLeftChildIndex(idx);
      let right = this.getRightChildIndex(idx);
      if (
        left < this.data.length &&
        this.data[left][0] > this.data[biggest][0]
      ) {
        biggest = left;
      }
      if (
        right < this.data.length &&
        this.data[right][0] > this.data[biggest][0]
      ) {
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
  peek() {
    return this.data[0];
  }
}
//TC: O(nlogn + mlogn), SC: O(n)
var maxProfitAssignment = function (difficulty, profit, worker) {
  let n = difficulty.length;
  let m = worker.length;
  let pq = new MaxHeap();
  for (let i = 0; i < n; i++) {
    pq.push([profit[i], difficulty[i]]);
  }
  //sort the worker, so that we get max at top of maxheap
  worker.sort((a, b) => b - a); //descending order
  let i = 0;
  let maxProfit = 0;
  while (i < m && !pq.isEmpty()) {
    let [currProfit, currDiff] = pq.peek();
    if (worker[i] < currDiff) {
      pq.poll();
    } else {
      maxProfit += currProfit;
      i++;
    }
  }
  return maxProfit;
};

/*Method 2- use of Binary Search, take arr puhs diff and profit
in this,sort the arr accor to diff, and then fix the profit.
then apply BInary Search forloop on worker and then on BS on
arr.
TC: ~O(nlogn), SC: O(n)
*/
var maxProfitAssignment = function (difficulty, profit, worker) {
  let n = difficulty.length;
  let m = worker.length;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([difficulty[i], profit[i]]);
  }
  arr.sort((a, b) => a[0] - b[0]);

  //fix the profit in arr
  for (let i = 1; i < arr.length; i++) {
    arr[i][1] = Math.max(arr[i][1], arr[i - 1][1]);
  }
  let maxProfit = 0;
  for (let i = 0; i < m; i++) {
    let workerDiffLevel = worker[i];
    let l = 0,
      r = arr.length - 1;
    let currProfit = 0;
    while (l <= r) {
      let mid = l + Math.floor((r - l) / 2);
      if (arr[mid][0] <= workerDiffLevel) {
        currProfit = Math.max(currProfit, arr[mid][1]);
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    maxProfit += currProfit;
  }
  return maxProfit;
};
