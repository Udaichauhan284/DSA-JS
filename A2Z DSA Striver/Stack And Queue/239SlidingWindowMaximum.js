/* 239. Sliding WIndow Maximum
nums = [1,3,-1,-3,5,3,6,7], k=3
o/p : [3,3,5,5,6,7]
*/
//Brute Approach 1, take two pointer left and right, move right k point first, then search for max from left to right TC: O(n*k) ~~ O(n^2), SC : O(n), just for result
const slidingWindowMax = (nums,k) => {
  let len = nums.length;
  let left = 0;
  let right = 0;
  let ans = [];
  while(right < k-1){
    right++;
  }
  while(right < len){
    getMax(nums,left,right,ans);
    left++;
    right++;
  }
  return ans;
}
function getMax(nums,left,right,ans){
  let max = Number.MIN_SAFE_INTEGER;
  for(let i=left; i<=right; i++){
    max = Math.max(max,nums[i]);
  }
  ans.push(max);
}
console.log(slidingWindowMax([1,3,-1,-3,5,3,6,7],3));

//Optimal Mwthod - use of Monotonic Dequeue decreasing. TC : O(n), SC : O(1)
const optimalSlidingWindowMax = (nums,k) => {
  let result = [];
  let q = [];
  for(let i=0; i<nums.length; i++){
    let ele = nums[i];
    while(q.length !== 0 && nums[q[q.length-1]] <= ele){
      q.pop(); //here we need maximum, so if curr elem is bigger than q first elem or previous elem, remove the elem and push the curr ele index. so we can maintain the monotonic decreasing queue.
    }
    q.push(i);

    if(q[0] === i-k){
      q.shift(); // remove the first eleme from queue window will move next.
    }
    if(i >= k-1){
      result.push(nums[q[0]]);
    }
  }
  return result;
}
console.log(optimalSlidingWindowMax([1,3,-1,-3,5,3,6,7],3))