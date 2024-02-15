const LinkedList = require('./LLWithTail');

class LinkedListWithStack{
  constructor() {
    this.list = new LinkedList();
  }
  push(value){
    this.list.prepend(value);
  }
  pop(){
    return this.list.removeFromFront();
  }
  isEmpty(){
    return this.list.isEmpty();
  }
  getSize(){
    return this.list.getSize();
  }
  print(){
    return this.list.print();
  }
  peek(){
    return this.list.head.value;
  }
}
const stack = new LinkedListWithStack();
console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);
stack.print();