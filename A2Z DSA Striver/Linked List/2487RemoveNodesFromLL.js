/* 2487. Remove Nodes From Linked List
You are given the head of a linked list.

Remove every node which has a node with a greater value anywhere to the right side of it.

Return the head of the modified linked list.
Input: head = [5,2,13,3,8]
Output: [13,8]
Explanation: The nodes that should be removed are 5, 2 and 3.
- Node 13 is to the right of node 5.
- Node 13 is to the right of node 2.
- Node 8 is to the right of node 3.
*/
 //Brute Method - go to every node and see for right side , this will take O(n^2) time, not good idea.
//we need to check from the right side value, so do traverse from Right To Left side , when in LL we traverse from Right to Left, we have 3 approach 1. stack, 2. recursion, 3. reverse the list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
//Method 1. Use of Stack - O(n), SC: O(n)
const removeNodes = (head) => {
  let st = [];
  let curr = head;
  while(curr !== null){
    st.push(curr);
    curr = curr.next;
  }
  curr = st.pop();
  let max = curr.val;
  let resultHead = new ListNode(curr.val);

  while(st.length > 0){
    curr = st.pop();
    if(curr.val < max){
      continue; //skip that node
    }else{
      let newNode = new ListNode(curr.val);
      newNode.next = resultHead;
      resultHead = newNode;
      max = curr.val;
    }
  }
  return resultHead;
}

//Method 2- just use Recursion , pass head.next
const removeNodes1 = (head) => {
  if(head === null || head.next === null){
    return head;
  }

  let nextNode = removeNodes(head.next);
  if(head.val < nextNode.val){
    delete head;
    return nextNode;
  }

  //add that head to nextNode
  //update the head next, if head val is not small
  head.next = nextNode;
  return head;
}
//Method- reverse the linked list, ans follow the same stack using remove method. TC: O(n), Sc : O(1), O(n) just for reversing the list
const removeNodes2 = (head) => {
  head = reverseList(head);

  let maxi = 0;
  let curr = head;
  let prev = null;
  while(curr !== null){
    //update the max value
    maxi = Math.max(maxi, curr.val);

    if(curr.val < maxi){
      //ipdate the prev
      prev.next = curr.next;
      let temp = curr;
      curr = curr.next;
      delete temp;
    }else{
      prev = curr;
      curr = curr.next;
    }
  }
  return reverseList(head);
};
function reverseList(head){
  if(head === null || head.next === null){
    return head;
  }
  let last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}