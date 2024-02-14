/* Stack
-The stack data structure is a squential collection of elements that follows the principle of Last In First Out(LIFO)
-The last element inserted into the stack is the first element to be removed.
-A stack of plates. The last Plate placed on top of the stack is also the first plate removed from the stack.
-Stack is an abstract data type. It is defined by its behaviour rather than being a mathematical model.
-The stack Data structure two main operations.
1. Push, which adds an element to the collection.
2. Pop, which removes the most recently added element from the collection.
3. Peek - to get the elements in top of the stack.

-- Stack Usage
Browser History tracking
Undo operation when typing
Expression Conversion
Call stack in JS runtime.
*/

class Stack {
  constructor() {
    this.element = [];
    this.size = 0;
  }
  push(data){
    this.element.push(data);
    this.size+=1; //this.size++
  }
  pop(){
    if(this.size === 0){
      return("No Element to Pop");
    }
    this.size-=1;
    return this.element.pop();
  }
  peek(){
    if(this.size === 0){
      throw("No element to Peek");
    }
    return this.element[this.size-1]
  }
  isEmpty(){
    return this.size === 0;
  }
  print(){
    console.log(this.element);
  }
}

//create a new stack
const myStack = new Stack();

//push element into stack
myStack.push(3);
myStack.push(4);
myStack.push(5);

//display the stack
console.log("Stack after the push method");
myStack.print();

//Pop the element
console.log("Pop Element" , myStack.pop());

//check the stack is empty or not
console.log(myStack.isEmpty());

//display stack after the pop
myStack.print();