function binarySearch(arr, target){
  let start = 0;
  let end = arr.length - 1;
  while(start <= end){
    let mid = Math.floor((start + end) / 2);
    if(target < arr[mid]){
      end = mid - 1;
    }else if(target > arr[mid]){
      start = mid + 1;
    } else{
      return mid;
    }
  }
  return -1;
}

const arr = [2, 4, 6, 7, 8, 9, 10, 12, 23, 24, 36];
console.log(binarySearch(arr, 36));
