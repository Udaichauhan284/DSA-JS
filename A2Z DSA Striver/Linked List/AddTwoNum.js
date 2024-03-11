/* 2. Add Two Numbers
2 -> 4 -> 3  // number 342
5 -> 6 -> 4  // number 465
add both 342+465 = 807
7 -> 0 -> 8. // means linked list is reverse of number
means here i have to maintain the sum adn carry and new Node sum % 10 will come and in carry sum /10 will come. and last carry convert into newNode;
*/
const addTwoNumbers = (l1, l2) => {
  let t1 = l1;
  let t2 = l2;
  let dummy = new ListNode(-1);
  let current = dummy;
  let sum =0;
  let carry = 0;
  while(t1 !== null || t2 !== null){
    sum = carry;
    if(t1) sum += t1.val;
    if(t2) sum += t2.val;

    current.next = new ListNode(sum % 10);
    carry = Math.floor(sum /10);
    current = current.next;

    if(t1) t1 = t1.next;
    if(t2) t2 = t2.next;
  }
  if(carry){
    current.next = new ListNode(carry);
  }
  return dummy.next;
}