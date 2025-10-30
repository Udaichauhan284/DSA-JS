/* 1526. Minimum Number Of INcrements on Subarrays to from a target array
30 oct 2025, leetcode potd, hard
Input: target = [1,2,3,2,1]
Output: 3
Explanation: We need at least 3 operations to form the target array from the initial array.
[0,0,0,0,0] increment 1 from index 0 to 4 (inclusive).
[1,1,1,1,1] increment 1 from index 1 to 3 (inclusive).
[1,2,2,2,1] increment 1 at index 2.
[1,2,3,2,1] target array is formed.
*/

function minNumberOperations(target) {
  const n = target.length;

  let result = 0;
  let curr = 0;
  let prev = 0;

  for (let i = 0; i < n; i++) {
    curr = target[i];

    if (Math.abs(curr) > Math.abs(prev)) {
      result += Math.abs(curr - prev);
    }

    prev = curr;
  }

  return result;
}