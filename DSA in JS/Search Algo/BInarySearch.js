/* Binary Search
Given a sorted array of 'n' element and a target element 't', find the index of 't' in the array, if element not found return -1.

Pseudo Code
1. if the array is empty return -1 as the element cannot be found.
2. If the array has elements, find the middle element in the array. if the target is eqaul to middle elememt. return the middle element index.
3. if the target is less than the middle element, BS left half of the array - because array is sorted.
4. if the target is greater than the middle element, BS right half of the array/
*/

//TC O(logN) - in while loop we are reducing the input size.
function BinarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while(leftIndex <= rightIndex){
    let mid = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if(target === arr[mid]){
      return mid;
    }
    if(target < arr[mid]){
      rightIndex = mid - 1;
    }else {
      leftIndex = mid + 1;
    }
  }
  return -1;
}
let Arr = [2,4,6,7,8,9,11];
console.log(BinarySearch(Arr,4));