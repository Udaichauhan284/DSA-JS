/* Set Zero Matrix LC 73, if element is zero, make row and col to zero
*/
//Brute Force - Traverse through matix and when find zero change rol and col to -1. and then change -1 to zero
//T.C O(n*m)*(n+m) + O(n*m)
//markRow
// function markRow(matrix, n, m, i){
//   //traverse col
//   for(let j=0; j<m; j++){
//     if(matrix[i][j] !== 0){
//       matrix[i][j] = -1;
//     }
//   }
// }
// //marCol
// function markCol(matrix,n,m,j){
//   //traverse row
//   for(let i=0; i<n; i++){
//     if(matrix[i][j] !== 0){
//       matrix[i][j] = -1;
//     }
//   }
// }
// function SetZeroMatrix(matrix,n,m){

//   for(let i=0; i<n; i++){
//     for(let j=0; j<m; j++){
//       if(matrix[i][j] === 0){
//         markRow(matrix, n, m, i);
//         markCol(matrix, n, m, j);
//       }
//     }
//   }

//   //traverse
//   for(let i=0; i<n; i++){
//     for(let j=0; j<m; j++){
//       if(matrix[i][j] === -1){
//         matrix[i][j] = 0;
//       }
//     }
//   }
//   return matrix;
// }



//Optimal Approach - make inplace row and col and take extra col0
//TC O(2(nxm) SC O(1)
function SetZeroMatrix(matrix){
  let n = matrix.length;
  let m = matrix[0].length;
  let col0 = 1;

  for(let i=0; i<n ; i++){
    for(let j=0; j<m; j++){
      if(matrix[i][j] === 0){
        matrix[i][0] = 0; //mark ith row
        if(j !== 0){
          matrix[0][j] = 0;
        }else {
          col0 = 0;
        }
      }
    }
  }

  //step2 traverser from 1 to n-1 and m-1
  for(let i=1; i<n; i++){
    for(j=1; j<m; j++){
      if(matrix[i][j] !== 0){
        if(matrix[i][0] === 0 || matrix[0][j] === 0){
          matrix[i][j] = 0;
        }
      }
    }
  }
  
  //step 3 check 1st col and 1st row
  if(matrix[0][0] === 0){
    for(let j=0; j<m ; j++){
      matrix[0][j] = 0;
    }
  }
  if(col0 === 0){
    for(let i=0; i<n; i++){
      matrix[i][0] = 0;
    }
  }
  return matrix;
}

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
console.log(SetZeroMatrix(matrix));

// console.log("The Final matrix is: ");
// for (let i = 0; i < n; i++) {
//   console.log(ans[i].join(" "));
// }