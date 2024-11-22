/* 1072. Flip Columns For Maximum Number of Equal Rows
22 Nov 2024, Leetcode POTD, array, Matrix

Input: matrix = [[0,1],[1,1]]
Output: 1
Explanation: After flipping no values, 1 row has all values equal.
*/

/*Brute Method.1
in this we need to check same as currRow or inverted row
for currRow, so that if we flip these two we get the same
row, and we can get Max rows.
TC: O(m * (n + (m*n))) ~ O(m^2 * n)
*/
var maxEqualRowsAfterFlips = function(matrix) {
  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  let result = 0;
  for(let currRow of matrix){ //O(m)
      //let take inverted row, for checking
      let inverted = Array(colLen);
      //now traverse over the currRow and check ele
      for(let i=0; i<colLen; i++){ //O(n)
          inverted[i] = currRow[i] === 0 ? 1 : 0;
      }

      let count = 0;
      //now tarverse to check the same row and inverted
      for(let row of matrix){ //O(m * n)
          if(areArrEqual(row,currRow) || areArrEqual(row,inverted)){
              count++;
          }
      }
      result = Math.max(result, count);
  }
  return result;
};
const areArrEqual = (arr1, arr2) => {
  for(let i=0; i<arr1.length; i++){
      if(arr1[i] !== arr2[i]){
          return false;
      }
  }
  return true;
}



/*Method 2:in this we see the same row pattern
000->sss, 001->ssb, 110->ssb, so here we are seeing
we have ssb have 2 row, so if we flip these we get the max
row, for counting this we can take the map
TC: O(row * col), SC: O(row * col)
*/
var maxEqualRowsAfterFlips1 = function(matrix) {
  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  let map = new Map();
  let maxRows = 0;
  for(let row of matrix){
      let rowSequence = "";
      let firstVal = row[0];
      for(let col=0; col<colLen; col++){
          if(row[col] === firstVal){
              rowSequence += "S";
          }else{
              rowSequence += "B";
          }
      }
      map.set(rowSequence, (map.get(rowSequence) || 0)+1);
  }
  //now traverse on map
  for(let [seq, count] of map){
      maxRows = Math.max(maxRows,count);
  }
  return maxRows;
};