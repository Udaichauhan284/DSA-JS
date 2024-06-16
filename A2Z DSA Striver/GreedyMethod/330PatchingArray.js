/* 330. Patching Array
16 June 2024 Leetcode POTD, Topic: Araay, Greedy, ask in Google.
Input: nums = [1,3], n = 6
Output: 1
Explanation:
Combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
So we only need 1 patch.
*/
/* In this we need to add patch greedy mini one, so that we can
reach 1 to n. for that take a maxReachable if nums[i] is less 
than maxReahable in start 0, add nums[i] else increment by 1 
and also increase patch as we add extra +1 in maxReachable
TC: O(max(l,logn)), logn is maxReachable will be double till n
*/
var minPatches = function (nums, n) {
  let i = 0;
  let patch = 0;
  let maxReachable = 0;
  while (maxReachable < n) {
    if (i < nums.length && nums[i] <= maxReachable + 1) {
      maxReachable += nums[i];
      i++;
    } else {
      maxReachable += maxReachable + 1;
      patch++;
    }
  }
  return patch;
};
