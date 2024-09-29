class Node{
  constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  addFirst(data){
    const newNode = new Node(data);
    if(this.head === null){
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    if(this.head){
      this.head.prev = newNode;
    }
    this.head = newNode;
  }
  addLast(data){
    const newNode = new Node(data);
    if(!this.head){
      thi.head = newNode;
      return;
    }
    let curr = this.head;
    while(curr.next){
      curr = curr.next;
    }
    curr.next = newNode;
    newNode.prev = curr;
  }
  addAt(data,index){
    if(index < 0 || index > this.size()){
      return;
    }
    const newNode = new Node(data);
    if(index === 0){
      newNode.next = this.head;
      if(this.head){
        this.head.prev = newNode;
      }
      this.head = newNode;
    }

    let curr = this.head;
    for(let i=0; i<index; i++){
      curr = curr.next;
    }
    newNode.next = curr.next;
    newNode.prev = curr;
    
    if(curr.next){
      curr.next.prev = newNode;
    }
    curr.next = newNode;
  }
  size(){
    let count = 0;
    let curr = this.head;
    while(curr){
      curr = curr.next;
      count++;
    }
    return count;
  }
  removeFirst(){
    if(!this.head){
      return;
    }
    this.head = this.head.next;
    if(this.head){
      this.head.prev = null;
    }
  }
  removeLast(){
    if(!this.head){
      return;
    }
    if(!this.head.next){
      this.head = null;
      return;
    }
    let curr = this.head;
    while(curr.next.next){
      curr = curr.next;
    }
    curr.next = null;
  }

  removeAt(index){
    if(index < 0 || index >= this.size()){
      return;
    }
    if(index === 0){
      if(this.head === null){
        return;
      }
      this.head = this.head.next;
      if(this.head){
        this.head.prev = null;
      }
    }
    let curr = this.head;
    for(let i=0; i<index; i++){
      curr = curr.next;
    }
    let nodeToRemove = curr.next;
    curr.next = nodeToRemove.next;
    if(nodeToRemove.next){
      nodeToRemove.next.prev = curr;
    }
  }
  
  print(){
    let curr = this.head;
    while(curr){
      console.log(curr.data);
      curr = curr.next;
    }
  }
}