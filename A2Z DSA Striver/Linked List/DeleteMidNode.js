/* 2095. delete the Middle Node of a Linked List
middle = len/2
*/ 
 //Brute App. find the len, go to len/2 floor value element, point that to next O(n+n/2) O(1);
 const deleteMidNode = (head) =>{
  if(head === null || head.next === null){
    return null;
  }
  let temp = head;
  let len = 0;
  while(temp !== null){
    len++;
    temp = temp.next;
  }
  let res = Math.floor(len/2);
  temp = head;
  while(temp !== null){
    res--;
    if(res === 0){
      let middle = temp.next;
      temp.next = temp.next.next;
      break;
    }
    temp = temp.next;
  }
  return head;
 }

  //Optimal Way, use fast and slow pointer for finding the middle,but the tiwst is we dont need to find the middle, we want one before of middle, so skip slow for skipping slow move fast one point aheah then slow O(n), O(1)
var deleteMiddle = function(head) {
  if(head === null || head.next === null){
    return null;
  }
  let slow = head;
  let fast = head;
  fast = fast.next.next;
  while(fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = slow.next.next;
  return head;
};