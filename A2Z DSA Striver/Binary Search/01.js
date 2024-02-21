const recursiveBinarySearch = (nums, low, high, target) => {
  if (low > high) {
    return -1;
  }
  let mid = low + Math.floor((high - low) / 2);
  if (target === nums[mid]) {
    return mid;
  } else if (target > nums[mid]) {
    return recursiveBinarySearch(nums, mid + 1, high, target);
  }
  return recursiveBinarySearch(nums, low, mid - 1, target);
};
var search = function (nums, target) {
  //Iterative Method
  // let low = 0;
  // let high = nums.length - 1;
  // while(low <= high){
  //   let mid = Math.floor((low+high)/2);
  //   if(target === nums[mid]){
  //     return mid;
  //   }else if(target > nums[mid]){
  //     low = mid + 1;
  //   }else {
  //     high = mid - 1;
  //   }
  // }
  // return -1;

  //Recursive Method O(logN)
  let low = 0;
  let high = nums.length - 1;
  return recursiveBinarySearch(nums, low, high, target);
};
