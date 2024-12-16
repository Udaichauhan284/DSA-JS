/* 3264. Find Array After K Muliplication Operations I
16 Dec 2024, Leetcode POTD, Array, MinHeap
Input: nums = [2,1,3,5,6], k = 5, multiplier = 2

Output: [8,4,6,5,6]

Explanation:

Operation	Result
After operation 1	[2, 2, 3, 5, 6]
After operation 2	[4, 2, 3, 5, 6]
After operation 3	[4, 4, 3, 5, 6]
After operation 4	[4, 4, 6, 5, 6]
After operation 5	[8, 4, 6, 5, 6]
*/

/*Brute Method, in thiw we need to loop k time, and in that
we need to find the minvalue idx and then change it into nums
TC: O(k * n), SC: O(1)
*/
var getFinalState = function(nums, k, multiplier) {
  let len = nums.length;
  while(k--){
      let idx = 0;
      for(let i=0; i<len; i++){
          if(nums[i] < nums[idx]){
              idx = i; //give the smallest index to idx
          }
      }
      nums[idx] = nums[idx] * multiplier;
  }
  return nums;
};


/*Optimal Method, use of MinHeap, in that we will push the
elem and with its index.
TC: O(nlogn + klogn) ~ O(klogn), SC: O(n);
*/
var getFinalState = function(nums, k, multiplier) {
  let len = nums.length;
  let minHeap = new MinHeap();
  //now we need to first push the elm and index
  for(let i=0; i<len; i++){ //O(nlogn)
      minHeap.push([nums[i], i]); 
  }
  //now the main logic
  while(k--){ //O(k * logn)
      let [num, idx] = minHeap.poll();
      nums[idx] = num * multiplier;
      //and we push this nums[idx] and idx into minHeap
      minHeap.push([nums[idx], idx]);
  }
  return nums;
};
class MinHeap {
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
  compare(pair1, pair2){
      //if we comapre according to the values
      if(pair1[0] < pair2[0]) return true;
      if(pair1[0] === pair2[0] && pair1[1] < pair2[1]) return true;
      return false;
  }
  push(pair){
      this.data.push(pair);
      this.heapifyUp();
  }
  heapifyUp(){
      let idx = this.data.length-1;
      while(idx > 0){
          let parent = this.getParentIndex(idx);
          if(this.compare(this.data[idx], this.data[parent])){
              this.swap(idx, parent);
              idx = parent;
          }else{
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
          if(left < this.data.length && this.compare(this.data[left], this.data[smallest])){
              smallest = left;
          }
          if(right < this.data.length && this.compare(this.data[right], this.data[smallest])){
              smallest = right;
          }
          if(smallest !== idx){
              this.swap(idx, smallest);
              idx = smallest;
          }else{
              break;
          }
      }
  }
  isEmpty(){
      return this.data.length === 0;
  }
}