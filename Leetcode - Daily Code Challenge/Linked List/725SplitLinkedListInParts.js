/* 725 Spilt Linked List In Parts
08 Sept 2024, Leetcode POTD, Linked List, Meduim

Input: head = [1,2,3], k = 5
Output: [[1],[2],[3],[],[]]
Explanation:
The first element output[0] has output[0].val = 1, output[0].next = null.
The last element output[4] is null, but its string representation as a ListNode is [].
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*First we count the len of ll and then we find out how many node we need to put in each
and how many remainingNode will be there, then we start loop till and start puting in result
inner loop we use nodeBucket+remainingNode
TC: O(l + k), SC: O(1) ~ O(n) just for result arr.
*/
var splitListToParts = function(head, k) {
  let len = 0;
  let curr = head;
  //count the len of Linked List
  while(curr){
      len++;
      curr = curr.next;
  }

  let nodeInBucket = Math.floor(len / k);
  let remainingNode = len % k;
  let result = Array(k).fill(null);
  //now we need to split LL and put in result
  let prev = null;
  curr = head;
  for(let i=0; i<k && curr; i++){
      result[i] = curr;
      for(let count=1; count <= nodeInBucket + (remainingNode > 0 ? 1 : 0); count++){
          prev = curr;
          curr = curr.next;
      }
      prev.next = null; //stop after required nodeInBucket + remainingNode
      remainingNode--;
  }
  return result;
};
