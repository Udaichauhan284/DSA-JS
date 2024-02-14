/* Queue
-The queue data structure is a sequential collection of elements that follows the principle of First In First Out
-The first element inserted into the queue is the first element to be removed.
-A queue of people. people enter the queue at one end(rear/tail) and leave the queue from the other end(front/head).
-Queue is an abstract data type. It is defined by its behaviour rather than being a mathematical model.
-The queue data structure supports two main operations
1.Enqueue, which adds an element to rear/ttail of the collection.
2.Dequeue, which removes an element from the front/head of the collection.

Queue Usage
a.Printers
b.CPU task scheduling
c.Callback queue in JS runtime
*/

//This way of creating Queue will give more time complexity.
// class Queue{
//   constructor() {
//     this.items = [] //initialzing the list/ array
//   }
//   enqueue(element){
//     this.items.push(element);
//   }
//   dequeue(){
//     return this.items.shift(); //first in first out
//   }
//   isEmpty(){
//     return this.items.length === 0;
//   }
//   peek(){
//     if(!this.isEmpty()){
//       return this.items[0];
//     }
//     return null;
//   }
//   size(){
//     return this.items.length;
//   }
//   print(){
//     console.log(this.items.toString());
//   }
// }

//Creating queue, using objects so it will give less time complexity
class Queue{
  constructor(){
    this.items = {}
    this.rear = 0;
    this.front = 0;
  }
  enqueue(element){
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue(){
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty(){
    return this.rear - this.front === 0
  }
  peek(){
    if(!this.isEmpty()){
      return this.items[this.front];
    }
    return null;
  }
  size(){
    return this.rear - this.front
  }
  print(){
    console.log(this.items);
  }
}

const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
console.log(myQueue.peek()); //peek of queue
myQueue.print();
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.print();