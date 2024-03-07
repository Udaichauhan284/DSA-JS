/* 876 . Middle of the Middle List
head - [1,2,3,4,5] o/p - [3,4,5]
*/
class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
function LinkedList(val,next){
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}
// O(n), SC O(1)
const middleNode = (head) => {
  if(head === null || head.next === null){
    return head;
  }

  //take two pointer approach fastOne and slowOne, fastOne move 2 next and slowOne move 1 next
  let fastOne = head;
  let slowOne = head;

  while(fastOne !== null && fastOne.next !== null){
    slowOne = slowOne.next;
    fastOne = fastOne.next.next;
  }

  return slowOne; //when fastOne point to null means loop break and slowOne always point at middle of LL, thats why i take slowOne who moves 1 and fastOne who moves 2 next.
}