/* Longest Bitonic Subsequence
Given an array of positive integers. Find the maximum length of Bitonic subsequence. 
A subsequence of array is called Bitonic if it is first strictly increasing, then strictly decreasing. Return the maximum length of bitonic subsequence.

Note : A strictly increasing or a strictly decreasing sequence should not be considered as a bitonic sequence

Input: n = 5, nums[] = [1, 2, 5, 3, 2]
Output: 5
Explanation: The sequence {1, 2, 5} is increasing and the sequence {3, 2} is decreasing so merging both we will get length 5.
*/

//this is same as LIS, here we have to maintain two DP array one for LIS
//from left to right and other one from RIght to Left.
//TC: O(n^2)+O(n^2)+O(n) ~ O(n^2), SC: O(2n) ~ O(n)
class Solution {
  /**
  * @param number n
  * @param number[] nums

  * @returns number
  */
  LongestBitonicSequence(n, nums) {
      // code here
      let dp1 = Array(n).fill(1);
      for(let i=1; i<n; i++){
          for(let prev=0; prev<i; prev++){
              if(nums[i] > nums[prev] && dp1[i] < dp1[prev]+1){
                  dp1[i] = 1+dp1[prev];
              }
          }
      }
      
      let dp2 = Array(n).fill(1);
      for(let i=n-2; i>=0; i--){
          for(let prev=n-1; prev>i; prev--){
              if(nums[i]>nums[prev] && dp2[i] < dp2[prev]+1){
                  dp2[i] = 1+dp2[prev];
              }
          }
      }
      let maxi = dp1[0]+dp2[0]-1;
      for(let i=1; i<n; i++){
          maxi = Math.max(maxi, (dp1[i]+dp2[i]-1));
      }
      return maxi;
  }
}