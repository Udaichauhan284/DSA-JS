/* 	
Kth smallest element in an array.
nums=[3,2,1,5,6,4], k=2
o/p: 2 (return the second smallest element)
*/
//1. sort the nums in asscending order
const method1 = (nums,k) => {
  nums.sort((a,b) => a-b);

  return nums[k-1];
}
console.log(method1([3,2,1,5,6,4],2)); //2

//Method 2. use of MaxHeap
class MaxHeap{
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
    while(this.data[currIndex] > this.data[this.getParentIndex(currIndex)]){
      this.swap(currIndex, this.getParentIndex(currIndex));

      currIndex = this.getParentIndex(currIndex);
    }
  }
  poll(){
    if(this.data.length === 0) return null;
    if(this.data.length === 1) return this.data.pop();

    let maxValue =this.data[0];
    this.data[0] = this.data.pop();

    this.heapifyDown(0);
    return maxValue;
  }
  heapifyDown(currIndex){
    let biggestIndex = currIndex;
    let leftChild = this.getLeftChildIndex(currIndex);
    let rigthChild = this.getRightChildIndex(currIndex);

    if(leftChild < this.data.length && this.data[leftChild] > this.data[biggestIndex]){
      biggestIndex = leftChild;
    }
    if(rigthChild < this.data.length && this.data[rigthChild] > this.data[biggestIndex]){
      biggestIndex = rigthChild;
    }

    if(biggestIndex !== currIndex){
      this.swap(biggestIndex,currIndex);
      this.heapifyDown(biggestIndex);
    }
  }
  peek(){
    return this.data[0];
  }
}
const kthSmallest = (nums,k) => {
  let maxHeap = new MaxHeap();
  for(let num of nums){
    maxHeap.push(num);

    if(maxHeap.data.length > k){
      maxHeap.poll();
    }
  }
  return maxHeap.peek();
}
console.log(kthSmallest([3,2,1,5,6,4],2));