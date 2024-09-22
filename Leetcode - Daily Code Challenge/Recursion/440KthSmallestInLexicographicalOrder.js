/* 440 K-th Smallest in Lexicographical Order
22 Sept 2024, leetcode POTD

Input: n = 13, k = 2
Output: 10
Explanation: The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.

*/

var findKthNumber = function(n, k) {
  let curr = 1;
  k--; //0-based indexed

  while(k > 0){
      let steps = countSteps(curr, n);
      if(steps <= k){
          curr++; //move to the nest prefix
          k -= steps;
      }else{
          curr *= 10;
          k--;
      }
  }
  return curr;
};
function countSteps(curr, n){
  let steps = 0;
  let first = curr;
  let last = curr;
  while(first <= n){
      steps += Math.min(n+1, last+1) - first;
      first *= 10;
      last = last * 10 + 9;
  }
  return steps;
}