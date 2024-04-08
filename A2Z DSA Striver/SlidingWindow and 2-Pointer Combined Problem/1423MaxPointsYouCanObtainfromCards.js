/* 1423. Maximum Points You Can Obtain from cards.
There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.
In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
Your score is the sum of the points of the cards you have taken.
Given the integer array cardPoints and the integer k, return the maximum score you can obtain.
cardPoints = [1,2,3,4,5,6,1], k=3
o/p: 12
*/
 //Optimal Method - use of Sliding Window method, start the loop from i to k-1 and take out the sum of leftSum, then find the rightSum from k-1 to 0, from right side, then find the maxSum, TC: O(n), O(1)
 var maxScore = function(cardPoints, k) {
  let len = cardPoints.length;
  let leftSum = 0;
  let rightSum = 0;
  let maxSum = 0;
  for(let i=0; i<k; i++){
    leftSum += cardPoints[i];
    maxSum = leftSum;
  }
  

  let rightIdx = len-1;
  for(let i=k-1; i>=0; i--){
    leftSum -= cardPoints[i];
    rightSum += cardPoints[rightIdx]; //taking the rightSum for rightIdx.
    rightIdx--;

    maxSum = Math.max(maxSum, (leftSum+rightSum));
  }
  
  return maxSum;
};
console.log(maxScore([1,2,3,4,5,6,1],3));