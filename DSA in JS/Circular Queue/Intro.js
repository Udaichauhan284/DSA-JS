/* Circular Queue
The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element.
-Also referred to as circular buffer or ring buffer and follows the FIFO principle.
-A circular queue will reuse the empty block created during the dequeue operation.
-When working with queues of fixed maximun size, a circular queue is a great implementation choice.
-The circular queue data structure supports two main operations.
a.Enqueue, which adds an element to the rear/tail of the collection
b.Dequeue, which removes an elements from the front/head of the collection.

--Usage
Clock
Streaming Data
Traffic Lights
*/
class CircularQueue{
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.cuurentLength = 0;
    this.rear = -1;
    this.front = -1;
  }
  isFull(){
    return this.cuurentLength === this.capacity;
  }
  isEmpty(){
    return this.cuurentLength === 0
  }
  enqueue(element){
    if(!this.isFull()){
      this.rear = (this.rear + 1) % this.capacity; //circular queue it will enqueue element again at 0, thats why we doing modulo
      this.items[this.rear] = element;
      this.cuurentLength += 1;
      if(this.front === -1){
        this.front = this.rear;
      }
    }
  }
  dequeue(){
    if(!this.isEmpty()){
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front+1) % this.capacity;
    this.cuurentLength += 1;
    if(this.isEmpty()){
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  peek(){
    if(!this.isEmpty()){
      return this.items[this.front];
    }
    return null;
  }
  print(){
    if(this.isEmpty()){
      console.log("Queue is Empty");
    }else{
      let i=0;
      let str = "";
      for(i=this.front; i!==this.rear; i=(i+1)%this.capacity){
        str += this.items[i] +  " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const myCircularQueue = new CircularQueue(5);
console.log(myCircularQueue.isEmpty());

myCircularQueue.enqueue(10);
myCircularQueue.enqueue(20);
myCircularQueue.enqueue(30);
myCircularQueue.enqueue(40);
myCircularQueue.enqueue(50);
console.log("My Circular Queue ");
myCircularQueue.print();
console.log("Peek of Queue ", myCircularQueue.peek());

myCircularQueue.dequeue();
console.log("After Dequeue ");
myCircularQueue.print();