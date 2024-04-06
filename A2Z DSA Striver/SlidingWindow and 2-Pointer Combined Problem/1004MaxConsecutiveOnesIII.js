/* 1004. max Consecutive Ones III
nums = [1,1,1,0,0,0,1,1,1,0], k =2
o/p : 6
*/
 //Brute Method - see this question can be converst as longest subarray with atmost zero equal to k. so for brute method we can first count all the subarr, and in that we can count the zero, if zero len is less than and equall to k, find the maxLen. else break
const longestOnes = (nums,k) => {
  let len = nums.length;
  let maxLen = 0;

  for(let i=0; i<len; i++){
    let zeros = 0;
    for(let j=i; j<len; j++){
      if(nums[j] === 0){
        zeros++;
      }
      if(zeros <= k){
        let currLen = j+1-i;
        maxLen = Math.max(maxLen, currLen);
      }else {
        break;
      }
    }
  }
  return maxLen;
}
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2));

////Optimal Method . 1 - use of Sliding Window method - 2 pointer, move right and when you see zero, incre the count of zero and when count increase the k, move the left, till zero comes in range of k. and if zero is less than and equal to k, count the len. - here i am using the nested while loop which cause the TC : O(n), so total TC : O(n)+O(n) => O(2n), SC : O(1)
const longestOnes1 = (nums,k) => {
  let len = nums.length;
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let zeros = 0;
  while(right < len){
    if(nums[right] === 0) zeros++;

    //use of while loop for moving the left, if zero incease the k
    while(zeros > k) {
      if(nums[left] === 0) zeros--;
      left++;
    }

    //now count the len
    if(zeros <= k){
      let currLen = right+1-left;
      maxLen = Math.max(maxLen, currLen);
    }
    right++;
  }
  return maxLen;
}
console.log(longestOnes1([1,1,1,0,0,0,1,1,1,1,0],2));

//Make it more optimize, : TC O(n), sc : O(1), dont use while loop, simple put the if condition if(zeros > k).
const longestOnes2 = (nums,k) => {
  let len = nums.length;
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let zeros = 0;
  while(right < len) {
    if(nums[right] === 0) zeros++;

    //here simply using if loop and moving that left
    if(zeros > k){
      if(nums[left] === 0) zeros--;
      left++;
    }

    if(zeros <= k){
      let currLen = right+1-left;
      maxLen = Math.max(maxLen,currLen);
    }
    right++;
  }
  return maxLen;
}
console.log(longestOnes2([1,1,1,0,0,0,1,1,1,1,0],2));