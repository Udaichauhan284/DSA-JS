/* 2022. Convert 1D Array Into 2D Array - Easy
1 September 2024, Leetcode POTD, Array, Math, simulation

Input: original = [1,2,3,4], m = 2, n = 2
Output: [[1,2],[3,4]]
Explanation: The constructed 2D array should contain 2 rows and 2 columns.
The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.
The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.
*/

/*Method 1 - use of Simple Nested for loop
TC: O(m*n), m-rows, n - cols
SC: O(1), no need to take twoDArr as space
*/
var construct2DArray = function(original, m, n) {
  let twoDArr = Array.from({length: m}, () => Array(n).fill(0));
  let len = original.length;

  if(m*n !== len){
      //measn m*n is not equally to original len, we cant change to 2d arr
      return [];
  }
  //simple use nested for loop
  let idx = 0; //for original index
  for(let i=0; i<m; i++){
      for(let j=0; j<n; j++){
          twoDArr[i][j] = original[idx];
          idx++;
      }
  }
  return twoDArr;
};


/*Method 2- use of one loop
whenever need to convert the 1d array to 2d array, we need to need
to keep in mind, which 1d elem goes where
Row - i/cols, Col elem - i%cols
TC: O(m*n), SC: O(1)
*/
var construct2DArray = function(original, m, n) {
  let result = Array.from({length: m}, () => Array(n).fill(0));

  let len = original.length;
  if(len !== (m*n)){
      return [];
  }
  //for loop 
  for(let i=0; i<len; i++){
      let row = Math.floor(i/n); //n is cols, row elem
      let col = i%n; //n is cols, col elem
      result[row][col] = original[i];
  }
  return result;
};