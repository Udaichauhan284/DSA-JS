/* 2181. Merge Nodes in Between Zeros
04 July 2024 Leetcode POTD, Linked List, Recursion
Input: head = [0,3,1,0,4,5,2,0]
Output: [4,11]
Explanation: 
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 3 + 1 = 4.
- The sum of the nodes marked in red: 4 + 5 + 2 = 11.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*Method 1: use of Recursion, we initial head to head.next and intial
temp to head, and this temp will do sum till temp.val !== 0
and then head.next = same function
TC: O(n), SC: O(1)+O(n)auxilary Space
*/
const mergeNodes = (head) => {
  head = head.next;
  //base case
  if(head === null){
    return head;
  }
  let temp = head;
  let sum = 0;
  while(temp.val !== 0){
    sum += temp.val;
    temp = temp.next;
  }
  head.val = sum;
  head.next = mergeNodes(temp);
  return head;
};


/* Method 2 - use of Simple loop and use of Two Pointer P1 and P2
TC: O(n), SC: O(1)
*/
var mergeNodes1 = function(head) {
  let P1 = head.next;
  let P2 = P1;
  while(P2 !== null){
      let sum = 0;
      while(P2 !== null && P2.val !== 0){
          sum += P2.val;
          P2 = P2.next;
      }
      P1.val = sum;
      P2 = P2.next;
      P1.next = P2;
      P1 = P1.next;
  }
  return head.next;
};