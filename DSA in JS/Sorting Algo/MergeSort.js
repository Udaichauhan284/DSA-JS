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