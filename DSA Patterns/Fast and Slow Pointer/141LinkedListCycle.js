/* 141. Linked List Cycle
28 Jan 2026, leetcode potd, easy
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
*/


/* In this we need to find the Cycle, so for that
we can use the fast and slow pointer approach
Slow will move one point and fast will move 
2 point, when they meet at one point, we will
know they have cycle.
TC: O(n), SC: O(1)
*/
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        //move slow and fast first
        slow = slow.next;
        fast = fast.next.next;

        //now check where slow and fast meet
        if(slow === fast){
            return true;
        }
    }
    return false;
};