/* 234. Palindrome Linked List
04 Feb 2026, leetcode, easy
Input: head = [1,2,2,1]
Output: true
*/

var isPalindrome = function(head) {
    let st = [];
    let temp = head;
    while(temp !== null){
        st.push(temp.val);
        temp = temp.next;
    }
    temp = head;
    while(temp !== null){
        if(temp.val !== st.pop()){
            return false;
        }
        temp = temp.next;
    }
    return true;
};




/*Rather than using the recursive function, we
can use the in go recursive technique, 
take slow, fast and prev, first take temp 
point to slow.next and make slow.next to prev
and prev to slow and slow to temp.
with this we will compare the prev and slow 
pointer.
TC: O(n), SC: O(1)
*/
var isPalindrome = function(head) {
    if(head === null || head.next === null){
        return true;
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while(fast !== null && fast.next !== null){
        fast = fast.next.next;

        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    //in case of odd linked list
    if(fast !== null){
        slow = slow.next; //now leaving unique elem at
        //middle, we will compare prev and slow
    }

    while(prev && slow){
        if(prev.val !== slow.val){
            return false;
        }
        prev = prev.next;
        slow = slow.next;
    }
    return true;
};



/*In this we will use of recursive method, so that head will
reach at last and we will also take curr elem, which will
compare curr and head pointer to each other
TC: O(n), SC: O(1) only recursive stack space
*/
let curr;
var isPalindrome = function(head) {
    curr = head;
    return solve(head);
};
function solve(head){
    if(head === null) return true;

    let ans = solve(head.next);

    if(head.val !== curr.val){
        return false;
    }
    curr = curr.next;
    return ans;
}