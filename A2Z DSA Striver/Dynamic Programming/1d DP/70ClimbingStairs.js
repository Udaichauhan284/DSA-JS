/* 70. Climbing Stairs
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
*/

/* Method 1- lets do this by using memoization(Top-Down)
we can use memo array and call function for n-1 and n-2 time
TC: O(n), SC: O(n)+O(n) one n for recursion stack and one for
memo space
*/
var climbStairs = function (n) {
  let memo = Array(n + 1).fill(-1);

  //recursion function - helper
  const climb = (n) => {
    if (n <= 1) {
      return 1;
    }
    //check for curr subproblem if it is not equal to -1
    if (memo[n] !== -1) return memo[n];

    return (memo[n] = climb(n - 1) + climb(n - 2));
  };
  return climb(n);
};

/* Method 2 - Bottom - Up (Tabulzaion), in this i will use variable
inplace of memo array
TC: O(n), SC: O(1)
*/
var climbStairs = function (n) {
  if (n <= 1) {
    return 1;
  }
  //base value
  let prev2 = 1;
  let prev = 1;
  //main code, for loop
  for (let i = 2; i <= n; i++) {
    let curri = prev2 + prev;
    //as i will move, change the prev2 and prev poiinter
    prev2 = prev;
    prev = curri;
  }
  //at past prev will point to your desire n
  return prev;
};
