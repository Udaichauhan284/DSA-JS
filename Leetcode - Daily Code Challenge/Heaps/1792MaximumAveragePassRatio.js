/* 1792.Maximum Average Passs Ration
15 Dec 2024, Leetcode POTD, array, maths, maxheap

Input: classes = [[1,2],[3,5],[2,2]], extraStudents = 2
Output: 0.78333
Explanation: You can assign the two extra students to the first class. The average pass ratio will be equal to (3/4 + 3/5 + 2/2) / 3 = 0.78333.
*/

/*In brute method, we find the PR(passing ratio) and for curr one
and then in loop of we will find will add 1 studen and then
find the updatePR, and then we do the differnce ot it, and we check
if the delta is less the best delta, that is our ans
TC:O(extraStudents * n), SC: O(n), TLE
*/
var maxAverageRatio = function(classes, extraStudents) {
  let len = classes.length;
  let PR = [];
  for(let i=0; i<len; i++){
      let ratio = classes[i][0] / classes[i][1];
      PR[i] = ratio;
  }
  while(extraStudents--){
      let updatePR = [];
      for(let i=0; i<len; i++){
          let newRatio = (classes[i][0] + 1) / (classes[i][1] + 1);
          updatePR[i]=newRatio;
      }
      let bestIdx = 0;
      let bestDelta =0;
      for(let i=0; i<len; i++){
          let delta = updatePR[i] - PR[i];
          if(delta > bestDelta){
              bestDelta = delta;
              bestIdx = i;
          }
      }
      //now update the PR, with best one
      PR[bestIdx] = updatePR[bestIdx];
      classes[bestIdx][0]++;
      classes[bestIdx][1]++;
  }
  let result = 0;
  for(let i=0; i<len; i++){
      result += PR[i];
  }
  return result/len;
};