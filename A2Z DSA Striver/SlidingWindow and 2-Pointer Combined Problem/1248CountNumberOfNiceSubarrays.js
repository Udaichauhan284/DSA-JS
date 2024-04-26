/* 1248. Count Number of Nice Subarrays
nums = [1,1,2,1,1], k=3
o/p : 2, [1,1,2,1], [1,2,1,1]
*/
 //This question is same as Binary Subarray Sum equal to k, here if we take odd elem as 1 and even elem as 0, it will be same as Binary Subarray Sum. For this question just need to nums[i]%2. 1. Brute Method - use of two nested loop and currSum and then check if currSum equal to k(goal). TC O(n^2), SC : O(1)
const numberOfSubarrays = (nums,k) => {
  let len = nums.length;
  let result = 0;
  for(let i=0; i<len; i++){
    let currSum = 0;
    for(let j=i; j<len; j++){
      currSum += (nums[j]%2);
      if(currSum === k){
        result++;
      }
    }
  }
  return result;
}
console.log(numberOfSubarrays([1,1,2,1,1],3));

//Better Method - use of Map and CummSum, becasue this question is same as Binary Subarray Sum equall to k. TC: O(n), SC : O(n); currSum = (nums[i]%2) even - 0, odd -1
const numberOfSubarrays1 = (nums,k) => {
  let result = 0;
  let currSum = 0;
  let map = {};
  map[0] = 1; // initial sum value
  for(let num of nums){
    currSum += num%2;
    let remainingSum = currSum - k;
    if(map[remainingSum]){
      result += map[remainingSum];
    }

    if(!map[currSum]){
      map[currSum] = 1;
    }else {
      map[currSum]++;
    }
  }
  return result;
}
console.log(numberOfSubarrays1([1,1,2,1,1],3));

//Optimal Method - sliding window - move the right pointer and find the window sum, if window sum is > k move the left pointer. TC : O(n), SC : O(1)
const numberOfSubarrays2 = (nums,k) => {
  let result = 0;
  let windowSum = 0;
  let countZeros = 0;
  let left =0, right = 0;
  while(right < nums.length){
    windowSum += (nums[right]%2);

    while(left < right && ((nums[left]%2 === 0) || windowSum > k)){
      if((nums[left]%2) === 0){
        countZeros++;
      }else {
        countZeros = 0;
      }
      windowSum -= nums[left]%2; //remove the left one, to move the sliding window
      left++;
    }

    if(windowSum === k){
      result += 1+countZeros;
    }
    right++;
  }
  return result;
}
console.log(numberOfSubarrays2([1,1,2,1,1],3));