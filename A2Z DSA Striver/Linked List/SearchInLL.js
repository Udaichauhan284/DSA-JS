class Node{
  constructor(data, next=null){
    this.data = data;
    this.next= next;
  }
}
function searchInLL(head,desiredElement){
  let temp = head;
  while(temp !== null){
    if(temp.data === desiredElement){
      return 1; //element found
    }
    temp = temp.next; //move to next node
  }
  return 0; //element not found;
}
const arr = [2,3,4,5];
const head = new Node(arr[0]);
head.next = new Node(arr[1]);
head.next.next = new Node(arr[2]);
head.next.next.next = new Node(arr[3]);

console.log(searchInLL(head,4)); //1 - true
console.log(searchInLL(head,10)); //0-false