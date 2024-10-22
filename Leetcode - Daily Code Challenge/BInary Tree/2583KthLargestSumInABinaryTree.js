/* 2583 Kth Largest Sum In a Binary Tree
22 Oct 2024, leetcode potd, BInary Tree, BFS, MinHeap

Input: root = [5,8,9,2,1,3,7,4,6], k = 2
Output: 13
Explanation: The level sums are the following:
- Level 1: 5.
- Level 2: 8 + 9 = 17.
- Level 3: 2 + 1 + 3 + 7 = 13.
- Level 4: 4 + 6 = 10.
The 2nd largest level sum is 13.
*/

/*In this we use BFS for traversal over tree and find the sum and 
push into minheap, for finding the maxSum from minHeap, we will pop
from minHeap till minHeap.size > k
TC: O(n + nlogk), n is for level order sum, logk is for minHEap operation
and n is for each level, in best case tree is balanaced so logn, but worst
case n so nlogk, SC: O(n)
*/
var kthLargestLevelSum = function(root, k) {
  let minHeap = new MinHeap();
  let queue = [];
  queue.push(root);
  while(queue.length > 0){
      let len = queue.length;
      let levelSum = 0;
      while(len--){
          let front = queue.shift();
          levelSum += front.val;
          if(front.left !== null){
              queue.push(front.left);
          }
          if(front.right !== null){
              queue.push(front.right);
          }
      }
      minHeap.push(levelSum);

      // If the size of the heap exceeds k, remove the smallest element
      if (minHeap.size() > k) {
          minHeap.poll();
      }
  }
  
  return (minHeap.size() < k ? -1 : minHeap.poll());
};
//MINHEAP class
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
  push(value){
      this.data.push(value);
      this.heapifyUp();
  }
  heapifyUp(){
      let idx = this.data.length - 1;
      while(idx > 0){
          let parentIndex = this.getParentIndex(idx);
          if(this.data[idx] < this.data[parentIndex]){
              this.swap(idx, parentIndex);
              idx = parentIndex;
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
          if(left < this.data.length && this.data[left] < this.data[smallest]){
              smallest = left;
          }
          if(right < this.data.length && this.data[right] < this.data[smallest]){
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
  top(){
      return this.data[0];
  }
  size(){
      return this.data.length;
  }
}