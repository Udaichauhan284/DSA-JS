/* Geek Jump 
Example:
Input:
n = 4
height = {10 20 30 10}
Output:
20
Explanation:
Geek jump from 1st to 2nd stair(|20-10| = 10 energy lost).
Then a jump from the 2nd to the last stair(|10-20| = 10 energy lost).
so, total energy lost is 20 which is the minimum.
*/
//Method 1- use of Memoization (Top-Down) use of memo array TC: O(n), SC: O(n)+O(n)
class Solution {
  //Function to find the minimum energy required.
  minimumEnergy(height, n) {
      let memo = Array(n).fill(-1);
      return this.solve(n - 1, memo, height);
  }

  solve(n, memo, arr) {
      if (n === 0) return 0;
      if (memo[n] !== -1) return memo[n];

      let jumpOne = this.solve(n - 1, memo, arr) + Math.abs(arr[n] - arr[n - 1]);
      let jumpTwo = Number.MAX_SAFE_INTEGER;

      if (n > 1) {
          jumpTwo = this.solve(n - 2, memo, arr) + Math.abs(arr[n] - arr[n - 2]);
      }

      return (memo[n] = Math.min(jumpOne, jumpTwo));
  }
}

//Tabulization (BottomUp) use of memo array, defind the base case and 
//use for loop from ind=1 to n, TC: O(n), SC: O(n)
class Solution {
  //Function to find the minimum energy required.
  minimumEnergy(height, n)
  {
      //your code here
      let memo = Array(n).fill(-1);
      memo[0] = 0;
      for(let ind=1; ind<n; ind++){
          let jumpOne = memo[ind-1] + Math.abs(height[ind] - height[ind-1]);
          let jumpTwo = Number.MAX_VALUE;
          if(ind > 1){
              jumpTwo = memo[ind-2] + Math.abs(height[ind] - height[ind-2]);
          }
          memo[ind] = Math.min(jumpOne, jumpTwo);
      }
      return memo[n-1];
  }
}

//Tabulization (BottomUp) use of memo array, defind the base case and 
//use for loop from ind=1 to n, TC: O(n), SC: O(n)
//Now space optimization TC: O(n), SC: O(1), use of variable
class Solution {
  //Function to find the minimum energy required.
  minimumEnergy(height, n)
  {
      //your code here
      // let memo = Array(n).fill(-1);
      // memo[0] = 0;
      let prev = 0;
      let prev2 = 0;
      for(let ind=1; ind<n; ind++){
          let jumpOne = prev + Math.abs(height[ind] - height[ind-1]);
          let jumpTwo = Number.MAX_VALUE;
          if(ind > 1){
              jumpTwo = prev2 + Math.abs(height[ind] - height[ind-2]);
          }
          let curri = Math.min(jumpOne, jumpTwo);
          prev2 = prev;
          prev = curri;
      }
      return prev;
  }
}