/* 11.Container With Max Water
29 Nov 2024, Two Pointer, Array
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/
/*In this we use the two pointer and we need
two things width and heigth, we get the min
height from left and right one, as water fill
till minOne, now using two pointer if we 
are decreasing the width, so take height max
greedly. TC: O(n), SC: O(1)
*/
const maxArea = (height) => {
  let len = height.length;
  let left = 0, right=len-1;
  let maxWater = 0;
  while(left < right){
    //first take the width,whcih we start decreasig
    let w = right-left;
    //now take the height, we need minHeaight as till water filled
    let h = Math.min(height[left], height[right]);
    //now area
    let area = w * h;
    // now maxWater
    maxWater = Math.max(maxWater, area);
    //now start moving the pointer, to find out the maxWater
    if(height[left] > height[right]){
      //left is bigger, so move right pointer
      right--;
    }else{
      left++;
    }
  }
  return maxWater;
}