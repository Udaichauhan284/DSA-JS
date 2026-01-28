/* 142. Linked List Cycle II
28 Jan 2026, leetcode potd, medium
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

*/

/*Use of Brute Method, use of Map, to store the
point, if we see it again means, there is cycle
at that node. SC: O(n)
*/
var detectCycle = function(head) {
    if(head === null || head.next === null){
        return null;
    }    
    let temp = head;
    let map = new Map();
    while(temp !== null){
        if(map.has(temp)){
            return temp; //means we already see 
        }

        //otherwise set in map
        map.set(temp, true);
        //move the pointer
        temp = temp.next;
    }
    return null
};


/*In this, first of all we will find if there
is cycle or not, if yes, so we start finding
where is the starting of cycle. so suppose
from head to start point we have l1, and from start
point of cycle till meeting point distance is l2
so from meeting point to starting point dis is C-L2
c is number of node in that cycle. so if fast point
is running 2x speed, so at meeting point
slow = 2(l1+l2) and fast = l1+nC+l2, n is number of
time of that cycle and C is number of nodes
l1+nC+l2 = 2(l1+l2) => l1=C-l2

So, slow pointer will take same time till start pnt
and fast pointer will also take same time from 
meeting point to start pnt.
So when we find the cycle, we move back slow to head
and inside while loop slow!==fast, we will move
the slow and fast by 1. and outside if return slow.
TC: O(n), SC: O(1)
*/
var detectCycle = function(head) {
    if(head === null || head.next === null){
        return null;
    }
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        //move the slow and fast for finding the cycle
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            //measn there is cycle, so slow and fast point
            //will take same point reaching to start point
            //of cycle
            slow = head;
            while(slow !== fast){
                //measn till when slow and fast not at same 
                //starting point, move it by 1, when they will
                //meet, return slow
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};