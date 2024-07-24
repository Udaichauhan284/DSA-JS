/* 2191 SOrt the Jumbled numbers
24 July 2024, Leetcode POTD, Array, SOrting
explaination in Sorting notes


Input: mapping = [8,9,4,0,2,1,3,5,7,6], nums = [991,338,38]
Output: [338,38,991]
Explanation: 
Map the number 991 as follows:
1. mapping[9] = 6, so all occurrences of the digit 9 will become 6.
2. mapping[1] = 9, so all occurrences of the digit 1 will become 9.
Therefore, the mapped value of 991 is 669.
338 maps to 007, or 7 after removing the leading zeros.
38 maps to 07, which is also 7 after removing leading zeros.
Since 338 and 38 share the same mapped value, they should remain in the same relative order, so 338 comes before 38.
Thus, the sorted array is [338,38,991].
*/


/*Method 1- change the nums[i] to string and then convert
it mapping nums, put into pair arr and sort then by its
num value, and then later extract from pair arr and push 
into result arr, with help of index which you push into
pair arr
TC: O(n*d + nlogn), SC: O(n+d), d is len of nums[i] char
*/
var sortJumbled = function(mapping, nums) {
  let n = nums.length;
  let pair = [];

  for(let i = 0; i < n; i++) {
      let numStr = String(nums[i]);
      let mappedStr = getMapped(numStr, mapping);
      let mappedNum = +mappedStr; // string to int
      pair.push({value : mappedNum, originalInd: i});
  }

  // sort the pair
  pair.sort((a, b) => a.value - b.value);

  let result = [];
  for(let {value, originalInd} of pair) {
      result.push(nums[originalInd]);
  }

  return result;
};

function getMapped(numStr, mapping) {
  let mappedStr = "";
  for(let i = 0; i < numStr.length; i++) {
      let ch = numStr[i];
      mappedStr += String(mapping[ch - '0']);
  }
  return mappedStr;
}


/*Method 2 - without converting the nums[i] to string
use dividing num and take out lastDigit, placevalue 1,10,100
TC: O(n*d + nlogn), SC: O(n), in space complexity, we save
d of changing the string again n again
*/
var sortJumbled = function(mapping, nums) {
  let len = nums.length;
  let pair = [];
  for(let i=0; i<len; i++){
      let mappedNum = getMappedNum(nums[i], mapping);

      pair.push({value: mappedNum, originalInd: i});
  }

  //sort the pair
  pair.sort((a,b) => a.value - b.value);
  let result = [];
  for(let {value, originalInd} of pair){
      result.push(nums[originalInd]);
  }
  return result;
};
function getMappedNum(nums, mapping){
  if(nums < 10){
      //measn it is in mapping array
      return mapping[nums];
  }
  let mappedNum = 0;
  let placeValue = 1; //100, 10, 1
  while(nums){
      let lastDigit = nums % 10; //ex 991, we get 1
      let mappedDigit = mapping[lastDigit]; // 1-> 9
      mappedNum += placeValue * mappedDigit;
      placeValue *= 10;
      nums = Math.floor(nums / 10);
  }
  return mappedNum;
}