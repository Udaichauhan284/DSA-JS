/* 234 Palindrome Linked List
1->2->2->1 o/p - true;
1->2 o/p false
*/
//Brute Method - used of stack to reverse and check the stack top to linked list head. O(n), O(n)
const isPalindrome = (head) => {
  let temp = head;
  let st = [];

  while(temp !== null){
    st.push(temp.val);
    temp = temp.next;
  }
  temp = head;
  while(temp !== null){
    if(temp.val !== st.pop()){
      return false;
    }
    temp = temp.next;
  }
  return true;
}

//Optimal way - find the middle, then next of middle reverse the list and see if it is equal to first half and second half.
//TC O(n) SC O(1)
// for reversiving i use recurisve method for reverse
const recurisveReverse = (head) => {
  if(head === null || head.next === null){
    return head;
  }

  const newNode = recurisveReverse(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;

  return newNode;
}
const OptimizeIsPalindrome = (head) => {
  if(head === null || head.next === null){
    return true;
  }

  //find the middle
  let slow = head;
  let fast = head;
  //.    even list.           odd list
  while(fast.next !== null && fast.next.next !== null){
    slow = slow.next;
    fast = fast.next.next;
  }

  //reverse the after middle
  const newNode = recurisveReverse(slow.next);
  let first = head; // head of first half
  let second = newNode; //head of second half
  while(second !== null){
    if(first.val !== second.val){
      recurisveReverse(newNode);
      return false;
    }
    first = first.next;
    second = second.next;
  }
  recurisveReverse(newNode);
  return true;
}