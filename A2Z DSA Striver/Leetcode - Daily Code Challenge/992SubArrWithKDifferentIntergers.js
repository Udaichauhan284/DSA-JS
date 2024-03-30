/* 30 March 2024.
992. Subarrays with K different Integers
nums = [1,2,1,2,3], different nums [1,2,3], k=2
o/p : 7 : [1,2],[1,2,1],[1,2,1,2],[2,1],[2,1,2],[1,2],[2,3]

1.Optimal Method : use Sliding Window for nums,k and nums,k-1
TC O(n), SC O(n)
*/
const slidingWindow = (nums,k) => {
  let len = nums.length;
  let i=0,j=0;
  let count =0;
  let map = new Map();
  while(j < len){
    map.set(nums[j], (map.get(nums[j]) || 0)+1);

    while(map.size > k){//then shrink the window
      map.set(nums[i],(map.get(nums[i]) || 0)-1);
      if(map.get(nums[i]) === 0){
        map.delete(nums[i]);
      }
      i++;
    } 
    count += j-i+1;
    j++;
  }
  return count;
}
const subArrays = (nums,k) => {
  return slidingWindow(nums,k) - slidingWindow(nums,k-1);
}