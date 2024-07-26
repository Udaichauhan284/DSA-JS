/* 25 march 2024
424. Find all duplicates in an array.
array nums of length n, where all the integere of nums are in range of [1 to n] and each integer apprears once or twice, return an array for all the integer which appears twice.

Brute Approach - first sort the arr and find the adjacent element which are repeating TC O(nlogn), SC O(1), just result arr.
*/
const findDuplicate = (nums) => {
  let len = nums.length;
  let result = [];

  //sorting the nums array
  nums.sort((a,b) => a-b);

  for(let i=1; i<len; i++){
    if(nums[i-1] === nums[i]){
      result.push(nums[i-1]);
    }
  }
  return result;
}
let nums = [4,3,2,7,8,2,3,1];
console.log(findDuplicate(nums));


//Optimal App - see arr length is n and array elem is from 1 to n. and whenever such condition is there like 1 to n, we can use one method which is "use number as indexs", but here just one twist is that len is n and index from 0 to n-1, so do like this idx = num-1;, and num is abs(nums[i]), abs is because we mark that -1 to when we vist that elem in array, TC O(n)
const findDubplicates1 = (nums) => {
  let len = nums.length;
  let result = [];
  if(len === 1){
    return result;
  }

  for(let i=0; i<len; i++){
    let num = Math.abs(nums[i]);
    let idx = num - 1;

    if(nums[idx] < 0){
      result.push(num);
    }else {
      nums[idx] *= -1;
    }
  }
  return result;
}
let nums1 = [1,1,2];
console.log(findDubplicates1(nums1));

// Using mergeSort
//mergefost
const mergeSort = (nums,start,end) => {
  if(start === end){
      return;
  }
  let mid = start + Math.floor((end-start)/2);
  mergeSort(nums,start,mid);
  mergeSort(nums,mid+1,end);
  merge(nums,start,mid,end);
}
function merge(nums,start,mid,end){
  let left = start;
  let right = mid+1;
  let temp = [];
  let index = 0;
  
  while(left <= mid && right <= end){
      if(nums[left] < nums[right]){
          temp[index] = nums[left];
          left++;
          index++;
      }else{
          temp[index] = nums[right];
          right++;
          index++;
      }
  }
  while(left <= mid){
      temp[index] = nums[left];
      left++;
      index++;
  }
  while(right <= end){
      temp[index] = nums[right];
      right++;
      index++;
  }
  //now put in arr
  index = 0;
  while(start <= end){
      nums[start] = temp[index];
      index++;
      start++;
  }
  return nums;
}
const findD = (nums) => {
  let len = nums.length;
  let result = [];
  if(len === 1){
      return result;
  }
  //use the sorting
  let start = 0;
  mergeSort(nums,start,len-1);
  for(let i=1; i<len; i++){
      if(nums[i-1] === nums[i]){
          result.push(nums[i-1]);
      }
  }
  return result;
}
console.log(findD([4,3,2,7,8,2,3,1]))