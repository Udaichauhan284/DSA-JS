/* 3217 Delete Nodes From Linked List Present in Array
06 sept 2024, leetcode POTD, Medium, Linked List, Array

Input: nums = [1,2,3], head = [1,2,3,4,5]

Output: [4,5]
*/

function ListNode(val,next){
  this.val = (val === undefined) ? 0 : null;
  this.next = (next === undefined) ? null : next;
}

/*IN this first we need to check the head, and need to handle head first
and then we point curr to head and then handle curr
TC: O(n), SC: O(n) set for again agian accessing the nums arr to set
*/
const modifiedList = (nums, head) => {
  let numSet = new Set();
  let len = nums.length;
  for(let i=0; i<len; i++){
    numSet.add(nums[i]);
  }

  //handle head first, what if we need to delete the head only
  while(head !== null && numSet.has(head.val)){
    let temp = head; //tale the curr head in temp
    head = head.next; //need to move to next head
    delete(temp); //delete the unhinged node head
  }

  //need to handle curr, what if we need to delete node, other than head
  let curr = head;
  while(curr !== null && curr.next !== null){
    //before moving the curr to next, we are checking that what oif next one we need to delete
    if(numSet.has(curr.next.val)){
      //need to delete that curr.next one
      let temp = curr.next;
      curr.next = curr.next.next;
      delete(temp);
    }else{
      curr = curr.next;
    }
  }
  return head;
}






/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
/*IN this first we need to check the head, and need to handle head first
and then we point curr to head and then handle curr
TC: O(n), SC: O(n) set for again agian accessing the nums arr to set
*/
var modifiedList1 = function(nums, head) {
  let len = nums.length;
  let numSet = new Set();
  for(let i=0; i<len; i++){
      numSet.add(nums[i]);
  }
  //need to handle head, what if we need to delete the head
  while(head !== null && numSet.has(head.val)){
      let temp = head; //taking currHead as temp
      head = head.next; //moving head to next one
      delete(temp); //deleting currHead
  }

  //need to handle curr, next node other then head
  let curr = head;
  while(curr !== null && curr.next !== null){
      if(numSet.has(curr.next.val)){
          let temp = curr.next; //curr.next need to delete
          curr.next = curr.next.next; //move the curr.next to nextone
          delete(temp);
      }else{
          curr = curr.next;
      }
  }
  return head;
  
};