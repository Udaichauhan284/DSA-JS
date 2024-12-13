/*2558. Take Gifts From The Richest Pile
12 Dec 2024, Leetcode POTD, Array, MaxHeap

Input: gifts = [25,64,9,4,100], k = 4
Output: 29
Explanation: 
The gifts are taken in the following way:
- In the first second, the last pile is chosen and 10 gifts are left behind.
- Then the second pile is chosen and 8 gifts are left behind.
- After that the first pile is chosen and 5 gifts are left behind.
- Finally, the last pile is chosen again and 3 gifts are left behind.
The final remaining gifts are [5,8,9,4,3], so the total number of gifts remaining is 29.
*/


/*In this ques, we need k maxElm and then find the sqrt
of it and push into the gifts, so for that we can take
maxHeap, it easy to find the maxElem, then we need to 
find the totalSum ,and then currSum maxElem-sqrtOne
TC: O(k * logn), SC: O(n)
*/
const pickGifts = (gifts, k) => {
  let totalSum = 0;
  for(let gift of gifts){
    totalSum += gift;
  }
  let maxheap = new MaxHeap(gifts);
  let mySum = 0;
  while(k--){
    let maxElm = maxheap.poll();
    let remaining = Math.floor(Math.sqrt(maxElm));
    mySum += (maxElm - remaining);
    //now push the remaining into maxHeap
    maxheap.push(remaining);
  }
  return (totalSum - mySum);
}

//IN JS there is no MAXHEAP, we need to build it
class MaxHeap{
  constructor(arr = []){
      this.data = arr;
      this.buildHeap(); //this is used to build Heap from gifts
  }
  buildHeap(){
      for(let i=Math.floor(this.data.length)-1; i>=0; i--){
          this.heapifyDown(i);
      }
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
  push(val){
      this.data.push(val);
      this.heapifyUp();
  }
  heapifyUp(){
      let idx = this.data.length - 1;
      while(idx > 0){
          let parent = this.getParentIndex(idx);
          if(this.data[idx] > this.data[parent]){
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
      let maxValue = this.data[0];
      this.data[0] = this.data.pop();
      this.heapifyDown(0);
      return maxValue;
  }
  heapifyDown(idx){
      while(true){
          let largest = idx;
          let left = this.getLeftChildIndex(idx);
          let right = this.getRightChildIndex(idx);
          if(left < this.data.length && this.data[left] > this.data[largest]){
              largest = left;
          }
          if(right < this.data.length && this.data[right] > this.data[largest]){
              largest = right;
          }
          if(largest !== idx){
              this.swap(idx, largest);
              idx = largest;
          }else{
              break;
          }
      }
  }
  isEmpty(){
      return this.data.length === 0;
  }
}