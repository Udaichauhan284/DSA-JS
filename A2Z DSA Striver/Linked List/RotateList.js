/* 61. Rotate List
rotate the list to the right by kth places.

1. Identify the len of LL and tail of the LL, point the tail node to head.
2. find the kth node - len-k ex len=5 k=2 , node =3rd node, point that 3rd node to null and before that next node of 3rd node make that head.
suppose k is multiple of len , then in rotation of LL no change.
k=14 k%len = 4, 4th node
TC O(2n), SC : O(1)
*/
//find kthNode Functiom
function findKthNode(temp, k){
  let cnt=1;
  while(temp !== null){
    if(cnt === k) return temp;
    cnt++;
    temp = temp.next;
  }
  return temp;
 }
var rotateRight = function(head, k) {
    //edge case
    if(head === null || head.next === null) return head;

    //first find the tail and len
    let len=1;
    let tail=head;
    while(tail.next !== null){
      len++;
      tail = tail.next;
    }
    if(k%len === 0) return head; //no change if k is multiple of len
    k = k%len; // is k=14 , k=4
    tail.next = head; //now we get the tail node, pointing that node to head.

    //find the kth node, becasue that kth node is last node.
    let newLastNode = findKthNode(head,len-k);

    //now assign head to newLastNode next node.
    head = newLastNode.next;
    newLastNode.next = null;

    return head;
};

