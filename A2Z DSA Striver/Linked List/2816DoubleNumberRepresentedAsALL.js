/* 2816. Double a Number Represented as a Linked List
07/May.2024 - Leetcode - Daily code challeneg - TOPIC: LINKED LIST
Input: head = [1,8,9]
Output: [3,7,8]
Explanation: The figure above corresponds to the given linked list which represents the number 189. Hence, the returned linked list represents the number 189 * 2 = 378.
*/
 //My Method- first convert the LL to nummber then do the multiply then again change that num to LL, but this will run for small number.
var doubleIt = function(head) {
    let num = '';
    let curr = head;
    while(curr){
        num += curr.val;
        curr = curr.next;
    }
    num = +num; //change that string to number
    let multipleBy2 = num*2;
    
    //now convert number to LL.
    //first changin that num to arr, so that easy traverse.
    let digits = String(multipleBy2).split('').map(Number);
    let newHead = null;
    curr = null;
    for(let digit of digits){
        const newNode = new ListNode(digit);

        if(!newHead){
            newHead = newNode;
            curr = newHead;
        }else{
            curr.next = newNode;
            curr = newNode;
        }
    }
    return newHead;
};

//Method 1- traverse right to left, so this measn we need to use reverseLL function, TC: O(n), SC: O(1), O(n) just for recursion.
const doubleIt1 = (head) => {
  head = reverseLL(head);
  let curr = head;
  let prev = null;
  let carry = 0;
  while(curr){
    let newValue = curr.val * 2 + carry;
    curr.val = newValue % 10;
    if(newValue >= 10){
      carry = 1;
    }else if(newValue >= 20){
      carry = 2;
    }else{
      carry = 0;
    }
    prev = curr;
    curr = curr.next;
  }
  if(carry !== 0){
    const newNode = new ListNode(carry);
    prev.next = newNode;
  }

  return reverseLL(head);
}
function reverseLL(head){
  if(head === null || head.next === null){
    return head;
  }

  let last = reverseLL(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}

//Method 2- traverse from Left to right and checking the newValue if bigger 10 so add 1(carry in prev one), maintain the prev one. TC: O(n), SC: O(1)
const doubleIt2 = (head) => {
  let curr = head;
  let prev = null;
  while(curr){
    let newValue = curr.val * 2;
    if(newValue < 10){
      curr.val = newValue;
    }else if(prev !== null){
      curr.val = newValue%10;
      prev.val += 1;
    }else {
       //starting one get biiger value,a dn prev is null
      const newNode = new ListNode(1);
      newNode.next = curr;
      curr.val = newValue%10;
       //now change the head
      head = newNode;
    }
    //after one iteration, update the prev
    prev = curr;
    //move the curr
    curr = curr.next;
  }
  return head;
}