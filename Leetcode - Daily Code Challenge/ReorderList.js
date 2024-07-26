/* 23 Mar 2024
143. Reorder List
L0 -> L1 -> L2 -> .... Ln-2 -> Ln-1 -> Ln
reorder it.
L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 -> ......

1 -> 2 -> 3 -> 4
reorder it
1 -> 4 -> 2 -> 3 -> null
*/

// TC O(n), SC O(n) this if for recursive reverse LL, without recurson O(1)
const reorderList = (head) => {
  if(head === null || head.next === null){
    return head;
  }

  //find the middle of LL
  let slow = head;
  let fast = head;
  while(fast.next !== null && fast.next.next !== null){
    slow = slow.next;
    fast = fast.next.next;
  }

  //now reverse the list
  let rev = reverseLL(slow.next);
  slow.next = null; //detaching the list from main list
  let curr = head;
  while(rev !== null){
    let tempCurr = curr.next;
    curr.next = rev;

    let tempRev = rev.next;
    rev.next = tempCurr;

    //move forward
    curr = tempCurr;
    rev = tempRev;
  }
  return head;
}

function reverseLL(head){
  if(head === null || head.next === null){
    return head;
  }

  let newNode = reverseLL(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;

  return newNode;

  //reversing LL without Recursion
  // let prev = null;
  // let next = null;
  // let curr = head;
  // while(curr !== null){
  //   next = curr.next;
  //   curr.next = prev;
  //   prev = curr;
  //   curr = next;
  // }
  // return prev;
}