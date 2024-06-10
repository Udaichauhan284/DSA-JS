/* 1051. Height Checker
10 June 2024 - Leetcode POTD , Topic - Array, Sorting
Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.
*/
/* Method 1 - use inbuilt sort method
TC: O(nlogn)+O(n) ~ O(nlogn)
SC: O(n);
*/
var heightChecker = function (heights) {
  let len = heights.length;
  let expected = Array.from(heights);
  expected.sort((a, b) => a - b); //ascending order
  let diff = 0;
  for (let i = 0; i < len; i++) {
    if (heights[i] !== expected[i]) {
      diff++;
    }
  }
  return diff;
};

/* Method 2 - lets use Merge Sort for sorting the array
TC: O(nlogn)+O(n) ~ O(nlogn)
SC: O(n)
*/
var heightChecker = function (heights) {
  let len = heights.length;
  let expected = Array.from(heights);
  //calling mergeSort Function
  let low = 0;
  let high = expected.length - 1;
  mergeSort(expected, low, high);
  let count = 0;
  //main loop for matching the heights
  for (let i = 0; i < len; i++) {
    if (heights[i] !== expected[i]) {
      count++;
    }
  }
  return count;
};
//merge function implementation
function mergeSort(arr, low, high) {
  if (low >= high) {
    return;
  }
  let mid = low + Math.floor((high - low) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);

  merging(arr, low, mid, high);
}
function merging(arr, low, mid, high) {
  let n1 = mid - low + 1;
  let n2 = high - mid;

  //tempory array
  let left = Array(n1).fill(0);
  let right = Array(n2).fill(0);

  let k = low;
  for (let i = 0; i < n1; i++) {
    left[i] = arr[k++];
  }
  for (let j = 0; j < n2; j++) {
    right[j] = arr[k++];
  }

  //merge the tempory array and fill into main array
  let i = 0;
  let j = 0;
  k = low;
  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  //put remaining one
  while (i < n1) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = right[j];
    j++;
    k++;
  }
}
