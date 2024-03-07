/* 237. Delete Node in a Linked List
4->5->1->9, node - 5
o/p 4->1->9
*/
//O(1),O(1)
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
let deleteNode = function(node){
  let nextNode = node.next.next;
  node.val = node.next.val;
  node.next = nextNode;
}