/* Find the next smaller element.
smaller element will be on left side.
nums[3,2,1] o/p [-1,-1,-1]
nums[4,5,2,10,9] o/p [-1,4,-1,2,2]
*/
const nextSmallerElement = (nums) => {
  let n = nums.length;
  let result = [];
  let st = [];
  for(let i=0; i<n; i++){
    let ele = nums[i];
    while(st.length !== 0 && st[st.length-1] >= ele){
      st.pop();
    }
    result[i] = (st.length===0) ? -1 : st[st.length-1];
    st.push(ele);
  }
  return result;
}
let nums = [4,5,2,10,9];
console.log(nextSmallerElement(nums)); //[ -1, 4, -1, 2, 2 ]
let nums1 = [3,2,1];
console.log(nextSmallerElement(nums1)); //[ -1, -1, -1 ]