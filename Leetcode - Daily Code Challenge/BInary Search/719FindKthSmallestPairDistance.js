/* 719. Find K-th Smallest Pair Distance
14 August 2024, Leetcode POTD, Array, Binary Search, Heap, Nested Loop

Input: nums = [1,3,1], k = 1
Output: 0
Explanation: Here are all the pairs:
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
Then the 1st smallest distance pair is (1,1), and its distance is 0.
*/

/*Brute Method-use of nested loop, find the pairs and find the abs
distance, store in temp arr, then sort the temp arr, and return the
k-1 position from temp, temp is 0-based 
TC:O(n^2)+O(nlogn) ~ O(n^2), SC: O(n)
*/
var smallestDistancePair = function (nums, k) {
  let temp = [];
  let len = nums.length;
  //finding pair and abs distance
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let absDistance = Math.abs(nums[i] - nums[j]);
      temp.push(absDistance);
    }
  }
  //sort the temp arr
  temp.sort((a, b) => a - b);
  return temp[k - 1]; //as temp is 0-based index
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
  size() {
    return this.data.length;
  }
  peek() {
    return this.data[0];
  }
}
//Method -2, use of MinHeap, TC: O(nlogn)+O(klogn) ~ O(nlogn)
//SC: O(n), TLE
var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b); // Sort the array

  let minHeap = new MinHeap();

  // Push initial pairs into the minHeap
  for (let i = 0; i < nums.length - 1; i++) {
    minHeap.push([nums[i + 1] - nums[i], i, i + 1]);
  }

  // Extract the smallest distance k times
  while (--k > 0) {
    let [dist, i, j] = minHeap.poll();
    if (j + 1 < nums.length) {
      minHeap.push([nums[j + 1] - nums[i], i, j + 1]);
    }
  }

  return minHeap.poll()[0]; // The k-th smallest distance
};

/*Method 3, optimal approach, we will use the binary search,
on difference, of low=0, and high=largest of nums from sorted
nums array, adn in this we want count of Pair which give less of
differnce, and then we return the mid
TC: O(nlogW), w is difference, SC: O(1)
*/
var smallestDistancePair = function (nums, k) {
  //sort the arr
  nums.sort((a, b) => a - b);
  let low = 0;
  let high = nums[nums.length - 1] - nums[0];
  //apply binary search
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let count = countPairs(mid, nums);
    if (count < k) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};
function countPairs(mid, nums) {
  let count = 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    while (j < nums.length && nums[j] - nums[i] <= mid) {
      j++;
    }
    count += j - i - 1;
  }
  return count;
}
