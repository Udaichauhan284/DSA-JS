//Use lower bound, smallest index such that arr[ind] >= target
//T.C BS O(logN)
var searchInsert = function (nums, target) {
  let len = nums.length;
  let low = 0,
    high = len - 1;
  let ans = len;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};
