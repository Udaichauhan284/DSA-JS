/* 624. Maximum Distance in Arrays
16 August 2024, Leetcode POTD, Array, Greedy

Input: arrays = [[1,2,3],[4,5],[1,2,3]]
Output: 4
Explanation: One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.

*/

/*In this first take a Max and Min from first array, and then
start comparing the with next array elements, and find the max
abs difference TC: O(m), SC: O(1)
*/

const maxDistance = (arrays) => {
  //first take main MAX and MIN, from sorted Arr
  let MIN = arrays[0][0]; //first one
  let MAX = arrays[0][arrays[0].length - 1]; //last one

  let result = 0;
  for(let i=1; i<arrays.length; i++){
    let currMin = arrays[i][0];
    let currMax = arrays[i][arrays[i].length - 1];

    let absMinDistance = Math.abs(currMin - MAX);
    let absMaxDistance = Math.abs(currMax - MIN);
    result = Math.max(result, Math.max(absMinDistance, absMaxDistance));

    MAX = Math.max(MAX, currMax);
    MIN = Math,min(MIN, currMin);
  }
  return result;
}