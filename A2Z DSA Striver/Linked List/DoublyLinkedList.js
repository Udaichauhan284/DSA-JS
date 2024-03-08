// Doubly Linked list
class Node {
  constructor(data){
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //add element at start
  addFirst(data){
    const newNode = new Node(data);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  //add at last
  addLast(data){
    const newNode = new Node(data);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  //remove the first node
  removeFirst(){
    if(!this.head){
      return;
    }
    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
    }else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
  }

  //remove at last
  removeLast(){
    if(!this.head){
      return;
    }
    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
    }else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
  }

  //delete node at given index
  deleteAt(index){
    if(index < 0 || index >= this.size){
      return;
    }
    if(index === 0){
      this.removeFirst();
    }
    else if(index === this.size-1){
      this.removeLast();
    }else {
      let current = this.head;
      for(let i=0; i<index; i++){
        current = current.next;
      }
      current.next.prev = current.prev;
      current.prev.next = current.next;
      this.size--;
    }
  }

  getSize(){
    return this.size;
  }

  //printing the doubly linked list
  printDoublyLinkedList(){
    let current = this.head;
    let listValue = "";
    while(current){
      listValue += `${current.data} `;
      current = current.next;
    }
    console.log(listValue);
  }
}

const doublyList = new DoublyLinkedList();
doublyList.addFirst(2);
doublyList.addFirst(1);
doublyList.addLast(4);
doublyList.addLast(3);

console.log("Original Doubly Linked List");
doublyList.printDoublyLinkedList();

console.log("This Size of Doubly Linked List - " + doublyList.getSize());

doublyList.removeFirst();
doublyList.removeLast();
console.log("Adter Modifying the Linked List ");
doublyList.printDoublyLinkedList();
