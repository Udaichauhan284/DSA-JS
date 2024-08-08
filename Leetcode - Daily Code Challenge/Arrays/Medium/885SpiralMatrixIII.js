/* 885. Spiral Matrox III
08 August 2024, Leetcode POTD, Array, Matrix, Simulation.
Input: rows = 5, cols = 6, rStart = 1, cStart = 4
Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]
*/

/*In this we just do what asked, maintain a direction array, for moving in E,S,W,N
and push in result till it reach last cell of matrix, when we know the last cell
we know in matrix the number of cell are Rows * cols.
T.C. As we moving outside of matrix, so we max traverse of row and col
O(max(row, col)^2) ~ O(n^2), SC: O(row*col) ~ O(1)
*/
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
  let direction = [[0,1],[1,0],[0,-1],[-1,0]]; //east, south, west, north
  let steps = 0;
  let dir = 0; //in starting it on east, we need to move E->S->W->N->E->S..
  let totalSize = rows * cols;
  let currRowStart = rStart;
  let currColStart = cStart; //dont change the inputs.
  let result = [];
  //in starting result have first value of rStart,cStart as it will start 
  result.push([currRowStart,currColStart]);

  while(result.length < totalSize){
      //till we each at last we keep filling the result, we fill row*cols
      if(dir === 0 || dir === 2){
          steps++; //for spiral, when we move E and W, we need to increase steps;
      }
      //now move, till the steps
      for(let i=0; i<steps; i++){
          currRowStart += direction[dir][0]; //row -> south and north
          currColStart += direction[dir][1]; //col -> east and west

          if(currRowStart >=0 && currRowStart < rows && currColStart >= 0 && currColStart < cols){
              //valid cell
              result.push([currRowStart, currColStart]);
          }
      }
      //change the direction , E->S->W->N then again east, south ......
      dir = (dir+1)%4; //when dir is at north dir=3, 3+1%4 = 0, again on east
  }
  return result;
};