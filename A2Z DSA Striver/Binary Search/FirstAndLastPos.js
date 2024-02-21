/*  34. Find the first and last postion of given number in arr.
if not find [-1,-1]
*/
//Brute Method - linera search O(n)
// let firstAndLastPosition = (nums,target) => {
//   let len = nums.length;
//   let first = -1, last = -1;
//   for(let i=0; i<len-1; i++){
//     if(nums[i] === target){
//       if(first === -1) first = i;

//       last = i;
//     }
//   }
//   if(first !== -1 && last !== -1){
//     return [first, last];
//   }else {
//     return [-1,-1];
//   }
// }
// let nums = [5,7,7,8,8,10];
// console.log(firstAndLastPosition(nums,8));


//here i use two time BS for first and last occurece
 // TC (2*logN), if no first O(logN)

//first posution
const firstPosition = (nums,target) =>{
  let len = nums.length;
  let low = 0, high = len - 1;
  let first = -1;
  while(low <= high){
    let mid = Math.floor((low+high)/2);
    if(nums[mid] === target){
      first = mid; //assume this will be first occu
      high = mid - 1; //find find occ in left part
    }else if(nums[mid] < target){
      low = mid + 1;
    }else {
      high = mid - 1;
    }
  }
  return first;
}

//last position
const lastPosition = (nums,target) => {
  let len = nums.length;
  let low = 0, high = len -1;
  let last = -1;
  while(low <= high){
    let mid = Math.floor((low+high)/2);
    if(nums[mid] === target){
      last = mid; //assume this is last 
      low = mid + 1;//last post wil be in righ part
    }else if(nums[mid] < target){
      low = mid + 1;
    }else {
      high = mid - 1;
    }
  }
  return last;
}
var searchRange = function(nums, target) {
    let first = firstPosition(nums, target);
    if(first === -1){ //this will save O(logN)
      return [-1,-1];
    }
    let last = lastPosition(nums,target);
    return [first, last];
};