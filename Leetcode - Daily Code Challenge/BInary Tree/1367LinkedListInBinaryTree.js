/* 1367 Linked List in Binary Tree
07 Sept 2024, Leetcode POTD, Binary Tree, Linked List

Given a binary tree root and a linked list with head as the first node. 
Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False.
In this context downward path means a path that starts at some node and goes downwards.
Input: head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
Output: true
Explanation: Nodes in blue form a subpath in the binary Tree. 
*/

//Definition of Linked List
function ListNode(val,next){
  this.val = (val === undefined) ? 0 : val;
  this.next = (next === undefined) ? null : next;
}
//Definition of Binary Tree
function TreeNode(val,left,right){
  this.val = (val===undefined) ? 0 : val;
  this.left = (left === undefined) ? null : left;
  this.right = (right === undefined) ? null : right;
}
/*In this we use recursion for checking the head and root value
and use ot for moving downward with same main function left and right
TC: for each node we are trying to find the m LL :- O(n*m)
SC: O(n+m) n for binary tree and m for LL node -> recursion stack
space
*/
const isSubPath = (head, root) => {
  if(root === null){
    return null;
  }
  let ans = (check(head,root) || isSubPath(head,root.left) || isSubPath(head,root.right));
  return ans;
}
function check(head, root){
  if(head === null){
    return true; //measn we exhast the LL
  }
  if(root === null){
    //if logic comes to this if, measn above if return not work measn
    //LL not exhasted and root exhasted we need to return the false
    return false;
  }
  //now check head.val with root.val
  if(head.val !== root.val){
    return false;
  }
  //now check for head.next and rootleft and right
  return (check(head.next, root.left) || check(head.next, root.right));
}