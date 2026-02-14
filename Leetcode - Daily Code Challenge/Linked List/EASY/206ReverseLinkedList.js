/* 206 Reverse Linked List
14 Feb 2026, Leetcode POTD, EASY
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

/*Method 1: use of Iterative method, we will take the
prev poiinter and start the loop of head till null
and inside loop we will use the maintain the nex ptr
which will help us to store the next node.
TC: O(n), SC: O(1)
*/
var reverseList = function(head) {
    let prev = null;
    while(head !== null){
        let next = head.next; //store the next node
        head.next = prev; //now remove the link to next node
        prev = head;
        head = next;
    }
    return prev;
};




/*Method 2. use of recursive method, first of all we will do
the head.next.next = head and head.next = null, and when we 
perform head.next.next = head we will maintain the last node
for getting the last node we will use the recusive mthod
TC: O(n+m), SC: O(n) just for recursive stack
*/
const reverseList = function(head){
    return reverseSolve(head);
};
function reverseSolve(head){
    if(head === null || head.next === null){
        return head;
    }

    //now get the last node
    let lastNode = reverseSolve(head.next);
    //now start doing it, 
    head.next.next = head;
    head.next = null;
    return lastNode;
}