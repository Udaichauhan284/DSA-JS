/* 503. Next Greater Element II.
this is same as next greater element 1.
in this just we need to rotate to find the next greater element for last one.
nums = [1,2,1], o/p [2,-1.2]
*/
const nextGreaterElementII = (nums) => {
  let n = nums.length;
  let st = [];
  let result = [];
  for(let i=2*n-1; i>=0; i--){
    let ele = nums[i%n];
    while(st.length !== 0 && st[st.length -1] <= ele){
      st.pop();
    }
    if(i < n){
      result[i] = (st.length === 0) ? -1 : st[st.length-1];
    }
    st.push(ele);
  }
  return result;
}
let nums = [1,2,1];
console.log(nextGreaterElementII(nums));