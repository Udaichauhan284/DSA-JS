 //solving on Daily Leetcode 12 April 2024, 1.Brute Method, let first get the left max and right max for every height, TC: O(3n), SC : O(2n)
// var trap = function(height) {
//     let len = height.length;
//     let leftMax = [];
//     let rightMax = [];

//     //left max, for left on
//     leftMax[0] = height[0];
//     for(let i=1; i<len; i++){
//       leftMax[i] = Math.max(leftMax[i-1], height[i]);
//     }

//     //rightMax
//     rightMax[len-1] = height[len-1];
//     for(let i=len-2; i>=0; i--){
//       rightMax[i] = Math.max(rightMax[i+1], height[i]);
//     }

//     //water store, sum of min of left and right max - height[i]
//     let waterTrap = 0;
//     for(let i=0; i<len; i++){
//       waterTrap += Math.min(leftMax[i], rightMax[i]) - height[i];
//     }
//     return waterTrap;
// };

//Optimal Method - take a variable for leftMax and rightMax, use of twoPointer method, sliding Window, O(n), O(1)
const trap = (height) => {
  let len = height.length;
  let left = 0;
  let right = len-1;
  let leftMax = 0;
  let rightMax = 0;
  let waterTrapSum = 0;

  while(left < right){
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

  //now compare the height of left and right, which one is small, that much water will add - currHeight;
    if(height[left] < height[right]){
       //see here left height is small, so minus leftmax from currHeight;
      waterTrapSum += leftMax - height[left];
      left++;
    }else {//measn right height is small
      waterTrapSum += rightMax - height[right];
      right--;
    }
  }
    return waterTrapSum;
};