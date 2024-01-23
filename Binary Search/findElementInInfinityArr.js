//O(logN)
function ans(nums, target) {
  let start = 0;
  let end = 1;
  while (target > nums[end]) {
    let newStart = end + 1;
    end = end + (end - start + 1) * 2;
    start = newStart;
  }
  return binarySearch(nums, target, start, end); // Return the result of binarySearch
}

function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

const arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14, 15, 16, 17, 19, 31, 43];
console.log(ans(arr1, 14));
