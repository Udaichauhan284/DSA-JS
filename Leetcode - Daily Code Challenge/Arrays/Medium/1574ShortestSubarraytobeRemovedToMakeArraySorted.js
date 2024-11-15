/* 1574. Shortest Subarray to be Removed to Make Array Sorted
15 Nov 2024, Leetcode POTD, Array, Two Pointer

Input: arr = [1,2,3,10,4,2,3,5]
Output: 3
Explanation: The shortest subarray we can remove is [10,4,2] of length 3. The remaining elements after that will be [1,2,3,3,5] which are sorted.
Another correct solution is to remove the subarray [3,10,4].

*/

/*In this we use Two Pointer
TC: O(n), SC: O(1)
*/
const findLengthOfShortestSubarray = (arr) => {
  let len = arr.length;
  let right = len-1;
  //set the right pointer
  while(right > 0 && arr[right] >= arr[right-1]){
    right--;
  }
  let left = 0;
  let ans = right;
  while(left < right && (left === 0 || arr[left-1] <= arr[left])){
    //find next valid nimber after left
    while(right < len && arr[left] > arr[right]){
      right++;
    }
    ans = Math.min(ans, right-left-1);
    left++;
  }
  return ans;
}