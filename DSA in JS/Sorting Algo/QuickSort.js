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


//This is best way of Implementing the Quick Sort
class Solution {
  //TC: O(nlogn) in average case, WorstCase: O(n^2), SC: O(n)
  partition(arr, low, high) {
      // Your code here
      let pivot = arr[high]; //we take the last ele as pivot
      let partitionIndex = low;
      for(let i=low; i<high; i++){
          if(arr[i] <= pivot){
              //swap
              [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
              partitionIndex++;
          }
      }
      //now swap the patitionIndex and high
      [arr[partitionIndex], arr[high]] = [arr[high], arr[partitionIndex]];
      return partitionIndex;
  }

  quickSort(arr, low, high) {
      // code here
      //base case
      if(low >= high){
          return;
      }
      let partitionIndex = this.partition(arr, low, high);
      //now call for left side and right side
      this.quickSort(arr, low, partitionIndex-1);
      this.quickSort(arr, partitionIndex+1, high);
  }
}