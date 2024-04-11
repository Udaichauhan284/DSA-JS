/* 215 Kth Largest Element in an array
nums=[3,2,1,5,6,4], k=2 retrn 2nfd largest element
o.p: 5

1. method 1 : use of decreasing sort, retrun nums[k-1] elem
2. mthod 2: use of minHeap, in minHeap by size of k, we get the second largest elem on top. 5->6 so we return the top this.data[0];
*/
const method1 = (nuns,k) => {
  nums.sort((a,b) => b-a);

  return nums[k-1];
}

//MinHeap Implementation
class MinHeap{
  constructor(){
    this.data = [];
  }
  getParentIndex(idx){
    return Math.floor((idx-1)/2);
  }
  getLeftChildIndex(idx){
    return 2*idx+1;
  }
  getRightChildIndex(idx){
    return 2*idx+2;
  }
  swap(i1,i2){
    let temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }
  push(key){
    this.data[this.data.length] = key;
    this.heapifyUp();
  }
  heapifyUp(){
    let currIndex = this.data.length-1;
    while(this.data[currIndex] < this.data[this.getParentIndex(currIndex)]){
      this.swap(currIndex, this.getParentIndex(currIndex));
      currIndex = this.getParentIndex(currIndex);
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
  heapifyDown(currIndex){
    let smallestIndex = currIndex;
    let leftChild = this.getLeftChildIndex(currIndex);
    let rightChild = this.getRightChildIndex(currIndex);

    if(leftChild < this.data.length && this.data[leftChild] < this.data[smallestIndex]){
      smallestIndex = leftChild;
    }
    if(rightChild < this.data.length && this.data[rightChild] < this.data[smallestIndex]){
      smallestIndex = rightChild;
    }
    if(smallestIndex !== currIndex){
      this.swap(smallestIndex, currIndex);
      this.heapifyDown(smallestIndex);
    }
  }
  peek(){
    return this.data[0];//top element
  }
}
 //Approach to use of MinHeap, in minHeap smallest value will be on top, so we take a minHeap of size k , when minHeap size increase , we pop, at atlast we will get the top element which is k largest elem O(nlogn)
var findKthLargest = function(nums, k) {
    let minHeap = new MinHeap();

    for(let num of nums){
      minHeap.push(num);

      if(minHeap.data.length > k){
        minHeap.poll();
      }
    }
    return minHeap.peek();
};