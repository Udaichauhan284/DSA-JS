/* 312 Burst Balloons
Input: nums = [3,1,5,8]
Output: 167
Explanation:
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
*/

/*In this first we need to add 1 in starting and ending of nums
and in this we cannot divide the partition and b1 will depend on 
b0 and b2. so in this we need to move from Bottom To Up
f(i,j) 1 to N
Recursion: TC: Expoential, SC: O(n)
TLE
*/
var maxCoins = function(nums) {
  let n = nums.length;
  nums.unshift(1);
  nums.push(1);
  return solve(1,n,nums);
};
function solve(i,j,nums){
  //base case
  if(i>j) return 0;
  let maxi = Number.MIN_VALUE;
  for(let ind=i; ind<=j; ind++){
      let cost = nums[i-1]*nums[ind]*nums[j+1]+solve(i,ind-1,nums)+solve(ind+1,j,nums);
      maxi = Math.max(maxi,cost);
  }
  return maxi;
}

/*In this first we need to add 1 in starting and ending of nums
and in this we cannot divide the partition and b1 will depend on 
b0 and b2. so in this we need to move from Bottom To Up
f(i,j) 1 to N
Method 2: use of DP array Memoization. in this we need to take a
DP of n+1 as we are adding 1 in last and first
TC: O(n^2)*O(n) ~ O(n^3), SC: O(n^2)+O(n)
*/
var maxCoins = function(nums) {
  let n = nums.length;
  nums.unshift(1);
  nums.push(1);
  let dp = Array.from({length: n+1}, () => Array(n+1).fill(-1));
  return solve(1,n,nums,dp);
};
function solve(i,j,nums,dp){
  //base case
  if(i>j) return 0;
  if(dp[i][j] !== -1) return dp[i][j];
  let maxi = Number.MIN_VALUE;
  for(let ind=i; ind<=j; ind++){
      let cost = nums[i-1]*nums[ind]*nums[j+1]+solve(i,ind-1,nums,dp)+solve(ind+1,j,nums,dp);
      maxi = Math.max(maxi,cost);
  }
  return (dp[i][j] = maxi);
}


/*In this first we need to add 1 in starting and ending of nums
and in this we cannot divide the partition and b1 will depend on 
b0 and b2. so in this we need to move from Bottom To Up
f(i,j) 1 to N
Method 2: use of Tabulization. as we know it will oppoasite of 
Recursion so i will move from n to 1 and j will move from 1 to n 
or i to n as j will always be on right of i
TC: O(n^2)*O(n) ~ O(n^3), SC: O(n^2)
*/
var maxCoins = function(nums) {
  let n = nums.length;
  nums.unshift(1);
  nums.push(1);
  let dp = Array.from({length: n+2}, () => Array(n+2).fill(0));
  
  //movement start 
  for(let i=n; i>=1; i--){
      for(let j=i; j<=n; j++){
          let maxi = Number.MIN_VALUE;
          if(i>j) continue;
          for(let ind=i; ind<=j; ind++){
              let cost = nums[i-1]*nums[ind]*nums[j+1]+dp[i][ind-1]+dp[ind+1][j]; 
              maxi = Math.max(maxi, cost);
          }
          dp[i][j] = maxi;
      }
  }
  return dp[1][n];
};