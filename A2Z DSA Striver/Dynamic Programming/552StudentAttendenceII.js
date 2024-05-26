/* 552. Student Attendance Record II
26 May 2024 Leetcode Daily Code Challenge, Topic: DP
An attendance record for a student can be represented as a string where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

'A': Absent.
'L': Late.
'P': Present.
Any student is eligible for an attendance award if they meet both of the following criteria:

The student was absent ('A') for strictly fewer than 2 days total.
The student was never late ('L') for 3 or more consecutive days.
Given an integer n, return the number of possible attendance records of length n that make a student eligible for an attendance award. The answer may be very large, so return it modulo 109 + 7.

Input: n = 2
Output: 8
Explanation: There are 8 records with length 2 that are eligible for an award:
"PP", "AP", "PA", "LP", "PL", "AL", "LA", "LL"
Only "AA" is not eligible because there are 2 absences (there need to be fewer than 2).
*/
//Method 1- use of Recursion + Memoization, simply take
//count of absent and consecutiveLate
//without memo TC: O(3^n)
//with memo TC: O(n), SC: O(n)
var checkRecord = function (n) {
  let M = 1000000007;
  let memo = Array(n + 1)
    .fill(-1)
    .map(() =>
      Array(2)
        .fill(-1)
        .map(() => Array(3).fill(-1))
    );

  // Recursive function to solve the problem
  function solve(n, absent, consecLate) {
    // Base case: if more than 1 absence or 3 consecutive lates, it's invalid
    if (absent >= 2 || consecLate >= 3) {
      return 0;
    }
    // Base case: if n is 0, there's 1 valid way to arrange the records
    if (n === 0) {
      return 1;
    }
    // Check memoization table to avoid re-computation
    if (memo[n][absent][consecLate] !== -1) {
      return memo[n][absent][consecLate];
    }

    // Calculate the number of valid sequences by adding A, P, and L
    let A = solve(n - 1, absent + 1, 0) % M; // Add an 'A'
    let P = solve(n - 1, absent, 0) % M; // Add a 'P'
    let L = solve(n - 1, absent, consecLate + 1) % M; // Add an 'L'

    // Store the result in memoization table and return it
    memo[n][absent][consecLate] = (((A + L) % M) + P) % M;
    return memo[n][absent][consecLate];
  }
  // Call the recursive function with initial parameters
  return solve(n, 0, 0);
};
