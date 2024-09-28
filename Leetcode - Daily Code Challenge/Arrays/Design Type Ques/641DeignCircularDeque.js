/* 641. Design Circular Deque
28 Sept 2024, Leetcode POTD, Array, Designing, Linked List

*/

/*In this we take a arr and frint and rear poniter
for insertinFront and all method, Just this is a cicular 
deque we need to keep in mind for Increment (+1) % size
for decrement (-1 + size) % size
*/

class MyCircularDeque{
  constructor(k){
      this.k = k;
      this.deq = Array(k).fill(0)
      this.front = 0;
      this.rear = k-1;
      this.currentSize = 0; //for seeing the currsize of det
  }
  insertFront(value){
      if(this.isFull()){
          return false;
      }
      //front pointer move left, so decrement
      this.front = (this.front - 1 + this.k) % this.k;
      this.deq[this.front] = value;
      this.currentSize++;
      return true;
  }
  insertLast(value){
      if(this.isFull()){
          return false;
      }
      //rear pointer move right, so increment
      this.rear = (this.rear + 1) % this.k;
      this.deq[this.rear] = value;
      this.currentSize++;
      return true;
  }
  deleteFront(){
      if(this.isEmpty()){
          return false;
      }
      //front pointer move right, so increment
      this.front = (this.front + 1) % this.k;
      this.currentSize--;
      return true;
  }
  deleteLast(){
      if(this.isEmpty()){
          return false;
      }
      //rear pointer move left, so decrement
      this.rear = (this.rear - 1 + this.k) % this.k;
      this.currentSize--;
      return true;
  }
  getFront(){
      if(this.isEmpty()){
          return -1;
      }
      return this.deq[this.front];
  }
  getRear(){
      if(this.isEmpty()){
          return -1;
      }
      return this.deq[this.rear];
  }
  isEmpty(){
      return this.currentSize === 0;
  }
  isFull(){
      return this.currentSize === this.k;
  }
}