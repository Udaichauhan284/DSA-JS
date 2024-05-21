/* 78 Subsets
21 May 2024 Leetcode Daily Code Challenge, Topic: Array, Backtracking, Bit amnipulation
Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/

/* Method 1 - use of Bit Manupilation
take a limit till where subsets form 2^n (measn 1<<n)
also need to see the set bit for that, so that we can take that
element and form the subsets (1<<n)&1 !== 0, add that nums[j] into 
subset and add that subset into that result 
TC: O(2^n * n), SC: O(n)
*/
// var subsets = function(nums) {
//     let n = nums.length;
//     let result = [];
//     let limit = (1<<n); //2^n
//     for(let mask=0; mask<limit; mask++){
//         let subsets = [];
//         for(let i=0; i<n; i++){
//             if((mask)&1<<i){ //need to find out the set bit
//                 subsets.push(nums[i]);
//             }
//         }
//         result.push(subsets);
//     }
//     return result;
// };

/* Method 2- backtracking recursion
TC: O(2^n), SC: O(2^n + n)
*/
const subsets = (nums) => {
  let result = [];
  let temp = [];
  function solve(nums, i, temp) {
    if (i >= nums.length) {
      result.push([...temp]);
      return;
    }
    temp.push(nums[i]);
    solve(nums, i + 1, [...temp]);
    temp.pop();
    solve(nums, i + 1, temp);
  }
  solve(nums, 0, temp);
  return result;
};
