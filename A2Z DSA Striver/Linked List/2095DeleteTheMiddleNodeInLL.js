/* 27 Sept 2024
2095. delete the Middle Node of a Linked List
middle = len/2
*/ 
/*Brute Method 1- use of len counter and we find mid
by dividing len, in again in while loop when mid==0
we change the temp.next to its next
TC: O(2n) ~ O(n), SC: O(1)
*/
var deleteMiddle = function(head) {
    if(head === null || head.next === null){
        return null;
    }
    let len = 0;
    let temp = head;
    while(temp !== null){
        len++;
        temp = temp.next;
    }
    //again traverse on LL, so reinilize temp
    temp = head;
    let mid = Math.floor(len / 2);
    while(temp !== null){
        mid--; //decrease the mid
        if(mid === 0){
            //means we reach the destination 
            let middle = temp.next;
            temp.next = temp.next.next;
            delete(middle); //delete the middle one
        }
        temp = temp.next;
    }
    return head;
};

/*27 Sept 2024, Optimal Method, we take 2 pointer
slow and fast, initial we move fact 2 points away
then iin while loop on fast we move slow by 1 and 
fast by 2 till num, when fast it at nul, measn we
have find the middle, delete it. TC: O(n), SC: O(1)
*/
var deleteMiddle = function(head) {
  if(head === null || head.next === null){
      return null;
  }
  let fast = head;
  let slow = head;
  //iniitally move fast to 2 points
  fast = fast.next.next;
  while(fast !== null && fast.next !== null){
      slow = slow.next;
      fast = fast.next.next;
  }
  let middle = slow.next;
  slow.next = slow.next.next;
  delete(middle);
  return head;
};