/* 496. Next Greater Element 1.
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
nums1 = [4,1,2], nums2 = [1,3,4,2]
o/p for nums1 = [-1,3,-1]

1.brute use of two loops O(n^2)
*/
//TC O(nums1.length + nums2.length) O(n+m), SC O(n+m)
const nextGreaterElement = function(nums1,nums2){
  let st = [];
  let map = new Map();
  let n = nums2.length;
  for(let i=n-1; i>=0; i--){
    let ele = nums2[i];
    while(st.length !== 0 && st[st.length-1] <= ele){
      st.pop();
    }
    let res = (st.length === 0) ? -1 : st[st.length-1];
    map.set(ele, res);
    st.push(ele);
  }

  //now find the main ans, traverse the nums1 and see the value from map
  let result = [];
  for(let i=0; i<nums1.length; i++){
    result.push(map.get(nums1[i]));
  }
  return result;
}
let nums1=[4,1,2];
let nums2=[1,3,4,2];
console.log(nextGreaterElement(nums1,nums2));