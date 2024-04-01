/* 155 Min Stack
push,pop,top,getMin - O(1)
sc : O(n)
we take two stack for implement this min Stack
one is stack and one is minStack - in minstack, we push the min value till that curr val of stack, min of minStack top and curr val.
*/
class MinStack {
  constructor(){
    this.stack = [];
    this.minStack = [];
  }

  push(val){
    if(this.stack.length === 0){
      this.stack.push(val);
      this.minStack.push(val);
    }else{
      this.stack.push(val);
      //now in minSatck, put the min elem till the val, corresponding to stack vale, min of minStack top and val
      this.minStack.push(Math.min(this.minStack[this.minStack -1],val));
    }
  }

  pop(){
    if(this.stack.length === 0) return null;
    this.minStack.pop();
    return this.stack.pop();
  }

  top(){
    return this.stack[this.stack.length - 1];
  }
  getMin(){
    return this.minStack[this.minStack.length - 1];
  }
}