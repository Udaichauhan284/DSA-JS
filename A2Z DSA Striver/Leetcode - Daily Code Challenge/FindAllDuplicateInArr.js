/* 25 march 2024
424. Find all duplicates in an array.
array nums of length n, where all the integere of nums are in range of [1 to n] and each integer apprears once or twice, return an array for all the integer which appears twice.

Brute Approach - first sort the arr and find the adjacent element which are repeating TC O(nlogn), SC O(1), just result arr.
*/
const findDuplicate = (nums) => {
  let len = nums.length;
  let result = [];

  //sorting the nums array
  nums.sort((a,b) => a-b);

  for(let i=1; i<len; i++){
    if(nums[i-1] === nums[i]){
      result.push(nums[i-1]);
    }
  }
  return result;
}
let nums = [4,3,2,7,8,2,3,1];
console.log(findDuplicate(nums));


//Optimal App - see arr length is n and array elem is from 1 to n. and whenever such condition is there like 1 to n, we can use one method which is "use number as indexs", but here just one twist is that len is n and index from 0 to n-1, so do like this idx = num-1;, and num is abs(nums[i]), abs is because we mark that -1 to when we vist that elem in array, TC O(n)
const findDubplicates1 = (nums) => {
  let len = nums.length;
  let result = [];
  if(len === 1){
    return result;
  }

  for(let i=0; i<len; i++){
    let num = Math.abs(nums[i]);
    let idx = num - 1;

    if(nums[idx] < 0){
      result.push(num);
    }else {
      nums[idx] *= -1;
    }
  }
  return result;
}
let nums1 = [1,1,2];
console.log(findDubplicates1(nums1));