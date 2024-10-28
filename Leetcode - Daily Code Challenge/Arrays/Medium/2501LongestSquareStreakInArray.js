/* 2501 Longest Square Streak in an Array
28 Oct 2024, Leetcode POTD, Array, Sorting, Map
Input: nums = [4,3,6,16,8,2]
Output: 3
Explanation: Choose the subsequence [4,16,2]. After sorting it, it becomes [2,4,16].
- 4 = 2 * 2.
- 16 = 4 * 4.
Therefore, [4,16,2] is a square streak.
It can be shown that every subsequence of length 4 is not a square streak.
*/

/*In this we need to look for currNumm is square or not, root of that
num and then check root*root === num if yes then we check in map
is map have have that num in yes, increase the streak
TC: O(nlogn), SC: O(n)
*/
var longestSquareStreak = function(nums) {
  let map = new Map();
  nums.sort((a,b) => a-b);
  let maxStreak = 0;
  for(let num of nums){
      let root = parseInt(Math.sqrt(num));
      if((root*root) === num && map.has(root)){
          map.set(num, (map.get(root) || 0)+1);
      }else{
          map.set(num, 1);
      }
      maxStreak = Math.max(maxStreak, map.get(num));
  }
  return maxStreak < 2 ? -1 : maxStreak;
};