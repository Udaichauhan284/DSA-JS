/* 1605. Find Valid Matrix Given Row and Column Sums
20 July 204, Leetcode POTD, Array, Greedy, Matrix

Input: rowSum = [3,8], colSum = [4,7]
Output: [[3,0],
        [1,7]]
Explanation: 
0th row: 3 + 0 = 3 == rowSum[0]
1st row: 1 + 7 = 8 == rowSum[1]
0th column: 3 + 1 = 4 == colSum[0]
1st column: 0 + 7 = 7 == colSum[1]
The row and column sums match, and all matrix elements are non-negative.
Another possible matrix is: [[1,2],
[3,5]]
*/


/*IN this code, we need to find the value of row and col for matrix, so 
we try me make set the first row and first col, by taking the min of both
sums, and them we minus that taken value from rowSum and colSum, as we
need to maintain the constrain condition. when ever rowSUm and colSum equal
to 0, we move the pointer, measn we set that row or col
TC: O(n+m), + because we accessing each ele once
SC: O(1), O(n*m) just for result matrix
*/
var restoreMatrix = function(rowSum, colSum) {
  let n = rowSum.length;
  let m = colSum.length;
  let matrix = Array.from({length: n}, () => Array(m).fill(0));
  let i=0; //for row
  let j=0; //for col

  while(i<n && j<m){
      matrix[i][j] = Math.min(rowSum[i], colSum[j]);

      //now need to minus this taken value from both sum
      rowSum[i] -= matrix[i][j];
      colSum[j] -= matrix[i][j];

      //check if they got zero, move the pointer
      if(rowSum[i] === 0) i++;
      if(colSum[j] === 0) j++;
  }
  return matrix;
};