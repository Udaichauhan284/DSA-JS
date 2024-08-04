/* 1508. Range Sum of Sorted Subarray Sums
04 August 2024, Leetcode POTD, Array, Subarray, Brute Method, Sorting, Heap

Input: nums = [1,2,3,4], n = 4, left = 1, right = 5
Output: 13 
Explanation: All subarray sums are 1, 3, 6, 10, 2, 5, 9, 3, 7, 4. After sorting them in non-decreasing order we have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 1 to ri = 5 is 1 + 2 + 3 + 3 + 4 = 13. 
*/

/*Method 1- do what asked.
Brute Method - first find all the sum of subarray using nested 
loops and then sort the temp array, and then find the ans
TC: O(n^2)+O(nlogn)+O(range) ~ O(n^2)
SC: O(n) for temp array
*/
var rangeSum = function(nums, n, left, right) {
  let MOD = 1000000007;
  let temp = [];
  for(let i=0; i<n; i++){
      let sum = 0;
      for(let j=i; j<n; j++){
          sum += nums[j];
          temp.push(sum);
      }
  }
  //sort the temp array
  temp.sort((a,b) => a-b);

  //find the result, left-1 and right-1 as temp is 0-based
  let result = 0;
  for(let i=left-1; i<=right-1; i++){
      result += temp[i];
  }
  return (result % MOD);
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
}
/*Method 2-we can use Heap for finding the sum of subarr of arr
TC: O(n^2 * logn)
SC: O(n)
*/
var rangeSum = function(nums, n, left, right) {
    let MOD = 1000000007;
    //take a minHeap as we need non-decreasing order sum
    let minHeap = new MinHeap();
    //first push the single elem pair with index in heap
    for(let i=0; i<n; i++){
        minHeap.push([nums[i], i]);
    }
    let result = 0;
    //now for loop till right, as we need ans till range
    for(let i=1; i<=right; i++){
        let [elem, ind] = minHeap.poll();

        //if currIndex i is greater than or equal than left, add
        if(i >= left){
            result = (result + elem) % MOD;
        }
        //ind will goes till second elem of arr n-1
        if(ind < n-1){
            //next index
            ind++;
            //add that next index value to elem and psh in heap
            elem += nums[ind] % MOD;
            minHeap.push([elem, ind]);
        }
    }
    return result;
};