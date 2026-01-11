/* 85. Maximal Rectangle
Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
*/
 //in this question we use the largest area of rectangle from histogram approach, for every row, we count the maxHistogram, and compare the currAns with maxAns. also for next row add the above 1's and if you see zero make that curr[j]==0. 
const maximalRectangle = (matrix) => {
  let m = matrix.length;
  let n = matrix[0].length;
  let currRow = matrix[0];
  let maxAns = maxHistogram(currRow);

  for(let i=1; i<m; i++){
    for(let j=0; j<n; j++){
      if(matrix[i][j] === "1"){
        currRow[j]++;
      }else{
        currRow[j] = 0;
      }
    }
    let currAns = maxHistogram(currRow);
    maxAns = Math.max(maxAns,currAns);
  }
  return maxAns;
}
//maxHistogram code, this will use in the maximalRectangel
function maxHistogram(heights){
  let len = heights.length;
  let NSL = getNextSmallerLeft(heights,len);
  let NSR = getNextSmallerRight(heights,len);
  let maxArea = 0;
  for(let i=0; i<len; i++){
    maxArea = Math.max(maxArea, heights[i] * (NSR[i] - NSL[i] - 1));
  }
  return maxArea;
}
function getNextSmallerLeft(heights,n){
  let result = [];
  let st = [];
  for(let i=0; i<n; i++){
    let ele = heights[i];
    while(st.length !== 0 && heights[st[st.length-1]] >= ele){
      st.pop();
    }
    result[i] = (st.length === 0) ? -1 : st[st.length-1];
    st.push(i);
  }
  return result;
}
function getNextSmallerRight(heights,n){
  let result = [];
  let st = [];
  for(let i=n-1; i>=0; i--){
    let ele = heights[i];
    while(st.length !== 0 && heights[st[st.length-1]] > ele){
      st.pop();
    }
    result[i] = (st.length === 0) ? n : st[st.length-1];
    st.push(i);
  }
  return result;
}
let matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
console.log(maximalRectangle(matrix));

var maximalRectangle = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let currRow = matrix[0];
    let maxAns = maxHistogram(currRow);
    for(let i=1; i<m; i++){
      for(let j=0; j<n; j++){
        if(matrix[i][j] === '1'){
          currRow[j]++;
        }else{
          currRow[j]=0;
        }
      }
      let currAns = maxHistogram(currRow);
      maxAns = Math.max(maxAns, currAns);
    }
    return maxAns;
};
function maxHistogram(nums){
  let len = nums.length;
  let NSL = getNextSmallElemLeft(nums);
  let NSR = getNextSmallElemRight(nums);
  let maxArea = 0;
  for(let i=0; i<len; i++){
    maxArea = Math.max(maxArea, nums[i]*(NSR[i] - NSL[i] -1));
  }
  return maxArea;
}
function getNextSmallElemLeft(nums){
  let result = [];
  let st = [];
  let len = nums.length;
  for(let i=0; i<len; i++){
    let ele = nums[i];
    while(st.length !== 0 && nums[st[st.length-1]] >= ele){
      st.pop();
    }
    //now put in result,if st.length === 0 -> -1
    result[i] = (st.length === 0) ? -1 : st[st.length-1];
    st.push(i);
  }
  return result;
}
function getNextSmallElemRight(nums){
  let result = [];
  let st=[];
  let len = nums.length;
  for(let i=len-1; i>=0; i--){
    let ele = nums[i];
    while(st.length !== 0 && nums[st[st.length-1]] > ele){
      st.pop();
    }
    //now put in result arr, if you able to found the smalles elem right
    result[i] = (st.length === 0) ? len : st[st.length-1];
    st.push(i);
  }
  return result;
}