/* 24 Mar 2024
287. Find the duplicate number.
array length of n+1, and in that array eleme will be from 1 to n.
nums = [1,3,4,2,2], o/p: 2
*/
//Brute approach nested loop O(n^2)
function duplicate(nums){
  for(let i=0; i<nums.length; i++){
    for(let j=i+1; j<nums.length; j++){
      if(nums[i] === nums[j]){
        return nums[j];
      }
    }
  }
}
console.log(duplicate([1,3,4,2,2]));

//Optimal Way: use of Fast and slow pointer, because we need to find duplicate number which is same as cycle, and also here we work on index of array because elemen is same as index 1 to n.
const findDuplicate = (nums) => {
  let slow = nums[0];
  let fast = nums[0];

  slow = nums[slow];
  fast = nums[nums[fast]];

  while(slow !== fast){
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  //now find that elem which causing the cycle, make slow again nums[0], and move only one pointer
  slow = nums[0];
  while(slow !== fast){
    slow = nums[slow];
    fast = nums[fast];
  }
  return fast;
}
console.log(findDuplicate([3,1,3,4,2]))