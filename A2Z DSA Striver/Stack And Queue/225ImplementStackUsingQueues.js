/* 225. Implement stack using Queues.
queues - first in first out.
stacks - last in first out.

we have to do stack funtionalities using Queues.
(push,top,pop,empty)

Push - O(n), Pop, Top, Empty - O(1)
*/
//first we have to implement our own Queue, in JS there is no queue, so we hae to first implement queue with using item objet, front and rear.
class Queues {
  constructor(){
    this.item = {}
    this.front = 0;
    this.rear = 0;
  }
  enqueue(x){
    this.item[this.rear] = x; //rear - beause , in queue element enter from rear. FIFO
    this.rear++;
  }
  dequeue(){
    if(this.isEmpty()){
      return null;
    }
    const item = this.item[this.front];
    delete this.item[this.front];
    this.front++;
    return item;
  }
  isEmpty(){
    return this.rear-this.front === 0;
  }
  size(){
    return this.rear - this.front;
  }
  peek(){
    if(!this.isEmpty()){
      return this.item[this.front];
    }
    return null;
  }
}
const MyStack = function(){
  //first using two queues
  this.q1 = new Queues();
  // this.q2 = new Queues(); for one queue approach

  //now using only one queue, just reverse the queue, dequeue from front and enqueue in back.
}
MyStack.prototype.push = function(x){
  // this.q2.enqueue(x);
  // while(this.q1.size() !== 0){
  //   this.q2.enqueue(this.q1.dequeue());
  // }
  // [this.q1, this.q2] = [this.q2, this.q1];

  //for one queue 
  this.q1.enqueue(x);
  for(let i=0; i<this.q1.size()-1; i++){
    this.q1.enqueue(this,q1.dequeue(i));
  }
}
MyStack.prototype.pop = function(){
  return this.q1.dequeue();
}
MyStack.prototype.top = function(){
  return this.q1.peek();
}
MyStack.prototype.empty = function(){
  return this.q1.isEmpty();
}