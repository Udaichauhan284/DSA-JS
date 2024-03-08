/* 206 Reverse a Linked List
This can be solve by 3 method
1. Brute - use of Stack O(2n), O(n)
2. use of Iterative change of link O(n) O(1)
3. use of Recursive O(n) O(1)
*/
const reverseLLUseOfStack = (head) => {
  if(head === null || head.next === null){
    return head;
  }
  let current = head;
  let st = [];

  while(current !== null){
    st.push(current.data);
    current = current.next;
  }
  current = head;
  while(current !== null){
    current.data = st.pop();
    current = current.next;
  }
  return head;
}

//change of linkage O(n). O(1)
const reverseLLChangeLink = (head) => {
  if(head === null || head.next === null){
    return head;
  }
  let current = head;
  let prev = null;
  let next = null;
  while(current !== null){
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

//use of recursive way O(n) O(1)
const reverseLLUseOfRecursive = (head) => {
  if(head === null || head.next === null){
    return head;
  }

  let newNode = reverseLLUseOfRecursive(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;

  return newNode;
}
