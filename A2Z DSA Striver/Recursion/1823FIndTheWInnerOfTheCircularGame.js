/* 1823. Find the Winner of the Circular Game
08 / July / 2024, Leetcode POTD 

Input: n = 5, k = 2
Output: 3
Explanation: Here are the steps of the game:
1) Start at friend 1.
2) Count 2 friends clockwise, which are friends 1 and 2.
3) Friend 2 leaves the circle. Next start is friend 3.
4) Count 2 friends clockwise, which are friends 3 and 4.
5) Friend 4 leaves the circle. Next start is friend 5.
6) Count 2 friends clockwise, which are friends 5 and 1.
7) Friend 1 leaves the circle. Next start is friend 3.
8) Count 2 friends clockwise, which are friends 3 and 5.
9) Friend 5 leaves the circle. Only friend 3 is left, so they are the winner.
*/

/*Method 1- use of simulation, what ask code the same
use arr, for 1 to n elemt
TC: O(n^2), SC: O(n)
*/
var findTheWinner = function(n, k) {
  let arr = [];
  for(let i=1; i<=n; i++){
      arr.push(i);
  }
  let i = 0; //starting from first player
  while(arr.length > 1){
      let idx = (i+k-1) % arr.length; 
      //remove this idx elem
      arr.splice(idx, 1); //at idx, delete 1 elem

      //start from next pointer after delete, but 
      //splice will move elem 1 forward
      i = idx;
  }
  return arr[0];
};

/*Method 2 - use of Queue
TC: O(n*k), SC: O(n)
*/
var findTheWinner = function(n, k) {
  let queue = [];
  for(let i=1; i<=n; i++){
      queue.push(i);
  }
  while(queue.length > 1){
      //this loop from k
      for(let del=1; del<=k-1; del++){
          queue.push(queue[0]);
          queue.shift(); //after push back the 1 to k
          //delete the first one.
      }
      queue.shift();
  }
  return queue[0];
};

/*Method 3 - optimal way. Use of Recursion
as we see in ques, we repeat step2 with new parameters
so just use
TC: O(n), SC: O(1)+O(n) for auzilary stack space
*/
var findTheWinner = function(n, k) {
  let resultIdx = helper(n,k);
  return resultIdx+1; //that will return 0 index.
};
function helper(n,k){
  //base case
  if(n===1){
      return 0;
  }
  let idx = helper(n-1,k);
  idx = (idx + k)%n; // this will give original ind
  return idx;
}