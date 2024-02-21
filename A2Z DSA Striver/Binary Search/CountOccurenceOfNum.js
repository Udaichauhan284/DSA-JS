/* arr = [2,2,3,3,3,3,4,5] m target = 3
ans = 4
here we use first and last position function, and then calculate last - first + 1; // index - 0
*/
//Brute App - O(n)
// function bruteCountOcc(nums,target){
//   let count = 0;
//   let len = nums.length;
//   for(let i=0; i<len; i++){
//     if(nums[i] === target){
//       count++;
//     }
//   }
//   return count;
// }

//Optimal Approach, use first and last psotion way
function firstOccurrence(arr, n, k) {
  let low = 0, high = n - 1;
  let first = -1;

  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      // maybe an answer
      if (arr[mid] === k) {
          first = mid;
          // look for smaller index on the left
          high = mid - 1;
      }
      else if (arr[mid] < k) {
          low = mid + 1; // look on the right
      }
      else {
          high = mid - 1; // look on the left
      }
  }
  return first;
}

function lastOccurrence(arr, n, k) {
  let low = 0, high = n - 1;
  let last = -1;

  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      // maybe an answer
      if (arr[mid] === k) {
          last = mid;
          // look for larger index on the right
          low = mid + 1;
      }
      else if (arr[mid] < k) {
          low = mid + 1; // look on the right
      }
      else {
          high = mid - 1; // look on the left
      }
  }
  return last;
}

function firstAndLastPosition(arr, n, k) {
  let first = firstOccurrence(arr, n, k);
  if (first === -1) return [-1, -1];
  let last = lastOccurrence(arr, n, k);
  return [first, last];
}

function count(arr, n, x) {
  let [first, last] = firstAndLastPosition(arr, n, x);
  if (first === -1) return 0;
  return last - first + 1;
}

let arr = [2, 4, 6, 8, 8, 8, 11, 13];
let n = 8, x = 8;
let ans = count(arr, n, x);
console.log("The number of occurrences is:", ans);