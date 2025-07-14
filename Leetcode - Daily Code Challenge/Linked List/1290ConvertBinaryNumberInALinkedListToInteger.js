/* 1290. Convert Binary Number In A Linked List To Interger
14 July 2025, Leetcode POTD, EASY
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
/*As in convertion of Binary to Number, we need to get from
last of linked list, we can do that, we reverse the linked
list and iterate over the reverse linked list and form
the number
TC: O(n), SC: O(1), if we ignore the recursion test case
*/
var getDecimalValue = function(head) {
    //reverse the linked list
    head = reverseLL(head);
    
    let result = 0;
    let power = 0;
    while(head){
        if(head.val === 1){
            //we need only 1 val of linked list
            result += Math.power(2, power);
        }
        power++;
        head = head.next; //move the next
    }
    return result;
}
const reverseLL = (head) => {
    //base case
    if(head === null || head.next === null){
        return head;
    }

    let last = reverseLL(head.next);
    head.next.next = head;
    head.next = null;
    return last;
}