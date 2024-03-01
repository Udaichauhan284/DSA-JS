/* 240. Search a 2D matrix II
find the target in matrix, matrix is integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
*/
//brute - traverse both arr and find the ans - O(n*m)
var searchMatrix = function (matrix, target) {
  let n = matrix.length;
  let m = matrix[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};

//use of BInary Search findMax in row and then travers in col
//TC O(nlogm)
const findMax = (mat,n,m,col) => {
  let maxElem = Number.MIN_SAFE_INTEGER;
  let index =-1;
  for(let i=0; i<n; i++){
    if(mat[i][col] > maxElem){
      maxElem = mat[i][col];
      index = i;
    }
  }
  return index;
}
var findPeakGrid = function(mat) {
    let n = mat.length;
    let m = mat[0].length;
    let low= 0, high = m-1;
    while(low<=high){
      let mid = Math.floor((low+high)/2);
      let maxRowIndex = findMax(mat,n,m,mid);
      let left = mid-1 >= 0 ? mat[maxRowIndex][mid-1] : -1;
      let right = mid+1 < m ? mat[maxRowIndex][mid+1] : -1;
      if(mat[maxRowIndex][mid] > left && mat[maxRowIndex][mid] > right){
        return [maxRowIndex,mid];
      }else if(mat[maxRowIndex][mid] < left){
        high = mid-1;
      }else {
        low= mid+1;
      }
    }
    return [-1,-1];
};
