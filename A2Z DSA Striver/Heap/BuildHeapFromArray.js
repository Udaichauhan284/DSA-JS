/* Build the Max Heap from Array
- Max heap
O(nlogn)
O(1), O(n) just for result, O(logn) for recursive heapify
*/
function buildHeap(arr){
  let n = arr.length;

  //leaf node heap is a heap(max/min), but we need to build up for internal node which are Math.floor(n/2)-1 to 0
  for(let i=Math.floor(n/2)-1; i>=0; i--){
    heapify(arr,i,n);
  }
  
  let result = [];
  for(let i=0; i<arr.length; i++){
    result.push(arr[i]);
  }
  return result;
}
function heapify(arr,i,n){
  let largest = i; //for root node, in maxHeap we want root node to be largest
  let leftChild = 2*i+1;
  let rightChild = 2*i+2;

  if(leftChild < n && arr[leftChild] > arr[largest]){
    largest = leftChild;
  }
  if(rightChild < n && arr[rightChild] > arr[largest]){
    largest = rightChild;
  }

  if(largest !== i){ //if largest is not root;
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    heapify(arr,largest,n); //recursive call for subheap
  }
}

let arr = [1,3,5,4,6,13,10,9,8,15,17];
console.log(buildHeap(arr));