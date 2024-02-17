//Optimal approach TC O(n^2) + O(n^2) => 2O(n^2) ~ O(n^2)
//Step transpse row to col and reverse row 
let rotate = function(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  //transpose
  for(let i=0; i<n; i++){
    for(let j=i; j<m; j++){
      //let temp = matrix[i][j]
      //matrix[i][j] = matrix[j][i]
      //matrix[j][i] = temp;
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  //reverse
  for(let i=0; i<n; i++){
    for(let j=0; j< Math.floor(n/2); j++){
      [matrix[i][j], matrix[i][n-1-j]] = [matrix[i][n-1-j], matrix[i][j]];
    }
  }
  return matrix;
};