/* 4. Median of Two Sorted Array
nums1 = [1,3], nums2 = [2], => merge sorted arr = [1,2,3]
arr length is odd - median of arr will be 2. (middle element of arr)
arr length is even - median of arr will be (mid + (mid-1))/2 
*/
//Brute App - O(n1 * n2) - we will travese each arr and compare element with each other and which one is small we will put in arr3 and move that index.
const bruteMedianTwoArr = (nums1, nums2) =>{
  let n1 = nums1.length, n2 = nums2.length;
  const sortedArr = [];
  let i=0, j=0; //these are index which we take help of to compare
  while(i<n1 && j<n2){
    if(nums1[i] < nums2[j]){
      sortedArr.push(nums1[i]);
      i++;
    }else{
      sortedArr.push(nums2[j]);
      j++;
    }
  }
  //copy leftover element in both nums
  while(i<n1){
    sortedArr.push(nums1[i]);
    i++;
  }
  while(j<n2){
    sortedArr.push(nums2[j]);
    j++;
  }
  let n = n1+n2;
  if(n % 2 === 1){
    //this means sortedArr len is odd, so in this case we will return simple middle element of arr
    return sortedArr[Math.floor(n/2)];
  }

  //if arr len is even
  let mid = Math.floor(n/2);
  let mid1 = Math.floor(n/2) - 1;
  const median = (sortedArr[mid1] + sortedArr[mid])/2 ;
  return median;
}
let arr1 = [1,3];
let arr2 = [2,4];
console.log(bruteMedianTwoArr(arr1,arr2));