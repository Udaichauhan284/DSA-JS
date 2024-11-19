/* 2461 Maximum Sum of Distinct Subarrays WIth Length K
19 Nov 2024, Leetcode POTD, Array, Sliding Window

Input: nums = [1,5,4,2,9,9,9], k = 3
Output: 15
Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions
*/

/*In this we use Sliding Window, and for distinct
element we use set, for each j pointer elem
we check is that in set, if yes, we move the i ptr
and shrink the window
TC: O(n), SC: O(n)
*/
const maximumSubarraySum = (nums, k) => {
  let len = nums.length;
  let currWindowSum = 0;
  let result = 0;
  let set = new Set(); //for maintaining the distinct value
  let i=0, j=0; //moving pointer
  while(j < len){
    //if curr vlaue in set, so shrink the window
    while(set.has(nums[j])){
      currWindowSum -= nums[i];
      set.delete(nums[i]);
      i++;
    }
    //distinct value, push in set
    currWindowSum += nums[j];
    set.add(nums[j]);
    //when we reach k window size
    if((j-i+1) === k){
      //shrink the window, by moving the i pointer and result
      result = Math.max(result, currWindowSum);
      currWindowSum -= nums[i];
      set.delete(nums[i]);
      i++;
    }
    j++;
  }
  return result;
}