//Sprial Matrix, top=0, left =0, right = col-1, left = row-1, use 4 loop
//order right -> bottom -> left -> top
//TC O(NxM) SC O(NxM)
function SpiralMatrix(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let top = 0;
  let left = 0;
  let right = m - 1; //col
  let bottom = n - 1; //row
  let ans = [];
  while (top <= bottom && left <= right) {
    //for left to right
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    top++;

    //for top to bottom
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    right--;

    //for right to left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
      bottom--;
    }

    //for bottom to top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }
      left++;
    }
  }
  return ans;
}
let mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let ans = SpiralMatrix(mat);

for (let i = 0; i < ans.length; i++) {
  console.log(ans[i] + " ");
}
console.log();
