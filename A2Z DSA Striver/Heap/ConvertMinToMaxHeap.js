/* Convert the min heap to max heap
steps: call the maxHeapify from bottommost and rightmost of minheap internal node
and return the maxHeap.

Range of Internal node (for 0-based index) : 0 to floor(len/2)-1
for(1-base index) : 1 to floor(len/2)

Range of Leaf Node (for 0-based index) : floor(len/2) to len-1
for(1-based index) : floor(len/2)+1 to len

TC: O(nlogn), SC: O(1)
*/
const convertToMaxHeap = (arr) => {
  let len = arr.length;
  
  //start from bottommost and rightmost internal node of minheap given arr
  for(let i=Math.floor(len/2)-1; i>=0; i--){
    maxHeapify(arr,i,len);
  }
  return arr;
}
function maxHeapify(arr,i,len){
  let largest = i; //for root index, largest for maxheap
  let leftChild = 2*i+1;
  let rightChild = 2*i+2;

  if(leftChild < len && arr[leftChild] > arr[largest]){
    largest = leftChild;
  }
  if(rightChild < len && arr[rightChild] > arr[largest]){
    largest = rightChild;
  }

  if(largest !== i){
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    maxHeapify(arr,largest,len);
  }
}

let minHeap = [3, 5, 9, 6, 8, 20, 10, 12, 18, 9];
console.log(convertToMaxHeap(minHeap));