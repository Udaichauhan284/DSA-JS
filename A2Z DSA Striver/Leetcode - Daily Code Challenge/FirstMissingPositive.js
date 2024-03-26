/* 26. Mar 2024
41. First Missing Positive
Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
Example 1:
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Example 2:
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
*/
 //Optimal App - we need to find from 1 to n range, (so we use number as index method) and need to ignore 0 and -ve and also elem which are bigger than n(nums.length), ao mark them 1. before marking them 1 just see, is there 1 presnt in nums
 //TC O(n), SC O(1)
 const firstPositiveNumber = (nums) => {
  let len = nums.length;
  let contain1 = false;

  //loop for findind the elem which are 1, -ve and (>n)
  for(let i=0; i<len; i++){
    if(nums[i] === 1){
      contain1 = true;
    }
    //making -ve and 0 and greater number 1, we need to only 1 to n
    if(nums[i] <= 0 || nums[i] > len){
      nums[i] = 1;
    }
  }

  //if no 1 is there
  if(contain1 === false){
    return 1;
  }

  //making number visted and marking them -ve
  for(let i=0; i<len; i++){
    let num = Math.abs(nums[i]);
    let idx = num - 1;

    if(nums[idx] < 0) continue;

    nums[idx] *= -1;
  }

  //now again traversing, for seeing which elem is -ve and see which is positive elem, you found positive return i+!;
  for(let i=0; i<len; i++){
    if(nums[i] > 0){
      return i+1;
    }
  }
  return len+1; //if in array 1 to n return len + 1;
 }
 let nums = [1,2,0];
 console.log(firstPositiveNumber(nums));

//Brute Appr - use of Map, TC O(n), SC O(n)
var bruteMethod = function(nums) {
  const mp = new Map();
  let maxi = Number.MIN_SAFE_INTEGER;
  for (let num of nums) {
      mp.set(num, true);
      maxi = Math.max(maxi,num);
  }
  for (let i = 1; i < maxi; i++) {
      if (!mp.has(i)) {
          return i;
      }
  }
  return maxi < 0 ? 1 : maxi + 1;
};
let nums1 = [3,4,-1,1];
console.log("Anser from Brute Method");
console.log(bruteMethod(nums));
console.log(bruteMethod(nums1));