/* Insertion Sort 
Virtually split the array into a sorted and an unsorted part.
Assume that the first element is already sorted and remaining elements are unsorted.
Select an unsorted elements and compare with all elements in the sorted part.
If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else shift larger elements in the sorted part towards the right.
Insert the selected element at the right index.
Repeat till all the unsorted elememts are placed in the right order.

[-6, 20 8 -2 4], here we are assuming that -6 is sorted element and remaining element is unsorted.
Pick 20 number to insert , sorted element is -6, compare both -6>20 NO, place 20 to the right of -6
-----------------------------------------------
[-6 20, 8 -2 4] - NTI 8, SE 20, 20>8 YES, shift 20 to the right [-6 20 20 -2 4]
NIT 8, SE -6, -6>8 NO, place 8 to the right of -6
[-6 8 20, -2 4]
-----------------------------------------------
NTI -2, SE 20, 20>-2 YES, shift 20 to the right [-6 8 20 20 4]

NTI -2, SE 8, 8>-2 YES, shit 8 to the right [-6 8 8 20 4]
NTI -2, SE -6, -6>-2 NO, place -2 to the right of -6 
[-6 -2 8 20, 4]
-----------------------------------------------
NTI 4 SE 20, 20>4 YES, shift 20 to the right
[-6 -2 8 20 20]
NTI 4 SE 8, 8>4 YES, shit 8 to the right
[-6 -2 8 8 20]
NTI 4 SE -2, -2>4 NO, place 4 to the right of -2
{-6 -2 4 8 20} - reach the end of the array. Array is sorted
*/

//T.C - O(n^2) nested loop
function InsertionSort(arr) {
  for(let i=1; i<arr.length; i++){
    let numberToInsert = arr[i];
    let j = i-1;
    while(j >= 0 && arr[j] > numberToInsert){
      arr[j+1] = arr[j];
      j = j-1;
    }
    arr[j+1] = numberToInsert;
  }
}
let Arr = [-6, 20, 8, -2, 4];
InsertionSort(Arr);
console.log(Arr);