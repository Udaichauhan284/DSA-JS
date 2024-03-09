/* 141. linked lust cycle
*/
//Brute App. O(n) SC: O(n), use of Map
const hasCycle = (head) => {
  let temp = head;
  let nodeMap = new Map();

  while(temp !== null){
    if(nodeMap.has(temp)){
      return true;
    }
    nodeMap.set(nodeMap, true);
    temp = temp.next;
  }
  return false;
}

 //Now using Optimal App. using Fast and slow pointer
 // O(n), O(1)
 const optimizeHasCycle = function(head) {
  if(head === null || head.next===null){
    return false;
  }

  let fastOne = head;
  let slowOne = head;
  while(fastOne !== null && fastOne.next !== null){
    slowOne = slowOne.next;
    fastOne = fastOne.next.next;
    if(slowOne === fastOne){
      return true;
    }
  }
  return false;
};