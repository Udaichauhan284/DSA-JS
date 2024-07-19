/* 1380. Lucky Numbers in a Matrix
19 July 2024, Leetcode POTD, Array, Matrix
Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
Output: [15]
Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
*/

/*Method 1- first find out rowMin and then colMax, then again start 
the loop to check, which matrix elem is common in both arr, return
it. TC: O(n*m)*3~ O(n*m), SC: O(n)
*/
var luckyNumbers = function (matrix) {
  let rLen = matrix.length;
  let cLen = matrix[0].length;
  let rowMin = Array(rLen).fill(0);
  let colMax = Array(cLen).fill(0);
  let lucky = [];

  //check in each row, min elem
  for (let row = 0; row < rLen; row++) {
    let minEl = Number.MAX_VALUE;
    for (let col = 0; col < cLen; col++) {
      minEl = Math.min(minEl, matrix[row][col]);
    }
    rowMin[row] = minEl; //here i am pushing into rowMin
  }
  //check in each col, max elem
  for (let col = 0; col < cLen; col++) {
    let maxEl = Number.MIN_VALUE;
    for (let row = 0; row < rLen; row++) {
      maxEl = Math.max(maxEl, matrix[row][col]);
    }
    colMax[col] = maxEl;
  }

  //now check which matrix elem are common
  for (let row = 0; row < rLen; row++) {
    for (let col = 0; col < cLen; col++) {
      if (
        matrix[row][col] === rowMin[row] &&
        matrix[row][col] === colMax[col]
      ) {
        lucky.push(matrix[row][col]);
      }
    }
  }
  return lucky;
};



/*Optimal Method, there is contradiction in this, we can't have
2 lucky number in this. So first find the rowMin-then find max
among the rowMin, now find the colMax-then find the min among
the colMax. if(rowMin_sMax === colMax_sMin), return anyone
TC: O(2(n*m)) ~ O(n*m), SC: O(1)
*/
var luckyNumbers  = function(matrix) {
  let rLen = matrix.length;
  let cLen = matrix[0].length;
  
  //find the rowMin from the matrix
  let rowMin_sMax = Number.MIN_VALUE;
  for(let row=0; row<rLen; row++){
      let minEl = Number.MAX_VALUE;
      for(let col=0; col<cLen; col++){
          minEl = Math.min(minEl, matrix[row][col]);
      }
      rowMin_sMax = Math.max(rowMin_sMax, minEl);
  }

  //find the colMax from the Matrix
  let colMax_sMin = Number.MAX_VALUE;
  for(let col=0; col<cLen; col++){
      let maxEl = Number.MIN_VALUE;
      for(let row=0; row<rLen; row++){
          maxEl = Math.max(maxEl, matrix[row][col]);
      }
      colMax_sMin = Math.min(colMax_sMin, maxEl);
  }

  if(colMax_sMin === rowMin_sMax){
      return [rowMin_sMax]; //or colMax_sMin;
  }
  //otherwise
  return [];
};
