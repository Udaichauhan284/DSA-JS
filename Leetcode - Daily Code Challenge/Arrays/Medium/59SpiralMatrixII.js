/* 59 Spiral Matrix II
09 Sept 2024, Array, Simulation, Matrix
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
*/

/*As both row and col will be same as n, we take 4 variable 
top =0, bottom = n-1, left =0, right = n-1, and one by one we
will put in matrix left to right, top to down, right to left,
down to top
TC: O(n^2), SC: O(1) for O(n^2) just for result matrix
*/
var generateMatrix = function(n) {
  let matrix = Array.from({length: n}, ()=> Array(n).fill(0));
  let top = 0;
  let left = 0;
  let right = n-1; //right most col
  let bottom = n-1; //down most row
  let num = 1; //this we will put in matrix one by one
  while(top <= bottom && left <= right){
      //left to right, but for this top row will be same
      for(let i=left; i<=right; i++){
          matrix[top][i] = num++;
      }
      //now first row filled, move top one row down
      top++;

      //top to down, now right col will be same
      for(let i=top; i<=bottom; i++){
          matrix[i][right] = num++;
      }
      //now right col filled, move to next one
      right--;

      //right to left, in this bottom row will be constant, so
      //we need to check top <= bottom and in for loop need to 
      //move right to left
      if(top <= bottom){
          for(let i=right; i>=left; i--){
              matrix[bottom][i] = num++;
          }
          //bottom col filled, need to move upward row
          bottom--;
      }
      
      //bottom to top, in this left col will be constant
      if(left <= right){
          for(let i=bottom; i>=top; i--){
              matrix[i][left] = num++;
          }
          left++;
      }
  }
  return matrix;
};