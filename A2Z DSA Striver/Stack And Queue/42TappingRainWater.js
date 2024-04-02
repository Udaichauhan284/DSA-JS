/* 42. Trapping Rain Water
height = [4,2,0,3,2,5]
o.p - 9

Brute Method - take a leftMax amd rightMax Array - and store the max of left till that curr elem and same for rightMax - then for sum min(lefyMax,rightMax) - currHeigth[i]
TC O(n) +O(n)+ O(n) ~ O(3n) ~ O(n), Sc: O(2n)

Optimal Method - instead of taking leftMax, rightMax arr - take variable for that
left=0, right=n-1, left<right , find the max of leftMax, and height[left], rightMax and hieght[right], sum+= min(lmax, hieght[left]), same as right
TC : O(n), SC O(1) -- This knowns as Two Pointer Approach
*/
const trap = (height) => {
  let n = height.length;
  let leftMax = [];
  let rightMax = [];

  //for left
  leftMax[0] = height[0];
  for(let i=1; i<n; i++){
    leftMax[i] = Math.max(leftMax[i-1],height[i]);
  }

  //for right
  rightMax[n-1] = height[n-1];
  for(let i=n-2; i>=0; i--){
    rightMax[i] = Math.max(rightMax[i+1],height[i]);
  }

  let sum = 0;
  for(let i=0; i<n; i++){
    sum += Math.min(leftMax[i],rightMax[i]) - height[i];
  }
  return sum;
}
let heights = [4,2,0,3,2,5];
// console.log(trap(heights));

//Optimal Method: take two pointer left,right and the take leftMax, rightMax TC O(n), SC O(1)
const trap1 = (height) =>{
  let n = height.length;
  let left = 0;
  let right = n-1;
  let leftMax = 0;
  let rightMax = 0;
  let sum = 0;

  while(left < right){
    leftMax = Math.max(leftMax,height[left]);
    rightMax = Math.max(rightMax,height[right]);

    if(height[left] < height[right]){
      sum += leftMax - height[left];
      left++;
    }else {
      sum += rightMax - height[right];
      right--;
    }
  }
  return sum;
}
console.log(trap1(heights));