/*
Quick Sort
Problem - Given an array of interger, sort the array

Idea
Identify the pivot element in the array
- pick first element as pivot
- pick last element as pivot (my approach)
- pick a random element as pivot
- pick median as pivot

Put everything that's smaller than the pivot into a left array and everything that's greater than the pivot into a right array.
Repeat the process for the individual left ad right arrays till you have an array of length of the original array for which is sorted by definition.
Repeatedly concatenate the left array, pibot and right array till one sorted array remains.
*/

//Worst Case - O(n^2), Avg Case - O(nlogN)
function QuickSort(arr){
  if(arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for(let i=0; i < arr.length - 1; i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  return [...QuickSort(left), pivot, ...QuickSort(right)]
  //in this return there is recursive call for Quicksort for left sub array, same as recursive call for right sub array, and after that we are concating all three thing, subarr and pivot
}
let Arr = [-6,20,8,16,-2,4];
console.log(QuickSort(Arr));