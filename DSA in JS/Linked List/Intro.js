/* Linnked List
-A linked list is a linear data structure that includes a series of connected nodes.
-Each node consists of data value and a pointer that points to the next node.
-The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure.
-Random access of elements is not feasible and accessing an element has linear time complexity.
-The linked list data structure supports three main operations
a.Insertion: to add an element at the beginning, end or at a given index in the list
b. Deletion: to remove an item given its index or value.
c. to find an element given its value.

-- Usage
- all applications of both stack and queue are application of linked list
- image viewer
*/

//this is node class
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

//linked list clas
class LinkedList{
  constructor() {
    this.head = null;
    this.size = 0
  }
  isEmpty(){
    return this.size === 0;
  }
  getSize(){
    return this.size;
  }
  //adding node at the start of the list, empty list
  prepend(value){ //O(1)
    const node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
    }else{ //if list is not empty
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //adding element at the last of list
  append(value){ //O(n)
    const node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
    }else{ //list not empty and adding at last
      let prev = this.head;
      while(prev.next){
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value,index){
    if(index < 0 || index > this.size){
      return "Index is invalid"
    }
    if(index === 0){
      this.prepend(value); //adding node at first
    }else{
      const node = new Node(value);
      let prev = this.head;
      for(let i=0; i<index-1; i++){
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  //remove the element
  removeFrom(index){
    if(index < 0 || index >= this.size){
      return "Invalid Index";
    }
    let removeNode;
    if(index === 0){
      removeNode = this.head;
      this.head = this.head.next;
    }else{
      let prev = this.head;
      for(let i=0; i<index-1; i++){
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }

  //removing value
  removeValue(value){
    if(this.isEmpty()){
      return "List is empty"
    }
    //removing value in head node
    if(this.head.value === value){
      this.head = this.head.next;
      this.size--;
      return value;
    }
    //removing value in node after head
    else{
      let prev = this.head;
      while(prev.next && prev.next.value !==value){
        prev = prev.next;
      }
      if(prev.next){
        removedNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
    }
  }

  //searching in Linked List
  search(value){
    if(this.isEmpty()){
      return "List is empty";
    }else{
      let curr = this.head;
      let i=0;
      while(curr){
        if(curr.value === value){
          return `Index of Value ${i}`;
        }
        curr = curr.next;
        i++;
      }
      return "Value not found in Linked List";
    }
  }

  //reversing the linked list
  reverseList(){
    let prev = null;
    let curr = this.head;
    while(curr){
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  print(){
    if(this.isEmpty()){
      console.log("List is empty")
    }else{
      let curr = this.head;
      let listValue = "";
      while(curr){
        listValue += `${curr.value} `
        curr = curr.next;
      }
      console.log(listValue);
    }
  }
}

const list = new LinkedList();
console.log("List is empty? ", list.isEmpty());
console.log("List Size ", list.getSize());
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
list.append(10);
list.append(20);
list.append(30);
list.print(); //30 20 10 - because we are adding element in the beginning
list.insert(40,0);
list.print();
list.insert(7,2);
list.print();

console.log(list.removeFrom(10));
console.log(list.search(20));
list.reverseList();
list.print();
