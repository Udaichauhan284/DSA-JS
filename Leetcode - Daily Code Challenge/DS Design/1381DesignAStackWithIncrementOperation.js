/* 1381 Design a Stack With Increment Operaation
30 Sept 2024, Leetcode POTD, Design , Array, Stack
Notes in Stack

Input
["CustomStack","push","push","pop","push","push","push","increment","increment","pop","pop","pop","pop"]
[[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]
Output
[null,null,null,2,null,null,null,null,null,103,202,201,-1]
Explanation
CustomStack stk = new CustomStack(3); // Stack is Empty []
stk.push(1);                          // stack becomes [1]
stk.push(2);                          // stack becomes [1, 2]
stk.pop();                            // return 2 --> Return top of the stack 2, stack becomes [1]
stk.push(2);                          // stack becomes [1, 2]
stk.push(3);                          // stack becomes [1, 2, 3]
stk.push(4);                          // stack still [1, 2, 3], Do not add another elements as size is 4
stk.increment(5, 100);                // stack becomes [101, 102, 103]
stk.increment(2, 100);                // stack becomes [201, 202, 103]
stk.pop();                            // return 103 --> Return top of the stack 103, stack becomes [201, 202]
stk.pop();                            // return 202 --> Return top of the stack 202, stack becomes [201]
stk.pop();                            // return 201 --> Return top of the stack 201, stack becomes []
stk.pop();                            // return -1 --> Stack is empty return -1.
*/

class CustomStack{
  constructor(maxSize){
      this.maxSize = maxSize;
      this.data = [];
      this.topIndex = -1; //this will work as pointer 
  }
  size(){ //O(1)
      //return the len of data, for that use topIndex
      return this.topIndex+1; //atlast where is topIndex
      //+1 will the size of stack;
  }
  push(x){ //O(1)
      //push only when st size is less then maxSize
      if(this.size() < this.maxSize){
          this.data[++this.topIndex] = x;
          //increase the TopIndex = 0or1or2 ...
          //and initial x into That
      }
  }
  pop(){ //O(1)
      //pop only when stack if full, otherwise -1
      if(this.topIndex === -1){
          return -1; //measn no ele in stack
      }
      return this.data[this.topIndex--];
  }
  increment(k, val){ //this will give O(k or size)~ O(n)
      //we need to increase the val of k ele from bottom
      //to top of stack, but only increase till the size
      //of stack
      let limitIndex = Math.min(k, this.size());
      for(let i=0; i<limitIndex; i++){
          this.data[i] += val;
      }
  }
}

//trying increment method in O(1), by Using Lazy Propagation
//taking a incremeArr and assign k-1 index with val
class CustomStack{
  constructor(maxSize){
      this.maxSize = maxSize;
      this.data = [];
      this.incrementArr = [];
      this.topIndex = -1;
  }
  size(){
      return this.topIndex+1;
  }
  push(x){
      if(this.size() < this.maxSize){
          this.topIndex++;
          this.data[this.topIndex] = x;
          this.incrementArr[this.topIndex] = 0;
      }
  }
  pop(){
      if(this.size() === 0){
          return -1;
      }
      if(this.topIndex > 0){
          //do lazy propagation, means passing idx value
          //to idx-1;
          this.incrementArr[this.topIndex-1] += this.incrementArr[this.topIndex];
      }
      let topValue = this.data[this.topIndex]+this.incrementArr[this.topIndex];
      //now delete from st and incrementArr;
      this.topIndex--;
      // this.data[this.topIndex];
      // this.incrementArr[this.topIndex];
      return topValue;
  }
  increment(k, val) {
      // Increment the bottom k elements
      let minIndex = Math.min(k-1, this.topIndex);  // Use k-1 for zero-indexed array
      if (minIndex >= 0) {
          this.incrementArr[minIndex] += val;  // Add increment lazily at the appropriate index
      }
  }
}





