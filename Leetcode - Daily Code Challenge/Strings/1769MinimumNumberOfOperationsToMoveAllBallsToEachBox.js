/* 1769. Minimum Number of Operations to Move All Balls to Each Box
06 Jan 25, Leetcode POTD, String, Set, Nested Loop

Input: boxes = "110"
Output: [1,1,3]
Explanation: The answer for each box is as follows:
1) First box: you will have to move one ball from the second box to the first box in one operation.
2) Second box: you will have to move one ball from the first box to the second box in one operation.
3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
*/

/*In Brute Method, see in this we need to move the balls into
adjacent boxes, so for this first we take the set, and in this
we put the index of "1". and then in nested loop, we traverse over
again on boxes and then on set and find the abs(idx-i)
TC: O(n + n^2) ~ O(n^2), SC: O(n)
*/
var minOperations = function(boxes) {
  let len = boxes.length;
  let ans = Array(len).fill(0);
  let ballSet = new Set();
  //now fill the set with the balls
  for(let i=0; i<len; i++){
      if(boxes[i] === "1"){
          ballSet.add(i); //index of balls
      }
  }
  //now traverse over the boxes again and find the ans
  for(let i=0; i<len; i++){
      for(let idx of ballSet){
          ans[i] += Math.abs(idx-i);
      }
  }
  return ans;
};

/*In Better Method, rather then using the set, for every i ="1" start
the inner loop of j from 0 to n and find the abs difference
TC: O(n^2), SC: O(1)
*/
var minOperations = function(boxes) {
  let len = boxes.length;
  let ans = Array(len).fill(0);
  //now nested loop, i will traverse and for every i===1, 
  //start the loop of j and then find the ans
  for(let i=0; i<len; i++){
      if(boxes[i] === "1"){
          for(let j=0; j<len; j++){
              ans[j] += Math.abs(j-i); 
          }
      }
  }
  return ans;
};


/*In Optimal Method, we will find the leftCum Sum and RightCum sum
,we take two variable cumSumValue, cumValue, first we traverse over the
left to right and then right to left.
TC: O(2n)~O(n), SC: O(1)
*/
var minOperations = (boxes) => {
  let len = boxes.length;
  let ans = Array(len).fill(0);
  let cumValue = 0;
  let cumValueSum = 0;

    // Calculate moves for all balls to the left of each index
  for(let i=0; i<len; i++){
    ans[i] = cumValueSum;
    cumValue += boxes[i] === "1" ? 1 : 0;
    cumValueSum += cumValue;
  }

  cumValue = 0;
  cumValueSum = 0;
  
    // Calculate moves for all balls to the right of each index
  for(let i=len-1; i>=0; i--){
    ans[i] += cumValueSum;
    cumValue += boxes[i] === "1" ? 1 : 0;
    cumValueSum += cumValue;
  }

  return ans;
}