/* Find out the rotation in array, how many times it got rotated.
just return the lowest index index.
*/
// O(logN)
function findOutRotation(nums){
  let low=0, high=nums.length-1;
  while(low <= high){
    let mid = Math.floor((low+high)/2);

    if(nums[low] <= nums[high]){
      return low;
    }

    if(nums[low] <= nums[mid]){
      low = mid+1;
      return low;
    }else{ //if right part is sorted
      high = mid-1;
      return mid; //element at mid-lowest
    }
  }
}
let arr = [4,5,0,1,2,3];
console.log("The array is rotated "+findOutRotation(arr));