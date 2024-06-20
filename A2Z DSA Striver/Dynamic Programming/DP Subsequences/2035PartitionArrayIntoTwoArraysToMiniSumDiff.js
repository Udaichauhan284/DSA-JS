/* 2035. Partition Array Into Two Arrays to Minimize Sum Difference
Input: nums = [3,9,7,3]
Output: 2
Explanation: One optimal partition is: [3,9] and [7,3].
The absolute difference between the sums of the arrays is abs((3 + 9) - (7 + 3)) = 2.
*/

/*In this we need to find the range for which number to chose
range - 2s1, s1 elem will be mini one, so goes to half of sum/2
This DP Code will work for when numbers in array are non-negative.
*/
var minimumDifference = function (nums) {
  let n = nums.length;
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    totalSum += nums[i];
  }
  let halfSum = Math.floor(totalSum / 2);

  // Initialize dp array properly
  let dp = Array.from({ length: n }, () => new Array(halfSum + 1).fill(false));

  // Base case
  for (let i = 0; i < n; i++) {
    dp[i][0] = true; // Sum of 0 is always possible
  }
  if (nums[0] <= halfSum) {
    dp[0][nums[0]] = true; // First element case
  }

  // Fill the dp table
  for (let i = 1; i < n; i++) {
    for (let target = 1; target <= halfSum; target++) {
      let notTake = dp[i - 1][target];
      let take = false;
      if (nums[i] <= target) {
        take = dp[i - 1][target - nums[i]];
      }
      dp[i][target] = notTake || take;
    }
  }

  let mini = Number.MAX_VALUE;
  for (let i = 0; i <= halfSum; i++) {
    if (dp[n - 1][i] === true) {
      mini = Math.min(mini, Math.abs(totalSum - 2 * i));
    }
  }
  return mini;
};

/* For this question we have to deal with negative number in array.
so this is the reason we cant use DP.
for this we need to Use Meet In Middle (means if we have to deal with 
2^30, we will divide it in half 2^15)
Bitmask(for creating the subsets 2^n) + Binary Search
TC: O(2^nlog(2^n)), SC: O(2^n)
*/
var minimumDifference = function (nums) {
  let N = nums.length;
  let n = Math.floor(N / 2);
  let left = Array.from({ length: n + 1 }, () => []);
  let right = Array.from({ length: n + 1 }, () => []);
  let sum = 0;
  //find the total sum;
  for (let i = 0; i < N; i++) {
    sum += nums[i];
  }
  //find the total subsets
  for (let mask = 0; mask < 1 << n; mask++) {
    let count = 0,
      leftSum = 0,
      rightSum = 0;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        //if we get set value, then only add in array
        count++;
        leftSum += nums[i];
        rightSum += nums[n + i];
      }
    }
    left[count].push(leftSum);
    right[count].push(rightSum);
  }
  //now meet the middle, sort the rightArr, and take one eleme from
  //left and one from rightarr
  for (let i = 0; i < n; i++) {
    right[i].sort((a, b) => a - b);
  }
  let ans = Number.MAX_VALUE;
  for (let i = 0; i < n; i++) {
    let leftArr = left[i];
    let rightArr = right[n - i];

    for (let leftSum of leftArr) {
      let low = 0;
      let high = rightArr.length - 1;
      while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let value = sum - 2 * (leftSum + rightArr[mid]);
        ans = Math.min(ans, Math.abs(value));
        if (ans === 0) {
          return ans;
        }
        if (value > 0) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
    }
  }
  return ans;
};
