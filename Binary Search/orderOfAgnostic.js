function orderOfAgnostic(arr, target){
  let start = 0;
  let end = arr.length-1;
  let isAync = false;
  if(arr[start] < arr[end]){
    isAync=true;
  }
  while(start<=end){
    let mid = Math.floor( (start+end) /2);
    if(target === arr[mid]){
      return mid;
    }
    if(isAync){
      if(target < arr[mid]){
        end = mid - 1;
      } else start = mid + 1;
    }else {
      if(target < arr[mid]){
        start = mid + 1;
      }else end = mid - 1;
    }
  }
  return -1;
}
const arr = [2, 4, 6, 7, 8, 9, 10, 12, 23, 24, 36];
console.log(orderOfAgnostic(arr, 36));