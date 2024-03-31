/* 2444. Count Subarrays with fixed bound
31 March 2024
nums [1,3,5,2,7,5] minK=1, maxK=5
o.p : 2 : {1,3,5}, {1,3,5,2}
 //Optimal Method : use of minI, maxI and badPosition, firts find the min of (minI,maxI), then find the ans by doing small - badPosition. TC O(n), O(1)
*/
const countSubArrays = (nums,minK,maxK) => {
  let ans = 0;
  let len = nums.length;
  let minKPos = -1;
  let maxKPos = -1;
  let badPos = -1;
  for(let i=0; i<len ; i++){
    if(nums[i] < minK || nums[i] > maxK) {
      badPos = i;
    }
    if(nums[i] === minK) minKPos = i;

    if(nums[i] === maxK) maxKPos = i;

    let smaller = Math.min(minKPos,maxKPos);
    let temp = smaller - badPos;

    ans += (temp < 0) ? 0 : temp;
  }
  return ans;
}
let nums = [1,3,5,2,7,5];
let minK = 1;
let maxK = 5;
console.log(countSubArrays(nums,minK,maxK));