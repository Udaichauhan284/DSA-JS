/* 525. Contigous Array.
16 Mar 2024.
give an binart arry nums, return the maximum length of a contingous subarray with an equal number of 0 and 1.

1. Navie App: use of two loops, j will start from i, and it will see and ocunt the zeros and ones. put the maxLength in maxLength j-i+1.
TC O(n^2), SC O(1) -- but this will give a time limit exceed.
*/
const findMaxLength = (nums) => {
  let maxLength = 0;
  for(let i=0; i<nums.length; i++){
    let countZero = 0;
    let countOne = 0;
    for(let j=i; j<nums.length; j++){
      if(nums[j] === 0){
        countZero++;
      }else{
        countOne++;
      }
      if(countOne === countZero){
        maxLength = Math.max(maxLength, j-i+1);
      }
    }
  }
  return maxLength;
}

//Optimal Apprach use of Map and currSum, first put currSum = 0 with index -1 in map, and keep that in mind that when even you see 0 take -1 and add that in currSum, wheneven currSum is equal to previous value which we already see in the map, that will be our potentinal ans. TC O(n), SC O(n)
var findMaxLength1 = function(nums) {
  let maxLen = 0;
  let currSum = 0;
  let map = new Map();
  map.set(0,-1);
  for(let i=0; i<nums.length; i++){
    currSum += (nums[i] === 1) ? 1 : -1;

    if(map.has(currSum)){
      maxLen = Math.max(maxLen, i-(map.get(currSum) || 0));
    }else {
      map.set(currSum, i);
    }
  }
  return maxLen;
};