/* 02 Dec 2024, Leetcode Patterns
1423: Maximum Points You cna Obtain from Cards

Input: cardPoints = [1,2,3,4,5,6,1], k = 3
Output: 12
Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.
*/

/*In this we can first take lSum till k and 
assign that to maxSum, now we start removing from
left and while doing that we add from right side.
TC: O(n), SC: O(1)
*/
var maxScore = function(cardPoints, k) {
  let len = cardPoints.length;
  let lSum = 0, rSum = 0;
  let maxSum = 0;
  //now first take the lSum
  for(let i=0; i<k; i++){
      lSum += cardPoints[i];
  }
  //now assign that to maxSum, now
  maxSum = lSum;
  //now start removing from left and adding from 
  //right
  let rightIdx = len-1;
  for(let i=k-1; i>=0; i--){
      lSum -= cardPoints[i];
      //now add into rightsum
      rSum += cardPoints[rightIdx];
      rightIdx--; //move the rightIndex
      //now find the maxSum
      maxSum = Math.max(maxSum, lSum+rSum);
  }
  return maxSum;
};