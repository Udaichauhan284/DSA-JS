/* 19. Remove nth node from end of list
*/
//Brute App use of count which count the len, then res = count-n; TC O(2n), SC O(1)
var removeNthFromEnd = function(head, n) {
  let count = 0;
  let temp = head;
  while(temp !== null){
    count++;
    temp = temp.next;
  }
  if(count === n){
    return head.next; //suppose n=5 equall to len
  }
  let res = count-n;
  temp=head;
  while(temp!==null){
    res--;
    if(res === 0){
      break;
    }
    temp = temp.next;
  }
  let deleteNode = temp.next;
  temp.next = temp.next.next;
  return head;
};

//optimaal way use of fast and slow - first flow will run till n and then fast and slow will run one by one, TC O(n), O(1)
const optimalWay = (head,n) => {
  let fast = head;
  let slow = head;
  for(let i=0; i<n; i++){
    fast = fast.next;
  }
  if(fast === null){
    return head.next;
  }
  while(fast.next !== null){
    slow = slow.next;
    fast = fast.next;
  }
  let deleteNode = slow.next;
  slow.next = slow.next.next;
  return head;
}