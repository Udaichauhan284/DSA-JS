/*962 Maximum Width Ramp
10 Oct 2024, Leetcode POTD, Array, Monotopnic Decreasing Stack

Input: nums = [6,0,8,2,1,5]
Output: 4
Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.
*/

/*Method 1- brute method, use of nested loop and check 
what asked for. TC: O(n^2), SC: O(1)
TLE
*/
var maxWidthRamp = function(nums) {
  let len = nums.length;
  let maxRamp = 0;
  for(let i=0; i<len; i++){
      for(let j=i+1; j<len; j++){
          if(nums[i] <= nums[j]){
              maxRamp = Math.max(maxRamp, j-i);
          }
      }
  }
  return maxRamp;
};


/*Method2-optimal method, lets take last ind, and for this
on left side we need to take a min value with min ind,
so that we can form a max ramp. So for that we can use
Monotonoic Decreasing Stack. initaly push the 1st one ind
and then check for nums[st.top] > nums[i], push that curr
ind into stack. and then in other for loop from len-1 to 0
check for condition. TC: O(n), SC: O(n)
*/
var maxWidthRamp = function (nums) {
  let len = nums.length;
  let decStack = [];
  for (let i = 0; i < len; i++) {
      if (decStack.length === 0 || nums[decStack[decStack.length - 1]] > nums[i]) {
          decStack.push(i); //push that index
      }
  }
  let maxRamp = 0;
  for (let j = len - 1; j >= 0; j--) {
      while (decStack.length > 0 && nums[decStack[decStack.length - 1]] <= nums[j]) {
          maxRamp = Math.max(maxRamp, j - decStack[decStack.length - 1]);
          decStack.pop(); //use it and remove it
      }
  }
  return maxRamp;
};