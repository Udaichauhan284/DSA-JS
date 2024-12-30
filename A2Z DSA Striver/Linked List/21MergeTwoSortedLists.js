/* 21 Merge Two Sorted Lists
30 Dec 2024, Linked List, Recursion
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/
//TC: O(n+m), SC: O(n+m)
var mergeTwoLists = function(list1, list2) {
  if(list1 === null && list2 === null){
      return null;
  }

  if(list1 === null) return list2;
  if(list2 === null) return list1;

  if(list1.val < list2.val){
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
  }else{
      list2.next = mergeTwoLists(list1, list2.next);
      return list2;
  }
};