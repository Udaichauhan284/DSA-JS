/* 540. SIngle Element in a sorted array
return the element which apperas only single time in array, where each element is apperaring twice
*/
//Brute Approach - O(n) - linear search
const singleElementSortedArr = (nums) => {
  let len = nums.length;
  if(len === 1) return nums[1];

  for(let i=0; i<len; i++){
    if(i===0){
      if(nums[i]!==nums[i+1]){
        return nums[i];
      }
    }else if(i === len-1){
      if(nums[i]!==nums[i-1]) return nums[i];
    }else {
      if(nums[i]!==nums[i-1] && nums[i]!==nums[i+1]){
        return nums[i];
      }
    }
  }
  return -1;
}

//Using XOR - O(n)
function usingXOR(nums){
  let len = nums.length;
  let ans = 0;
  for(let i=0; i<len; i++){
    ans = ans ^ nums[i];
  }
  return ans;
}

//using Optimal way - Binary Search - O(logN)
function optimalSingleElement(nums){
  let len = nums.length;
  if(len === 1) return nums[i];
  if(nums[0] !== nums[1]) return nums[0];
  if(nums[len-1] !== nums[len-2]) return nums[len-1];

  let low =0, high = len-2;
  while(low <= high){
    let mid = Math.floor((low+high)/2);

    if(nums[mid] !== nums[mid+1] && nums[mid] !== nums[mid-1]){
      return mid;
    }

    // we are in left part (even, odd) or (odd,even)
  if((mid % 2 === 1 && nums[mid] === nums[mid-1]) || (mid % 2 === 0 && nums[mid] === nums[mid-1])){
    low = mid + 1; //eliminates the left half
  }else {
    high = mid - 1; 
  }
  return -1;
  }
}
