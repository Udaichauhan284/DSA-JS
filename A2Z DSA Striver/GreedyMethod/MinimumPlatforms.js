/*
Given arrival and departure times of all trains that reach a railway station. Find the minimum number of platforms required for the railway station so that no train is kept waiting.
Consider that all the trains arrive on the same day and leave on the same day. Arrival and departure time can never be the same for a train but we can have arrival time of one train equal to departure time of the other. At any given instance of time, same platform can not be used for both departure of a train and arrival of another train. In such cases, we need different platforms.

Input: n = 6 
arr[] = {0900, 0940, 0950, 1100, 1500, 1800}
dep[] = {0910, 1200, 1120, 1130, 1900, 2000}
Output: 3
Explanation: 
Minimum 3 platforms are required to 
safely arrive and depart all trains.
*/
class Solution {
  //Function to find the minimum number of platforms required at the
  //railway station such that no train waits.
  findPlatform(arr, dep, n) {
    //your code here
    //1. brute method - use of two loop O(n^2)
    let ans = 1;
    for (let i = 0; i <= n - 1; i++) {
      let count = 1;
      for (let j = i + 1; j <= n - 1; j++) {
        if (
          (arr[i]>=arr[j] && arr[i]<=dep[j]) ||
          (arr[j]>=arr[i] && arr[j]<=dep[i])
        ) {
          count++;
        }
      }
      ans = Math.max(ans, count);
    }
    return ans;
  }
}

//Optiomal Method 
class Solution1 {
  //Function to find the minimum number of platforms required at the
  //railway station such that no train waits.
  findPlatform(arr, dep, n)
  {
      //your code here
      //now using the sortinf and two pointer method, O(nlogn)
      arr.sort((a,b) => a-b);
      dep.sort((a,b) => a-b);
      
      let ans = 1;
      let count = 1;
      let i=1, j=0;
      while(i<n && j<n){
          if(arr[i]<=dep[j]){
              count++;
              i++;
          }else{
              count--;
              j++;
          }
          ans = Math.max(ans,count);
      }
      return ans;
  }
}
