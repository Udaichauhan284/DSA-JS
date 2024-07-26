/* 514. Freedom Trail
Input: ring = "godding", key = "gd"
Output: 4
Explanation:
For the first key character 'g', since it is already in place, we just need 1 step to spell this character. 
For the second key character 'd', we need to rotate the ring "godding" anticlockwise by two steps to make it become "ddinggo".
Also, we need 1 more step for spelling.
So the final output is 4.
*/
//Recursion + Memoization TC : O(n^2)*m, Sc : O([101][101]) ~ O(1)
var findRotateSteps = function (ring, key) {
  let t = Array(101)
    .fill(-1)
    .map(() => Array(101).fill(-1));

  return solve(0, 0, ring, key, t); //ringIndex,keyIndex
};
function solve(ringIndex, keyIndex, ring, key, t) {
  if (keyIndex === key.length) {
    return 0;
  }

  if (t[ringIndex][keyIndex] !== -1) {
    return t[ringIndex][keyIndex];
  }

  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < ring.length; i++) {
    if (ring[i] === key[keyIndex]) {
      let totalSteps =
        countSteps(ringIndex, i, ring.length) +
        1 +
        solve(i, keyIndex + 1, ring, key, t);
      result = Math.min(result, totalSteps);
    }
  }
  return (t[ringIndex][keyIndex] = result);
}
function countSteps(ringIndex, i, n) {
  let distance = Math.abs(i - ringIndex); //anticlock wise
  let wrapAround = n - distance; //clock wise

  return Math.min(distance, wrapAround);
}
