/* 21 March 2024
206. Reverse the linked list
*/
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
//1. using the 3 variable approach next,prev,current
const reverseLL = (head) => {
  if(head === null || head.next === null){
    return head;
  }
  let next = null;
  let prev = null;
  let current = head;
  while(current !== null){
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

// 2. using recursion method using newNode and front variable
const reverseLinkedList = (head) => {
  if(head === null || head.next === null){
    return head;
  }

  let newNode = reverseLinkedList(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;

  return newNode;
}