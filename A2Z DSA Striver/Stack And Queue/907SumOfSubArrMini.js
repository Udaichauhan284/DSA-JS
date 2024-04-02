/* 907 Sum of Subarray Minimums
arr = [3,1,2,4]
o/p: 17
[3][1][2][4][3,1][3,1,2][3,1,2,4][1,2][1,2,4][2,4]
3+1+2+4+1+1+1+1+1+2 = 17

Brute Method - use of two nested loop, take min = arr[i], and then comapare it with j and change its value TC O(n^2), SC : O(1)
*/
const subArrayMinSum = (nums) => {
  let len = nums.length;
  let sum = 0;
  let M = 1e9+7;
  for(let i=0; i<len; i++){
    let min = nums[i];
    for(let j=i; j<len; j++){
      if(nums[j] < min){
        min = nums[j];
      }
      sum = (sum+min)%M;
    }
  }
  return sum;
}
let nums = [3,1,2,4];
// console.log(subArrayMinSum(nums));

// Optimal Approach - find Next Smaller Left and Right, use stack for that. store indeices, then find the distance to its smallest elem in left and right i-NSL and NSR-i, then find the totalSubarr those have that small elemen = d1*d2, then find for that elem, how many times it will add arr[i]*totalSubarraywith taht min TC : O(n), SC : O(n), for next smaller left , we will traverse from i=0 to len, and for next smaller right, we will traverse from len-1 to 1.
const subArrayMinSum1 = (nums) => {
  let len = nums.length;
  let M = 1e9+7;
  let sum = 0;
  let NSL = getNextSmallerElementLeft(nums,len);
  let NSR = getNextSmallerElementRight(nums,len);

  for(let i=0; i<len; i++){
    let d1 = i - NSL[i]; //distance form left to next smaller elem
    let d2 = NSR[i] - i; //distance from right

    let totalSubArrayWithThatMin = d1*d2;

    let addForThatElemForThatTotalSubArr = nums[i]*totalSubArrayWithThatMin;

    sum = (sum + addForThatElemForThatTotalSubArr)%M;
  }
  return sum;
}
function getNextSmallerElementLeft(nums,n){
  let result = [];
  let st = [];
  for(let i=0; i<n; i++){
    let ele = nums[i];
    while(st.length !== 0 && nums[st[st.length-1]] >= ele){ //non strict mode for duplicate
      st.pop();
    }

    result[i] = (st.length===0) ? -1 : st[st.length-1];
    st.push(i);
  }
  return result;
}

function getNextSmallerElementRight(nums,n){
  let result = [];
  let st = [];
  for(let i=n-1; i>=0; i--){
    let ele = nums[i];
    while(st.length !== 0 && nums[st[st.length-1]] > ele){
      st.pop();
    }
    result[i] = (st.length === 0) ? n : st[st.length-1];
    st.push(i);
  }
  return result;
}
console.log(subArrayMinSum1(nums));