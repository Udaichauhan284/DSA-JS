/* Partitions with Given Difference (GeeksforGeeks)
Given an array arr, partition it into two subsets(possibly empty) such that each element must belong to only one subset. Let the sum of the elements of these two subsets be S1 and S2. 
Given a difference d, count the number of partitions in which S1 is greater than or equal to S2 and the difference between S1 and S2 is equal to d. Since the answer may be large return it modulo 109 + 7.
Input:
n = 4
d = 3
arr[] =  { 5, 2, 6, 4}
Output: 1
Explanation:
There is only one possible partition of this array. Partition : {6, 4}, {5, 2}. The subset difference between subset sum is: (6 + 4) - (5 + 2) = 3.
*/
/*Method 1- use of Memoization,
in this we need to find subset whose sum is (totalSum-d)/2
TC: O(n*sum), SC: O(n*sum)+O(n)recursion stack space.
*/
class Solution {
    countPartitions(n, d, arr) {
      const len = arr.length;
      let totalSum = 0 // Efficient sum calculation
      for(let i=0; i<len; i++){
          totalSum += arr[i];
      }
  
      // Edge case for totalSum - d
      if (totalSum - d < 0 || (totalSum - d) % 2 === 1) return 0;
  
      const sum2 = Math.floor((totalSum - d) / 2);
      const dp = Array(n + 1).fill(-1).map(() => Array(sum2 + 1).fill(-1));
  
      return this.solve(n - 1, arr, sum2, dp);
    }
  
    solve(ind, arr, sum, dp) {
      // Base case: Only return 1 if target sum is zero
      if (ind === 0) {
        if (sum === 0 && arr[0] === 0)return 2;
        if(sum===0 || arr[0] === sum) return 1;
        return 0;
      }
  
      if (dp[ind][sum] !== -1) return dp[ind][sum];
  
      // Movement: notTake and take (consider removing the check if needed)
      const notTake = this.solve(ind - 1, arr, sum, dp);
      let take = 0;
      if (arr[ind] <= sum) { // Optional check
        take = this.solve(ind - 1, arr, sum - arr[ind], dp);
      }
  
      dp[ind][sum] = (notTake + take) % 1000000007;
      return dp[ind][sum];
    }
  }

/*Method 2 - use of Tabulization
TC: O(n*sum2), SC: O(n^sum2)
*/
class Solution {
      countPartitions(n, d, arr) {
      const len = arr.length;
      let totalSum = 0;
      for (let i = 0; i < len; i++) {
        totalSum += arr[i];
      }
  
      // Edge case
      if (totalSum - d < 0 || (totalSum - d) % 2 === 1) return 0;
  
      const sum2 = Math.floor((totalSum - d) / 2);
      const dp = Array(n + 1).fill(0).map(() => Array(sum2 + 1).fill(0));
  
      return this.solve(n, arr, sum2, dp);
    }
  
    solve(n, arr, sum2, dp) {
      // Base case: Only "not pick" is valid if first element is zero
      if (arr[0] === 0) {
        dp[0][0] = 2; //two option, pick and not pick
      } else {
        dp[0][0] = 1;  // Not pick (picking a zero doesn't change sum)
      }
      if (arr[0] !== 0 && arr[0] <= sum2) {
          dp[0][arr[0]] = 1;  // Can pick the first element if it's <= target sum
        }
  
      // Movement: pick and not pick
      for (let ind = 1; ind < n; ind++) {
        for (let target = 0; target <= sum2; target++) {
          let notTake = dp[ind - 1][target];
          let take = 0;
          if (arr[ind] <= target) {
            take = dp[ind - 1][target - arr[ind]];
          }
  
          dp[ind][target] = (notTake + take) % 1000000007;
        }
      }
  
      return dp[n - 1][sum2];
    }
  }

/*Method 3 - use of Space optimization
TC: O(n*sum2), SC: O(n)
*/
class Solution {
  /**
  * @param number n
  * @param number d
  * @param number[] arr
  
  * @returns number
  */
      countPartitions(n, d, arr) {
      const len = arr.length;
      let totalSum = 0;
      for (let i = 0; i < len; i++) {
        totalSum += arr[i];
      }
  
      // Edge case
      if (totalSum - d < 0 || (totalSum - d) % 2 === 1) return 0;
  
      const sum2 = Math.floor((totalSum - d) / 2);
  
      return this.solve(n, arr, sum2);
    }
  
    solve(n, arr, sum2, dp) {
       let prev = Array(sum2+1).fill(0);
      // Base case: Only "not pick" is valid if first element is zero
      if (arr[0] === 0) {
        prev[0] = 2;
      } else {
        prev[0] = 1;  // Not pick (picking a zero doesn't change sum)
      }
      if (arr[0] !== 0 && arr[0] <= sum2) {
          prev[arr[0]] = 1;  // Can pick the first element if it's <= target sum
        }
  
      // Movement: pick and not pick
      for (let ind = 1; ind < n; ind++) {
          let curr = Array(sum2+1).fill(0);
        for (let target = 0; target <= sum2; target++) {
          let notTake = prev[target];
          let take = 0;
          if (arr[ind] <= target) {
            take = prev[target - arr[ind]];
          }
  
          curr[target] = (notTake + take) % 1000000007;
        }
        prev = curr;
      }
  
      return prev[sum2];
    }
  }