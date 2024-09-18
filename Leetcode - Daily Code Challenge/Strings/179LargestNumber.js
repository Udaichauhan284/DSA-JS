/* 179 Largest Number
18 Sep 2024, Leetcode POTD, Array, String, String Comprator, Sorting

Example 1:
Input: nums = [10,2]
Output: "210"

Example 2:
Input: nums = [3,30,34,5,9]
Output: "9534330"
*/

/*IN this greedy fails as we dont know how to sort the arr, so we 
get the desired result. IN this we use String comprator, we take 
two string and concat it, if one combined is string is greater 
then other one, return true which means s1 will be at first, 
return false, in this s2 will be first place.
TC: O(nlogn + n) +n TC for combining arr to str, SC: O(1)
*/
const largestNumber = (nums) => {
  let result = ""; //for result string ans from nums array
  //lets sort the nums, each value decsendiing order
  nums.sort((a,b) => {
    //we need to change int nums value to string, as we need to compare 2 str value togther, s1+s2 like this
    let s1 = String(a);
    let s2 = String(b);
    if((s1+s2) > (s2+s1)){
      return -1; //measn s1 will come first
    }
    return 1; //measn s2 will come first
  });
  //now we need to check the first value
  if(nums[0] === 0){
    return "0";
  }
  //result = nums.join(""); 
  //or
  for(let num of nums){
    result += String(num);
  }
  return result;
}
