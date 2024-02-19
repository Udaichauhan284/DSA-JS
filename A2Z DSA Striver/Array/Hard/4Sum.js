//TC O(NlogN) + O(n^2)
//SC O(1);
var fourSum = function(nums, target) {
  let result = [];

  if (nums.length < 4) {
      return result;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
          continue;
      }

      for (let j = i + 1; j < nums.length - 2; j++) {
          if (j > i + 1 && nums[j] === nums[j - 1]) {
              continue;
          }

          let left = j + 1;
          let right = nums.length - 1;

          while (left < right) {
              let sum = nums[i] + nums[j] + nums[left] + nums[right];

              if (sum === target) {
                  result.push([nums[i], nums[j], nums[left], nums[right]]);

                  while (left < right && nums[left] === nums[left + 1]) {
                      left++;
                  }
                  while (left < right && nums[right] === nums[right - 1]) {
                      right--;
                  }

                  left++;
                  right--;
              } else if (sum < target) {
                  left++;
              } else {
                  right--;
              }
          }
      }
  }

  return result;
};
