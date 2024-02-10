/* Bubble Sort 
Given an array of intergers, sort the array
const arr = [-6, 28, 8, -2, 4]
bubblesort(Arr) => [-6,-2, 4, 8, 28]

Bubble sort idea
Compare adjacent elements in the array and swap the positions if they are not intended order.
Repeat the instruction as you step through each element in the array.
Once you step through the whole array with no swaps, the array is sorted.
*/
// T.C - O(n^2) - two nested loop
function BubbleSort(arr) {
  let swapped;
  do{
    swapped = false;
    for(let i=0; i<arr.length-1; i++){
      if(arr[i] > arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  }while(swapped)
}
let Arr = [-6,28,8,-2,4];
BubbleSort(Arr);
console.log(Arr);