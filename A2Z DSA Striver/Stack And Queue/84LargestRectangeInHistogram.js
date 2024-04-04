/* 84. Largest Recatange In Histogram
heights = [2,1,5,6,2,3]
o/p: 10
5*2 = 10, 2 is width.

1/Brute Approach, find the minHeight for each histogram and then  find the area for that. TC : O(n^2), SC : O(1)
*/
const bruteMaxArea = (heights) => {
  let len = heights.length;
  let maxArea = 0;
  for(let i=0; i<len; i++){
    let minHeight = Number.MAX_SAFE_INTEGER;
    for(let j=i; j<len; j++){
      minHeight = Math.min(minHeight,heights[j]);
      maxArea = Math.max(maxArea, minHeight * (j-i+1));
    }
  }
  return maxArea
}
let heights = [2,1,5,6,2,3];
// console.log(bruteMaxArea(heights));

//Optimal Method, use the same approach NextSmallLeft, NextSmallRight, and for finding the maxArea find the max for maxArea , height[i],NSR[i]-NSL[i]-1, TC : O(n), SC : O(2n)
const largestRectangleArea = (heights) => {
  let len = heights.length;
  let NSR = getSmallerElemRight(heights,len);
  let NSL = getSmallerElemLeft(heights,len);
  let maxArea = 0;

  for(let i=0; i<len; i++){
    maxArea = Math.max(maxArea, heights[i] * (NSR[i] - NSL[i] - 1));
  }
  return maxArea;
}
function getSmallerElemLeft(heights,n){ //for left side i=0 to n
  let st = [];
  let result = [];
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
function getSmallerElemRight(heights,n){ //for right side i=n-1 to 0.
  let st = [];
  let result = [];
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
console.log(largestRectangleArea(heights));