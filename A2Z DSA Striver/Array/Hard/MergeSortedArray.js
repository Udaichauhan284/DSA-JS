/* 88. Merge Sorted Array
nums1 = [1,2,3,0,0,0] m =3, nums2 = [2,5,6] n=3
output nums1 = [1,2,2,3,5,6];
here take 3 pointer i = m-1, j = n-1, k = m+n-1
*/
//TC O(n+m) SC O(1)
function mergeSortedArray(nums1, m, nums2, n){
  let i = m-1;
  let j = n-1;
  let k = m+n-1;

  while(j>=0){
    if(i>=0 && nums1[i] > nums2[j]){
      nums1[k] = nums1[i];
      k--;
      i--;
    }else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }
  return nums1;
}
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
let m = 3;
let n =3;
console.log(mergeSortedArray(nums1,m,nums2,n));