/* Binary Heap - this is a complete Binary Tree, element push from left to right, there are two types of Heap - MAX_HEAP and MIN_HEAP, in max head parent node will be greater than > child node and i min head parent node always be smaller than child node.
Operation
push : O(logn)
peek : O(1)
poll : means remove the top and place last elem at top and then do heapify : O(logn)
search : O(n)
*/
class Heap{
  constructor(){
    this.data = [];
  }

  getParentIndex(idx){
    return Math.floor((idx-1) / 2);
  }
  getLeftChildIndex(idx){
    return (2*idx)+1;
  }
  getRightChildIndex(idx){
    return (2*idx)+2;
  }

  swap(i1,i2){
    let temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }

  push(key){
    this.data[this.data.length] = key; //at last
    this.heapifyUp();
  }
  heapifyUp(){
    let currIndex = this.data.length-1;
    while(this.data[currIndex] > this.data[this.getParentIndex(currIndex)]){
      this.swap(currIndex, this.getParentIndex(currIndex));

      currIndex = this.getParentIndex(currIndex);
    }
  }
    //remove the frist element
    poll(){
      if(this.data.length === 0) return null;
      if(this.data.length === 1) return this.data.pop();
      const maxValue = this.data[0];
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
