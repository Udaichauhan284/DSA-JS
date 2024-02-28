/* 410. Split Array larget Sum
given an integer arrays nums and an integer k, split nums arr into k no-empty subarrays. such that the larget sum of subarray is minimised.
Return the minimized largest sum of the split.
this question same as Painter's problem and Allocation Book one
*/
//first create a function which find the partions, here we pass the arr and maxSum, maxSum is we are supposing kee, yeah jo bhi hum pass kr rhe hai vohi maxSum hoga. but in if condition we will find subArrSum + arr[i] <= maxSum and count the subArr += arr[i].
//range in liner search or BS will be max of arr and sum of arr. in this range we will find the ans, which is min(max sum)
//Brute App - O(n^2)
const countPartition = (arr,maxSum) => {
  let len = arr.length;
  let partition = 1, sumOfArr = 0;
  for(let i=0; i<len; i++){
    if(sumOfArr + arr[i] <= maxSum){
      sumOfArr += arr[i]; //insert element to current subarray
    }else{
      partition++; 
      sumOfArr = arr[i]; //move element to next subarray
    }
  }
  return partition;
}
const largestSubArrSumMini = (arr,k) =>{
  let len = arr.length;
  if(k > len) return -1;
  let max = Math.max(...arr);
  let sum = arr.reduce((sum,acc) => sum+acc, 0);
  for(let maxSum = max; maxSum <= sum; maxSum++){
    if(countPartition(arr,maxSum) === k){
      return maxSum;
    }
  }
  return max;
}

//Optimal Way- use Binary search - O(NlogN)
const optimalLargestSubArrSumMini = (arr,k) => {
  let len = arr.length;
  if(k>len) return -1;
  let low = Math.max(...arr);
  let high = arr.reduce((sum,acc) => sum+acc,0);
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    if(countPartition(arr,mid) > k){
      low = mid+1;
    }else {
      high = mid-1;
    }
  }
  return low; // when while break high cross low, ans point at low - because we need mini of max.
}
let nums = [7,2,5,10,8];
console.log(largestSubArrSumMini(nums,2));
console.log(optimalLargestSubArrSumMini(nums,2));