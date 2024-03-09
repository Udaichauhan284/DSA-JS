/* 142. Linked List Cycle II
*/
//Brute use of Map O(n), O(n)
const detectCycle = (head) => {
  if(head === null || head.next === null){
    return null;
  }
  let temp = head;
  let map = new Map();
  while(temp !== null){
    if(map.has(temp)){
      return temp;
    }
    map.set(temp, true);
    temp = temp.next;
  }
  return null;
}

 //use of Map O(n), SC O(1)
 const OptimizedetectCycle = function(head) {
  if(head === null || head.next === null){
    return null;
  }
  let fastOne = head;
  let slowOne = head;
  while(fastOne !== null && fastOne.next !== null){
    slowOne = slowOne.next;
    fastOne = fastOne.next.next;
    if(slowOne === fastOne){
      slowOne = head;
      while(slowOne !== fastOne){
        slowOne = slowOne.next;
        fastOne = fastOne.next;
      }
      return slowOne;
    }
  }
  return null;
};