/*
Given two integers X and N, print the value X on the screen N times. Move to the next line after printing.

Input: X = 7, N = 5

Output: 7 7 7 7 7
*/

class Solution {
  printX(X, N) {
    if (N < 0) {
      console.log("Invalid Number of Times");
      return;
    }
    for (let i = 0; i < N; i++) {
      process.stdout.write(X.toString());
      if (i < N - 1) {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}
const sol = new Solution();
const X = 5;
const N = 4;
sol.printX(X, N);
