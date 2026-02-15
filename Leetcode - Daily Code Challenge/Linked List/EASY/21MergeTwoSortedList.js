/* 21. Merge Two Sorted Lists
14 Feb 2026, EASY

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/

/*Method 1, use of recursive method, we will
use the result node and push the node into this one
TC: O(n), SC: O(1)
*/
var mergeTwoLists = function(list1, list2) {
    if(list1 === null){
        return list2;
    }
    if(list2 === null) return list1;

    let result = null;
    if(list1.val > list2.val){
        result = list2;
        result.next = mergeTwoLists(list1, list2.next);
    }else{
        result = list1;
        result.next = mergeTwoLists(list1.next, list2);
    }
    return result;
};