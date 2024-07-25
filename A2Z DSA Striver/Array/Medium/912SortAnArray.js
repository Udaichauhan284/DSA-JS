/* 912. Sort an Array
25 July 2024, Leetcode POTD, Array, sorting, merge sort
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
*/

/*Method 1- simply use the sort inbuilt function of JS
TC: O(nlogn), SC: O(1)
*/
// var sortArray = function(nums) {
//     return (nums.sort((a,b) => a-b));
// };

/*Method 2 - Use of Merge Sort
TC: O(nlogn), SC: O(1)
*/
const sortArray = (nums) => {
  mergeSort(nums, 0, nums.length-1);
  return nums;
}
function mergeSort(nums, low, high){
  if(low >= high){
      return;
  }
  let mid = Math.floor(low + (high-low)/2);
  mergeSort(nums,low, mid);
  mergeSort(nums,mid+1,high);
  merge(nums,low,mid,high);
}
function merge(nums, low, mid, high){
  let temp = [];
  let left = low;
  let right = mid+1;
  while(left <= mid && right <= high){
      if(nums[left] <= nums[right]){
          temp.push(nums[left]);
          left++;
      }else{
          temp.push(nums[right]);
          right++;
      }
  }
  while(left <= mid){
      temp.push(nums[left]);
      left++;
  }
  while(right <= high){
      temp.push(nums[right]);
      right++;
  }
  for(let i=low; i<=high; i++){
      nums[i] = temp[i-low];
  }
}