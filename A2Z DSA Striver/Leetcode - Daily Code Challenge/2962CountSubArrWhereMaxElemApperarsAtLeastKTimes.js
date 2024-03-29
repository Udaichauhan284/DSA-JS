/* 29 Mar 2024
2962. Count Subarrays where max element appears at least k times.
nums = [1,3,2,3,3], k = 2.
o/p: 6 [1,3,2,3],[1,3,2,3,3],[3,2,3],[3,2,3,3],[2,3,3],[3,3]
*/
//Optimal method - solve using sliding window - for counting the number of subarray, result n-j, beacuse here mention we need atleast k, so if we take next elem of j, that also make sense, thats why n-j TC O(n), SC O(1).
const countSubarrays = (nums) => {
  let len = nums.length;
  let max = nums[0];
  for(let i=1; i<len; i++){
    if(nums[i]>max){
      max = nums[i];
    }
  }

  let i=0,j=0,countMax=0,result=0;
  while(j < len){
    if(nums[j] === max){
      countMax++;
    }

    while(countMax >= k){
      result += len-j;

      if(nums[i] === max){
        countMax--
      }
      i++;
    }
    j++;
  }
  return result;
}
let nums = [1,3,2,3,3];
let k=2;
console.log(countSubarrays(nums,k));