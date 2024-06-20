/* 1552. Magnetic Force Between Two Balls
20 June 2024 Leetcode POTD, array, binary search, sorting
note- this is same as Bouquet question
binary search on ans.

In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.

Rick stated that magnetic force between two different balls at positions x and y is |x - y|.

Given the integer array position and the integer m. Return the required force.

Input: position = [1,2,3,4,7], m = 3
Output: 3
Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.
*/ 

/* This is BInary Search on answer, we need to find the minF, which
is max, so we need to increase the minF as much that we can place all
ball in postion and get the minF as Max. for BS we need to sort the 
position arr too
TC: O(nlogn + n*log(maxF)), SC: O(1)
*/
var maxDistance = function(position, m) {
  let n = position.length;
  position.sort((a,b) => a-b);
  let minF = 1;
  let maxF = position[n-1] - position[0];
  let result = 0;
  while(minF <= maxF){
      let mid = minF + Math.floor((maxF-minF)/2);
      if(possibleToPlace(position,mid,m)){
          result = mid;
          minF = mid+1;
      }else{
          maxF = mid-1;
      }
  }
  return result;
};
function possibleToPlace(position,force,m){
  let len = position.length;
  let prev = position[0];
  let countBalls = 1;
  for(let i=1; i<len; i++){
      let curr = position[i];
      if(curr - prev >= force){
          countBalls++;
          prev = curr;
      }
      if(countBalls === m) break;
  }
  return countBalls === m;
}