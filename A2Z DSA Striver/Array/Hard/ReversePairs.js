/* 493. Reverse Pairs
*/
//TC O(nlogn + (n)), SC O(n)
var merge = function (arr, low, mid, high) {
  let temp = [], left = low, right = mid + 1;
  while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) {
          temp.push(arr[left]);
          left++;
      } else {
          temp.push(arr[right]);
          right++;
      }
  }
  while (left <= mid) {
      temp.push(arr[left]);
      left++;
  }
  while (right <= high) {
      temp.push(arr[right]);
      right++;
  }
  for (let i = low; i <= high; i++) {
      arr[i] = temp[i - low];
  }
};

const countPairs = (arr, low, mid, high) => {
  let right = mid + 1, count = 0;
  for (let i = low; i <= mid; i++) {
      while (right <= high && arr[i] > 2 * arr[right]) right++;
      count += right - (mid + 1);
  }
  return count;
}

const mergeSort = (arr, low, high) => {
  let count = 0;
  if (low < high) {
      let mid = Math.floor((low + high) / 2);
      count += mergeSort(arr, low, mid);
      count += mergeSort(arr, mid + 1, high);
      count += countPairs(arr, low, mid, high);
      merge(arr, low, mid, high);
  }
  return count;
}

var reversePairs = function (nums) {
  return mergeSort(nums, 0, nums.length - 1);
}