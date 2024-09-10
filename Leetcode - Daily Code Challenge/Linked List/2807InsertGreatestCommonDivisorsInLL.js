/* 2807 Insert Greatest Common Divisors in Linked List
10 Sept 2024, Leetcode POTD, medium, Linked List, Math

Given the head of a linked list head, in which each node contains an integer value.
Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.
Return the linked list after insertion.
The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

Input: head = [18,6,10,3]
Output: [18,6,6,2,10,1,3]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* Method 1- use of iteration method, we take two pointer for 
maintaining the currNode and NextNode as we need to push a node in
between of these Node, adn we do this in while loop
TC: O(len of LL) ~ O(n), SC: O(1)
*/
var insertGreatestCommonDivisors = function(head) {
  //base check
  if(head === null || head.next === null){
      return head;
  }
  let currNode = head;
  let nextNode = head.next;
  while(nextNode !== null){
      let gcd = gcdFunc(currNode.val, nextNode.val);
      let gcdNode = new ListNode(gcd);
      //now push the gcdNOde in between
      currNode.next= gcdNode;
      gcdNode.next = nextNode;
      //move the pointer
      currNode = nextNode;
      nextNode = nextNode.next;
  }
  return head;
};
function gcdFunc(a, b){
  if(b === 0){
      return a;
  }
  return gcdFunc(b, a%b);
}



/*Method 2 use of recursiove function, take a temp var and put 
head.next, means nextNode and call main function for that one
TC: O(n), SC: O(n) recursion stack space
*/
var insertGreatestCommonDivisors = function(head) {
  if(head === null || head.next === null){
      return head;
  }
  //in temp we are calling again function for next value
  let temp = insertGreatestCommonDivisors(head.next);

  let gcd = gcdFunc(head.val, head.next.val);
  let gcdNode = new ListNode(gcd);

  head.next = gcdNode;
  gcdNode.next = temp;

  return head;
};
function gcdFunc(a,b){
  if(b===0){
      return a;
  }
  return gcdFunc(b,a%b);
}