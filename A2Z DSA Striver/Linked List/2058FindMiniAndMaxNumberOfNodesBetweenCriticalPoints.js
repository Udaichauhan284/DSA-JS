/* 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points
05 July 2024, Leetcode POTD, Linked List
A critical point in a linked list is defined as either a local maxima or a local minima.

A node is a local maxima if the current node has a value strictly greater than the previous node and the next node.

A node is a local minima if the current node has a value strictly smaller than the previous node and the next node.

Note that a node can only be a local maxima/minima if there exists both a previous node and a next node.

Given a linked list head, return an array of length 2 containing [minDistance, maxDistance] where minDistance is the minimum distance between any two distinct critical points and maxDistance is the maximum distance between any two distinct critical points. If there are fewer than two critical points, return [-1, -1].

Input: head = [5,3,1,2,5,1,2]
Output: [1,3]
Explanation: There are three critical points:
- [5,3,1,2,5,1,2]: The third node is a local minima because 1 is less than 3 and 2.
- [5,3,1,2,5,1,2]: The fifth node is a local maxima because 5 is greater than 2 and 1.
- [5,3,1,2,5,1,2]: The sixth node is a local minima because 1 is less than 5 and 2.
The minimum distance is between the fifth and the sixth node. minDistance = 6 - 5 = 1.
The maximum distance is between the third and the sixth node. maxDistance = 6 - 3 = 3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* We take two variables prev and curr, prev will on head and curr will on
head.next and we will move, and check the firstCP and PrevCP and find out 
the miniDist and maxDIst
TC: O(n), SC: O(1)
*/
var nodesBetweenCriticalPoints = function(head) {
  let prev = head;
  let curr = head.next;
  let ind = 1; // this is at same pos of curr
  let firstCP = 0, prevCP = 0;
  let minDist = Number.MAX_VALUE; //as we need to check prevCP, for that we need to cal minDIst continously
  let maxDist = 0 //lastCP(curr PrevCP) - firstCP
  while(curr.next !== null){
      //check for CP
      if(curr.val < prev.val && curr.val < curr.next.val || curr.val > prev.val && curr.val > curr.next.val){
          //now check if there any prevCP
          if(prevCP === 0){
              prevCP = ind;
              firstCP = ind;
          }else{
              //yes there is previous CP, so find the minDist
              minDist = Math.min(minDist, (ind-prevCP));
              //now we move forward, so update curr i as prevCP
              prevCP = ind;
          }
      }
      ind++;
      prev = curr;
      curr = curr.next;
  }
  //check is we able to find the CP and minDIst
  if(minDist === Number.MAX_VALUE){
      return [-1,-1];
  }
  maxDist = prevCP - firstCP; //measn last CP - first CP
  return [minDist, maxDist];
};