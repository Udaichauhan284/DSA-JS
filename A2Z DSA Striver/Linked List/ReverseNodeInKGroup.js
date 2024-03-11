/* 25. Reverse Nodes in k-group
*/
//Optimize way first find the kth node, reverse till that node O(n) + O(n) = O(2n) ~~ O(n), SC : O(1)
var reverseKGroup = function(head, k) {
  //find the kth node
  function findKthNode(temp,k){
    k -= 1; //decrement k as we start from 1st node
    while(temp !== null && k>0){
      k--;
      temp = temp.next;
    }
    return temp;
  }

  //reverse of the part of linked list
  function reverseLL(head){
    let prev = null;
    let current = head;
    let next = null;
    while(current !== null){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }

  //now main code start, revser the kth group LL
  let temp = head;
  let prevLast = null;
  while(temp !== null){
    let kthNode = findKthNode(temp,k);
    
    if(kthNode === null){ //if kth node is null and not complete group
      if(prevLast){
        prevLast.next = temp;
      }
      break;
    }

    let nextNode = kthNode.next;
    kthNode.next = null; //unlink that part of list

    reverseLL(temp);

    //adjust th head if the reversed start from start
    if(temp === head){
      head = kthNode;
    }else {
      prevLast.next = kthNode; //link the last node of prevlist to next reverse group
    }

    prevLast = temp;
    temp = nextNode; //move to the last group
  }
  return head;
};