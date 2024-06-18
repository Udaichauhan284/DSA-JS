/* Subset Sum Problem
Given an array of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum. 

Input:
N = 6
arr[] = {3, 34, 4, 12, 5, 2}
sum = 9
Output: 1 
Explanation: Here there exists a subset with
sum = 9, 4+3+2 = 9.
*/
/*Method 1 use of Memoization
TC: O(n*k), SC: O(n*k)+O(n)
*/
class Solution {
  isSubsetSum(arr,n,sum){
      //code here
      let dp = Array(n).fill(false).map(() => Array(sum+1).fill(false));
      return this.solve(n-1,sum,arr,dp);
  }
  solve(ind,target,arr,dp){
      if(target === 0) return true;
      if(ind === 0) return (arr[0] === target);
      if(dp[ind][target] !== false) return dp[ind][target];
      
      let notTake = this.solve(ind-1,target,arr,dp);
      let take = false;
      if(target >= arr[ind]){
          take = this.solve(ind-1,target-arr[ind],arr,dp);
      }
      dp[ind][target] = (take || notTake);
      return dp[ind][target];
  }
}

/*Tabulization TC: O(n*sum), SC: O(n*sum)
*/
class Solution {
  isSubsetSum(arr,n,sum){
      //code here
      let dp = Array(n).fill(false).map(() => Array(sum+1).fill(false));
      //base case
      for(let i=0; i<n; i++){
          dp[i][0] = true;
      }
      //first value is queal to arr
      if(arr[0] <= sum){
          dp[0][arr[0]] = true;
      }
      //main code, iteration
      for(let i=1; i<n; i++){
          for(let target=1; target<=sum; target++){
              let notTake = dp[i-1][target];
              let take = false;
              if(target >= arr[i]){
                  take = dp[i-1][target-arr[i]];
              }else take = false;
              
              dp[i][target] = (take || notTake);
          }
      }
      return dp[n-1][sum];
  }
}

/*Space OPtimization TC: O(n*sum), SC: O(n)
*/
class Solution {
  isSubsetSum(arr,n,sum){
      //code here
      let prev = Array(sum+1).fill(false);
      //base case
      prev[0] = true;
      //first value is queal to arr
      if(arr[0] <= sum){
          prev[arr[0]] = true;
      }
      //main code, iteration
      for(let i=1; i<n; i++){
          let curr = Array(sum+1).fill(false);
          curr[0] = true; //first target will true
          for(let target=1; target<=sum; target++){
              let notTake = prev[target];
              let take = false;
              if(target >= arr[i]){
                  take = prev[target-arr[i]];
              }else take = false;
              
              curr[target] = (take || notTake);
          }
          prev = curr;
      }
      return prev[sum];
  }
}