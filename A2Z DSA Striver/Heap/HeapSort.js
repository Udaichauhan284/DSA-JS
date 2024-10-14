/* Heap Sort
it is a comparison based sorting algo, base onn Binary Heap DS. it is similar to selection sort, find the minimum and place at the first.
Algo : convert the arr to Heap using Heapify and then remove the top node, replace the last node with it then again form max heap using Heapify, repeat this till heap length is equal to 1.
*/
//given array change to maxHeap, using heapify and then start the loop from back, smaller eleme will be at last and swap that small one with large one at first
//TC: O(n) + O(nlog) ~ O(2nlogn) ~ O(nlogn), SC : O(1), recursion Heapify : O(logN)
const heapSort = (arr) => {
  let len = arr.length;
  for(let i=Math.floor(len/2)-1; i>=0; i--){
    heapify(arr,len,i); //change that arr to maxHeap
  }

  //now extract one by one, start the loop from right to left, beacause we form maxHeap, so in arr smaller elem at will be last. 
  for(let i=len-1; i>=0; i--){
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    //now again call heapify to check, that heap maintain the maxHeap property
    heapify(arr,i,0);
  }

  return arr;
}

function heapify(arr,len,i){
  let largest = i; //for maxheap root index at i largest
  let leftChild = 2*i+1;
  let rightChild = 2*i+2;

  if(leftChild < len && arr[leftChild] > arr[largest]){
    largest = leftChild;
  }
  if(rightChild < len && arr[rightChild] > arr[largest]){
    largest = rightChild;
  }

  if(largest !== i){
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    heapify(arr,len,largest);
  }
}

let arr = [4,10,3,5,1];
console.log(heapSort(arr));