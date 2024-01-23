function celiengNum(arr, target){
  let start = 0;
  let end = arr.length - 1;
  while(start <= end){
    let mid = Math.floor((start+end) / 2);
    if(target < arr[mid]){
      end = mid - 1;
    }
    else if (target > arr[mid]){
      start = mid + 1;
    }
    else return mid;
  }
  return start;
}
const arr = [2,3,4,5,6,10,14,16,18];
console.log(celiengNum(arr, 15));