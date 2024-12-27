/*1014. Best Sightseeing Pair
27 Dec 2024, Leetcode POTD, Array
Input: values = [8,1,5,2,6]
Output: 11
Explanation: i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
*/

/*Brute Method, in this we use the nested loop and check on left side,
for ans
TC: O(n^2), SC: O(1)
*/
var maxScoreSightseeingPair = (values) => {
  let len = values.length;
  let result = 0;
  for(let j=1; j<len; j++){
    let maxScore = 0;
    for(let i=j-1; i>=0; i--){
      maxScore = Math.max(maxScore, values[i]+i);
    }
    result = Math.max(result, maxScore+values[j]-j);
  }
  return result;
}


/*Better Method 1, use of array, where we store the maxElem from left
side and then again in loop we will find the ans.
TC: O(n), SC: O(n)
*/
var maxScoreSightseeingPair = function(values) {
  let len = values.length;
  let leftMaxArr = Array(len).fill(0);
  //now fill this array
  leftMaxArr[0] = values[0]+0;
  for(let i=1; i<len; i++){   
      leftMaxArr[i] = Math.max(leftMaxArr[i-1], values[i]+i);
  }
  let result = 0;
  for(let j=1; j<len; j++){
      let x = leftMaxArr[j-1];
      let y = values[j]-j;

      result = Math.max(result, x+y);
  }
  return result;
};

/*OPtimal Method, use of variable, where we store the maxElem 
from left side and then again in loop we will find the ans.
TC: O(n), SC: O(1)
*/
var maxScoreSightseeingPair = function(values) {
  let len = values.length;
  let maxTillNow = values[0]+0;
  let result = 0;
  for(let j=1; j<len; j++){
      let x = maxTillNow;
      let y = values[j]-j;

      result = Math.max(result, x+y);

      maxTillNow = Math.max(maxTillNow, values[j]+j)
  }
  return result;
};