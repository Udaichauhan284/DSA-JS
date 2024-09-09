/* 2326 Spiral Matrix Iv
09 Sept 2024, Leetcode POTD, Array, Matrix, Spiral

You are given two integers m and n, which represent the dimensions of a matrix.
You are also given the head of a linked list of integers.
Generate an m x n matrix that contains the integers in the linked list presented in spiral order (clockwise), starting from the top-left of the matrix. If there are remaining empty spaces, fill them with -1.
Return the generated matrix.

Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
Explanation: The diagram above shows how the values are printed in the matrix.
Note that the remaining spaces in the matrix are filled with -1.
*/


/*IN this we will take 4 variable for all four points for matrix
top=0, left=0, bottom=row-1, right=col-1
TC: O(n*m), SC: o(n*m) for result matrix
*/
var spiralMatrix = function(m, n, head) {
  let matrix = Array.from({length: m}, () => Array(n).fill(-1));
  let top = 0;
  let left = 0;
  let right = n-1; //col
  let bottom = m-1; //row

  while(top <= bottom && left <= right){
      //left to right, top row will be constant
      for(let i=left; head !== null && i<=right; i++){
          matrix[top][i] = head.val;
          head = head.next;
      }
      top++;

      //top to bottom, right col will be constant
      for(let i=top; head !== null && i<=bottom; i++){
          matrix[i][right] = head.val;
          head = head.next;
      }
      right--; //as right col is filled move next col

      //right to left, bottom will be constant, check top <= bottom
      if(top <= bottom){
          for(let i=right; head !== null && i>=left; i--){
              matrix[bottom][i] = head.val;
              head = head.next;
          }
          bottom--; //bttm row is filled mpve up row
      }

      //bottom to top, left col will be constant, check left <= right
      if(left <= right){
          for(let i=bottom; head !== null && i>=top; i--){
              matrix[i][left] = head.val;
              head = head.next;
          }
          left++;
      }
  }
  return matrix;
};