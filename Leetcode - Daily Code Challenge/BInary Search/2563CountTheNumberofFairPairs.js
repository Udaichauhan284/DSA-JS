/* 2563 COunt the Number of Fair Pairs
13 Nov 2024, Leetcode POTD, Array, Binary Search, Sort, Lower and Upper Bound

Input: nums = [0,1,7,4,4,5], lower = 3, upper = 6
Output: 6
Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).
*/

/*In this we need to find the sum which is less then lower and
sums which are lower then upper, x will be sum of pairs which are
lower then lower value and y will be sum of pairs which are less
then upper value. we will find the count += y-x;
now we will find the lower_bound with lower-nums[i] and then 
will be find upper_bound with upper-nums[i]
lower bound will return first smallest index which is greater amd 
quqal to target, but we need i+1, to target, so we will do 
x = idx - 1 - i, same goes in upper bound. 
TC: for sorting O(nlogn) and then in loop O(n logn ) ~ O(nlogn)
SC: O(1)
*/

const countFairPairs = function(nums, lower, upper) {
  let len = nums.length;
  //first we need to sort the nums
  nums.sort((a,b) => a-b); //now we can perform lower and upper
  //bound on it.

  //now main logic
  let result = 0;
  for(let i=0; i<len; i++){
      let lowerIdx = lowerBound(i+1, len-1, lower-nums[i], nums); //low, high, target, arr
      let x = lowerIdx - 1 - i;

      let upperIdx = upperBound(i+1, len-1, upper-nums[i], nums); //low,high,target, arr
      let y = upperIdx - 1 - i;

      //now getting the count of pairSum which is in range of
      // lower <= pairSum <= upper , we will do
      result += (y - x);
  }
  return result;
};
function lowerBound(low, high, target, nums){
  let ans = high+1;
  while(low <= high){
      let mid = low + Math.floor((high-low)/2);
      if(nums[mid] >= target){
          //this will return the first smallest index which is just greater
          //and equal then target
          ans = mid;
          high = mid - 1;
      }else{
          low = mid+1;
      }
  }
  return ans;
}
function upperBound(low, high, target, nums){
  let ans = high+1;
  while(low <= high){
      let mid = low + Math.floor((high - low)/2);
      if(nums[mid] > target){
          ans = mid;
          high = mid-1;
      }else{
          low = mid + 1;
      }
  }
  return ans;
}