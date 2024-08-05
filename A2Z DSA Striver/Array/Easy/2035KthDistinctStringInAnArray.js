/* 2053 Kth DIstinct String in an Array
05 August 2024, Leetcode POTD, Array, Coutinh, Hash Map

Input: arr = ["d","b","c","b","c","a"], k = 2
Output: "a"
Explanation:
The only distinct strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st distinct string.
"a" appears 2nd, so it is the 2nd distinct string.
Since k == 2, "a" is returned. 

*/


/*Using Map is Good idea, like first have a freq of each str
and then in iteration for-loop find the 1 freq of that str
from map and increase the count, also check that this count 
is equal to k, is yes-eturn that one, otherwise return ""
TC: O(n), SC: O(n)
*/
var kthDistinct = function(arr, k) {
  let map = new Map();
  let len = arr.length;
  for(let str of arr){
      map.set(str, (map.get(str) || 0)+1);
  }
  let count = 0;
  for(let i=0; i<len; i++){
      if(map.get(arr[i]) === 1){
          count++;
          if(count === k){
              return arr[i];
          }
      }
  }
  return "";
};