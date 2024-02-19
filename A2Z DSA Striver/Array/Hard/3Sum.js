//TC O(NlogN) + O(n^2)
//SC O(1)
var threeSum = function(nums) {
  let result = []; // Declare result array locally

  function twoSum(nums, target, i, j) {
      while (i < j) {
          if (nums[i] + nums[j] > target) {
              j--;
          } else if (nums[i] + nums[j] < target) {
              i++;
          } else {
              while (i < j && nums[i] === nums[i + 1]) i++;
              while (i < j && nums[j] === nums[j - 1]) j--;
              result.push([-target, nums[i], nums[j]]);
              i++;
              j--;
          }
      }
  }

  let len = nums.length;
  if (len < 3) {
      return result;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i <= len - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
          continue;
      }
      let n1 = nums[i];
      let target = -n1;
      twoSum(nums, target, i + 1, len - 1);
  }

  return result;
};