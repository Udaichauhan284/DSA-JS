/*1861. Rotating The Box
23 Nov 2024, Leetcode POTD, array, Matrix

Input: box = [["#",".","#"]]
Output: [["."],
         ["#"],
         ["#"]]
*/

/*Method 1-first use Transpose and then reverse the row
so that we get the 90deg of box. then apply gravity on
box.
TC: O(col * row * row)
*/
var rotateTheBox = function (box) {
  let m = box.length;
  let n = box[0].length;

  let result = Array.from({ length: n }, () => Array(m));

  //transpose
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          result[i][j] = box[j][i];
      }
  }
  //now reverse the row for 90deg rotate
  for (let row of result) {
      row.reverse();
  }
  //now apply gravity
  for (let j = 0; j < m; j++) {
      for (let i = n - 1; i >= 0; i--) {
          if (result[i][j] === '.') {
              let stoneRow = -1;
              for (let k = i - 1; k >= 0; k--) {
                  if (result[k][j] == '*') {
                      break;
                  } else if (result[k][j] == '#') {
                      stoneRow = k;
                      break;
                  }
              }
              if(stoneRow !== -1){
                  result[i][j] = "#";
                  result[stoneRow][j] = ".";
              }
          }
      }
  }
  return result;
};

/*Method 2-first use Transpose and then reverse the row
so that we get the 90deg of box. then apply gravity on
box.
TC: O(col * row)
*/
var rotateTheBox = function (box) {
  let m = box.length;
  let n = box[0].length;

  let result = Array.from({ length: n }, () => Array(m));

  //transpose
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          result[i][j] = box[j][i];
      }
  }
  //now reverse the row for 90deg rotate
  for (let row of result) {
      row.reverse();
  }
  //now apply gravity
  for(let j=0; j<m; j++){
      let spaceBottom = n-1;
      for(let i=n-1; i>=0; i--){
          if(result[i][j] === "*"){
              spaceBottom = i-1;
              continue;
          }
          if(result[i][j] === "#"){
              result[i][j] = ".";
              result[spaceBottom][j] = "#";
              spaceBottom--;
          }
      }
  }
  return result;
};