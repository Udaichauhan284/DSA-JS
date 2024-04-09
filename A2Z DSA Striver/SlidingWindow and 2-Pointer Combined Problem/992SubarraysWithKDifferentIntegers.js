/* 992. Subarrays with K different integers.
nums = [1,2,1,2,3], k=3
o/p: 7
*/
//brute method - use of nested loop - and see if map.size === k if yes count++ else if map.size > k break : TC : O(n^2), SC : O(n)
// var subarraysWithKDistinct = function(nums, k) {
//     let len = nums.length;
//     let count=0;
//     for(let i=0; i<len; i++){
//       let map = new Map();
//       for(let j=i; j<len; j++){
//         map.set(nums[j], (map.get(nums[j]) || 0)+1);
//         if(map.size === k){
//           count++;
//         }else if(map.size > k){
//           break;
//         }
//       }
//     }
//     return count;
// };

//Optimal Method - change this question "Number of Subarray with distinct <= k, or you can say atmost", and then main function call this function for two times, for <=k and <=k-1,[TC:O(n), SC: O(n)]*2 

const helperFunction = (nums,k) => { //this is function to calculate for num of sub with distinct atmost k.
  let len = nums.length;
  let left = 0;
  let right = 0;
  let count = 0;
  let map = new Map();

  while(right < len){
    map.set(nums[right], (map.get(nums[right]) || 0)+1);

    while(map.size > k){
      map.set(nums[left], (map.get(nums[left]) || 0)-1);

      if(map.get(nums[left]) === 0){
        map.delete(nums[left]);
      }
      left++;
    }
    count += right+1-left;
    right++;
  }
  return count;
}
const subarraysWithKDistinct = (nums,k) => {
  return helperFunction(nums,k) - helperFunction(nums,k-1);
}