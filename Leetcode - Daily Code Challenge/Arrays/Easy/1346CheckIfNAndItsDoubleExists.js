/* 1346. Check if N and Its Double Exist
1 Dec 2024, Leetcode POTD, array, set, binary search

Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
*/

/*Method1-brute methid i=0, j=i+1, and then we check
the condition. TC:O(n^2), SC: O(1)
*/
var checkIfExist = function(arr) {
  let len = arr.length;
  for(let i=0; i<len; i++){
      for(let j=0; j<len; j++){
          if(arr[i] === 2*arr[j] && i !== j){
              return true;
          }
      }
  }
  return false;
};

/*Method 2-use of set, we first check the multiple and 
then divisor in set, if yes return true, if not return 
false. TC: O(n), SC: O(n)
*/
var checkIfExist1 = function(arr) {
  let len = arr.length;
  let set = new Set();
  for(let i=0; i<len; i++){
      if(set.has(arr[i]*2)){
          return true;
      }else if(arr[i] % 2 === 0 && set.has(Math.floor(arr[i]/2))){
          return true;
      }
      set.add(arr[i]);
  }
  return false;
};

/*Method3-we use the Binary Search for the finding the
target which is 2*arr[i] after sorting it. in binary
search we return the index. that index we check that i!=j
return true. TC: O(nlogn), SC: O(1)
*/
var checkIfExist2 = function(arr) {
  let len = arr.length;
  //now sort the arr 
  arr.sort((a,b) => a-b);
  for(let i=0; i<len; i++){
      let idx = bSearch(arr, 2*arr[i]);
      if(idx !== i && idx >= 0){
          return true;
      }
  }
  return false;
};
function bSearch(arr, target){
  let left = 0;
  let right = arr.length-1;
  while(left <= right){
      let mid = left + Math.floor((right-left)/2);
      if(arr[mid] === target){
          return mid;
      }else if(arr[mid] > target){
          //move the right pointer look into left side
          right = mid - 1;
      }else{
          left = mid + 1;
      }
  }
  return -1;
}