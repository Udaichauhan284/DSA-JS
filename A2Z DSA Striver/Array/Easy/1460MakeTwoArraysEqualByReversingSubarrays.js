/* 1460. Make Two Arrays Equal by Reversing Subarrays
03 August 2024, Leetcode POTD, Array, Sorting, Map

Input: target = [1,2,3,4], arr = [2,4,1,3]
Output: true
Explanation: You can follow the next steps to convert arr to target:
1- Reverse subarray [2,4,1], arr becomes [1,4,2,3]
2- Reverse subarray [4,2], arr becomes [1,2,4,3]
3- Reverse subarray [4,3], arr becomes [1,2,3,4]
There are multiple ways to convert arr to target, this is not the only way to do so.
*/

/*Method 1-we need to match arr with target, if value are same in both
arrays, measn we can reverse the arr in any ways and its match with 
target. first we need to sort the array both one, then compare.
TC: O(2nlogn + n) ~ O(3nlogn) ~ O(nlogn)
SC: O(1)
*/

const canBeEqual = (target, arr)  => {
  let arrLen = arr.length;
  let targetLen = target.length;
  if(targetLen !== arrLen) return false;

  //need to sort the both arr, then we compare the value of each 
  target.sort((a,b) => a-b);
  arr.sort((a,b) => a-b);

  //now compare
  for(let i=0; i<targetLen; i++){
    if(arr[i] !== target[1]){
      return false;
    }
  }
  return true;
}



/*Method 2 - use of Map, store tagret in map, and then check from arr
that element in arr are there in tragetMap, if yes TRUE, otherwise 
false. 
TC: O(n), SC: O(n) for map
*/
const canBeEqual1 = (target, arr) => {
  let arrLen = arr.length;
  let targetLen = arr.length;
  if(arrLen !== targetLen) return false;
  let mapTarget = new Map();

  // Count occurrences of each element in target
  for(let i=0; i<targetLen; i++){
    mapTarget.set(target[i], (mapTarget.get(target[i] || 0)+1));
  }

  //now check in arr
  for(let i=0; i<arrLen; i++){
    if(mapTarget.has(arr[i])){
      //is map has that elem, delete one from it.
      mapTarget.set(arr[i], mapTarget.get(arr[i])-1);
      if(mapTarget.get(arr[i]) === 0){
        //after delete in above set, if that elem give 0.
        //delete that element from mapTarget
        mapTarget.delete(arr[i]);        
      }
    }else{
      // if that elem in not in mapTarget, so return false
      return false;
    }
  }
  //if map is empty measn all elem match and return true, otherwise 
    //false
  return (mapTarget.size === 0);
}