/* 237. Delete Node in a Linked List
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
*/
 //on 5May2024- see take a new nextNode and point that to node.next.next, then change the value of curr Node node.val = node.next.val, now point that currNode to nextNode. Done
const deleteNode = (node) => {
  let nextNode = node.next.next; //new node
  node.val = node.next.val; //curr node value change
  node.next = nextNode; //pointing next of currNode to variable nextNode. 
}