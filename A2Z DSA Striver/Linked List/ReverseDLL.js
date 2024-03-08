//Reverse the Doubly Linked List 
//Brute Approach - O(2n), SC O(n) use of stack - replace of value

class Node {
  constructor(data,next=null, prev=null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

//function to converte DLL to Arr
function convertArr2DLL(arr){
  let head = new Node(arr[0]);
  let prev = head;

  for(let i=1; i<arr.length; i++){
    // create a new node with data from the arr and set its prev to the previous node
    let temp = new Node(arr[i], null, prev);

    //update the next pointer of the previous node to point to the new node
    prev.next = temp;

    prev = temp;
  }
  return head;
}

//print
function print(head){
  let current = head;
  while(current !== null){
    console.log(current.data + " ");
    current = current.next;
  }
}

//reverse the DLL
function reverseDLL(head){
  if(head === null || head.next === null){
    return head;
  }

  let st = [];
  let temp = head;

  while(temp !== null){
    st.push(temp.data);
    temp = temp.next;
  }
  temp = head;

  //second iteration : pop data from stack
  while(temp !== null){
    temp.data = st.pop();
    temp = temp.next;
  }

  return head;
}

//Optimize Approach to Reverse the DLL - O(n), O(1)
function optimizeReverseDLL(head){
  if(head === null || head.next === null){
    return head;
  }
  let prev = null;
  let current = head;
  while(current !== null){
    //store the refe to the previous node
    prev = current.prev;
    //swap the previous and next pointer
    current.prev = current.next;
    current.next = prev;
    //move to the next mode in the original list
    current = current.prev;
  }
  return prev.prev; //after the loop current point at null. 
}

const arr = [12,5,6,8,4];
let head = convertArr2DLL(arr);

console.log("Doubly Linked List Before ");
print(head);

console.log("Doubly Linked List after Reversing ");
// head = reverseDLL(head);
head = optimizeReverseDLL(head);
print(head);