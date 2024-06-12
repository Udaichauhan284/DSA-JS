/* Minimal Cost
this is a follow up question of Geek Jump
in this we need to jump k times.

Example 1:
Input:
n = 5, k = 3
heights = {10, 30, 40, 50, 20}
Output:
30
Explanation:
Geek will follow the path 1->2->5, the total cost 
would be | 10-30| + |30-20| = 30, which is minimum
*/
//Memoization (TopDown) use of memo array TC: O(n*k), SC: O(n)+O(n) recurdion
class Solution {
  //Function to minimize the cost of reducing the heights.
  minimizeCost(height, n, k) {
    //your code here
    let memo = Array(n).fill(-1);
    return this.solve(height, n - 1, k, memo);
  }
  solve(arr, ind, k, memo) {
    if (ind === 0) return 0;
    if (memo[ind] !== -1) return memo[ind];
    let minJumps = Number.MAX_VALUE;
    //loop on k time jump
    for (let j = 1; j <= k; j++) {
      if (ind - j >= 0) {
        let jump =
          this.solve(arr, ind - j, k, memo) + Math.abs(arr[ind] - arr[ind - j]);
        minJumps = Math.min(jump, minJumps);
      }
    }
    memo[ind] = minJumps;
    return memo[ind];
  }
}

//Tabulization (BottomUp) no nned for recursion TC: O(n), SC: O(n)+O(n)
class Solution
{
    //Function to minimize the cost of reducing the heights.
    minimizeCost(height, n, k)
    {
        //your code here
        let memo = Array(n).fill(-1);
        memo[0] = 0;
        for(let ind=1; ind < n; ind++){
            let minJumps = Number.MAX_VALUE;
            for(let j=1; j<=k; j++){
                if(ind-j >= 0){
                    let jump = memo[ind-j] + Math.abs(height[ind] - height[ind-j]);
                    minJumps = Math.min(jump, minJumps);
                }
            }
            memo[ind] = minJumps;
        }
        return memo[n-1];
    }
}
