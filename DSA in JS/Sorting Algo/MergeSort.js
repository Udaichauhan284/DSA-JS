/* Merge Sort
 Divide the array into sub array, each containing only one element (An array with one element is considered sorted)
 Repeatefly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array.
*/

// O(nlogN)
function MergeSort(arr) {
  if(arr.length < 2){
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return mergering(MergeSort(leftArr), MergeSort(rightArr));
}
function mergering(leftArr, rightArr){
  let sortedArr = [];
  while(leftArr.length && rightArr.length){
    if(leftArr[0] <= rightArr[0]){
      sortedArr.push(leftArr.shift())
    }else{
      sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}
const arr = [8,20, 21, 19, -2, 4, -6];
console.log(MergeSort(arr));



const sortArray = (nums) => {
  mergeSort(nums, 0, nums.length-1);
  return nums;
}
function mergeSort(nums, low, high){
  if(low >= high){
      return;
  }
  let mid = Math.floor(low + (high-low)/2);
  mergeSort(nums,low, mid);
  mergeSort(nums,mid+1,high);
  merge(nums,low,mid,high);
}
function merge(nums, low, mid, high){
  let temp = [];
  let left = low;
  let right = mid+1;
  while(left <= mid && right <= high){
      if(nums[left] <= nums[right]){
          temp.push(nums[left]);
          left++;
      }else{
          temp.push(nums[right]);
          right++;
      }
  }
  while(left <= mid){
      temp.push(nums[left]);
      left++;
  }
  while(right <= high){
      temp.push(nums[right]);
      right++;
  }
  for(let i=low; i<=high; i++){
      nums[i] = temp[i-low];
  }
}