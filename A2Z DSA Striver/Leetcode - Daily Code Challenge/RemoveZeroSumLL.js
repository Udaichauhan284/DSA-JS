/* 1171. Remove Zero SUm Consecutive nodes from Linked List
head : [1,2,-3,3,1]
o/p [3,1]
*/
// TC = SC = O(n)
const removeZeroSumSub = (head) => {
  const dummy = new ListNode(0);
  dummy.next = head;
  const map = new Map();
  let pSum = 0;
  map.set(pSum,dummy);
  while(head){
    pSum += head.val;
    if(map.has(pSum)){
      //delete node
      let to_remove = map.get(pSum).next;
      let SUM = pSum;
      while(to_remove !== head){
        SUM += to_remove.remove.val;
        map.delete(SUM);
        to_remove = to_remove.next;
      }
      //draw link
      map.get(pSum).next = head.next;
    }else {
      map.set(pSum, head);
    }
    head = head.next;
  }
  return dummy.next;
}