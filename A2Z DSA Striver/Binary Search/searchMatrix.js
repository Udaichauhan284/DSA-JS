//74. Search a 2d array
//brute - O(N X M)
function searchMatrix(matrix, target) {
  const n = matrix.length;
  const m = matrix[0].length;

  // traverse the matrix:
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (matrix[i][j] === target)
              return true;
      }
  }
  return false;
}

const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
searchMatrix(matrix, 8) === true ? console.log("true") : console.log("false");

//optimal. - O(log(NxM))
function searchMatrix(matrix, target) {
  let n = matrix.length;
  let m = matrix[0].length;

  // apply binary search:
  let low = 0, high = n * m - 1;
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let row = Math.floor(mid / m);
      let col = mid % m;
      
      if (matrix[row][col] === target) return true;
      else if (matrix[row][col] < target) low = mid + 1;
      else high = mid - 1;
  }
  return false;
}

let matrix1 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let result = searchMatrix(matrix, 8);
console.log(result ? "true" : "false");

