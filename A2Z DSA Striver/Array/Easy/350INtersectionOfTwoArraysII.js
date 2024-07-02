/* 350 Intersection of two arrays II
02 July 2024 Leetcode POTD, Array, Sorting, Map, Two Pointers
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
*/

/* Method 1 - in this we need intersection, when there is intersection, try to
sort the aar and take two pointer and see where it matches
TC: O(nlogn)+O(nlogn)+O(n) ~ O(n), SC:O(1)
*/
var intersect = function(nums1, nums2) {
  nums1 = nums1.sort((a,b) => a-b);
  nums2 = nums2.sort((a,b) => a-b);

  let i=0; //nums1
  let j=0; //nums2
  let result = [];
  while(i<nums1.length && j<nums2.length){
      if(nums1[i] === nums2[j]){
          result.push(nums1[i]);
          i++;
          j++;
      }else if(nums1[i] < nums2[j]){
          i++;
      }else{
          j++;
      }
  }
  return result;
};

/* Method 2 use of Map, we store freq of elem from nums1 in map and them 
check from nums2 is there elem in map or not. 
TC: O(n), SC: O(n)
*/
var intersect = function(nums1, nums2) {
  let map = new Map();
  for(let num of nums1){
      map.set(num, (map.get(num) || 0)+1);
  }
  let len2 = nums2.length;
  let result = [];
  for(let num of nums2){
      if(map.get(num) > 0){
          map.set(num, map.get(num)-1);
          result.push(num);
      }
  }
  return result;
};