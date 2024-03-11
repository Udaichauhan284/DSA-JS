/* 160 Intersection of Two Linked Lists
headA, headB
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'

Naive App : use of Map - first store and then check O(n+m), O(n)
*/
const getIntersection = (headA, headB) => {
  let temp = headA;
  let map = new Map();
  while(temp !== null){
    map.set(temp, (map.get(temp) || 0)+1);
    temp = temp.next;
  }
  temp=headB;
  while(temp !== null){
    if(map.has(temp)){
      return temp;
    }
    temp = temp.next;
  }
  return null;
}

//Optimize Way O(n+m), O(1)
const OptimizeGetIntersection = (headA, headB) => {
  let currA = headA;
  let currB = headB;
  while(currA !== currB){
    currA = !currA ? headB : currA.next;
    currB = !currB ? headA : currB.next;
  }
  return currA;
}