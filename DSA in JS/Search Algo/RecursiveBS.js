//Recursive Binary Search
/* 
Given a sorted array of 'n' elements and a target element 't'. find the index of 't' in the array. Return -1 if the target element if not found.
*/
// T.C O(logN)
function RecursiveBS(arr, target) {
  return Search(arr, target, 0, arr.length-1)
}

function Search(arr, target, leftIndex, rightIndex){
  //base condition
  if(leftIndex > rightIndex) return -1;

  let mid = leftIndex + Math.floor((rightIndex - leftIndex)/2);
  if(target === arr[mid]){
    return mid;
  }
  if( target < arr[mid]){
    return Search(arr, target, leftIndex, mid - 1);
  } else {
    return Search(arr, target, mid + 1, rightIndex)
  }
}

let Arr = [2,4,6,7,8,9,11];
console.log(RecursiveBS(Arr,4));