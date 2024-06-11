/*
Dynamic Programming 
1. memoization - Top - Down Approach
in this we use memo array, 

2. tabulization- Bottom-Up Approach
in this we go base case to required value
in this we use memo array, but memo array will easly replace by Variable. TC: O(n), SC:O(1)
*/
class Solution {
  topDown(n) { //TC: O(n), SC: O(n)+O(n)for recursion stack.
      let memo = Array(n+1).fill(-1);
      if (n <= 1) {
          return n;
      }
      if (memo[n] !== -1) {
          return memo[n];
      }
      return memo[n] = this.topDown(n - 1) + this.topDown(n - 2);
  }

  bottomUp(n) {
      //this is Bottom Up - tabulation using memo array TC: O(n), SC: O(n), no recursion stack
      // let memo = Array(n+1).fill(-1);
      // if (n <= 1) {
      //     return n;
      // }
      // memo[0] = 0;
      // memo[1] = 1;
      // for (let i = 2; i <= n; i++) {
      //     memo[i] = memo[i - 1] + memo[i - 2];
      // }
      // return memo[n];
      
      //we can use simple variable TC: O(n), SC: O(1)
      let prev2 = 0;
      let prev = 1;
      for(let i=2; i<=n; i++){
          let curri = prev2 + prev;
          prev2 = prev;
          prev = curri;
      }
      return prev;
  }
}