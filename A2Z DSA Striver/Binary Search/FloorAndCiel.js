/*
Floor - largest number in iteration which is <=x
smallest or equall to x. 

Ciel - smallest number in iteration which is >=x 
larger or equall to x. (this is lower bound)
*/
function finfFloor(nums,target){
  let len = nums.length -1;
  let low = 0, high = len - 1;
  let ans = -1;
  while(low <= high){
    let mid = Math.floor((low+high) / 2);
    if(nums[mid] <= target){
      ans = nums[mid];
      low = mid + 1; //remove the left half and find in right half, because arr[mid] is smaller than x, 
    }else {
      high = mid - 1;
    }
  }
  return ans;
}
function findCeil(nums, target){
  let len = nums.length;
  let low = 0, high = len -1;
  let ans = -1;
  while(low <= high){
    let mid = Math.floor((low+high)/2);
    if(nums[mid] >= target){
      ans = nums[mid];
      //look for smaller index on the left
      high = mid - 1;
    }else{
      low = mid + 1;
      // look on the right
    }
  }
  return ans;
}
let nums = [3,4,4,7,8,10];
let x = 5;
console.log("Floor number in arr " +finfFloor(nums,x));
console.log("Ceil Number in arr " + findCeil(nums,x))