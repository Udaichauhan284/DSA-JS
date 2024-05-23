/* 2597. The Number of Beautoful Subsets
23 May 2024 Leetcode Daily Code Challenge - Topic: Array, Backtracking, DP
Input: nums = [2,4,6], k = 2
Output: 4
Explanation: The beautiful subsets of the array nums are: [2], [4], [6], [2, 6].
It can be proved that there are only 4 beautiful subsets in the array [2,4,6].
*/
//Method 1- simple backtracking use map to stroe the value which we can take
//Use of Backtraking Appraoch, simple need to take a map and store the -k
//+k value need to check in future. TC: O(2^n), SC: O(n*2^n)
var beautifulSubsets = function (nums, k) {
  let result = [0]; //need to return the number of subsets
  let map = new Map(); //for storing the value.
  solve(nums, 0, result, map, k);
  return result[0] - 1; //-1 for excluding the empty subsets
};
function solve(nums, idx, result, map, k) {
  if (idx >= nums.length) {
    result[0]++;
    return;
  }

  //not taking
  solve(nums, idx + 1, result, map, k);

  //now taking that element, so check the condtion of beautiful subsets
  if (!map.has(nums[idx] - k) && !map.has(nums[idx] + k)) {
    map.set(nums[idx], (map.get(nums[idx]) || 0) + 1); //do
    solve(nums, idx + 1, result, map, k); //explore
    // undo
    if (map.get(nums[idx]) === 1) {
      map.delete(nums[idx]);
    } else {
      map.set(nums[idx], (map.get(nums[idx]) || 0) - 1);
    }
  }
}

//Little Bit Optimize Code take array instead of mao
const beautifulSubsets1 = (nums, k) => {
  let result = [0];
  solve(nums, 0, [], result, k);
  return result[0] - 1; //-1 for ecluding he empty array
};
function solve(nums, idx, selected, result, k) {
  if (idx >= nums.length) {
    result[0]++;
    return;
  }
  //not take thay element
  solve(nums, idx + 1, selected, result, k);

  // Check the condition for taking the current element
  let canTake = true;
  for (let i = 0; i < selected.length; i++) {
    if (Math.abs(selected[i] - nums[idx]) === k) {
      canTake = false;
      break;
    }
  }

  // Taking the current element
  if (canTake) {
    selected.push(nums[idx]); // Do
    solve(nums, idx + 1, selected, result, k); // Explore
    selected.pop(); // Undo
  }
}
