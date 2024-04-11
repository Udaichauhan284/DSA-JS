/* Build the Min Heap from Array
Min Heap measn parent Node will be smaller than child node
*/
function buildMinHeap(arr){
  let len = arr.length;

  //in this we need the internal node, because leaf node is always heap
  for(let i=Math.floor(len/2)-1; i>=0; i--){
    heapify(arr,i,len);
  }

  return arr;
}
function heapify(arr,i,len){
  let smallest = i; //root is smallest i
  let leftChild = 2*i+1;
  let rightChild = 2*i+2;

  if(leftChild < len && arr[leftChild] < arr[smallest]){
    smallest = leftChild;
  }
  if(rightChild < len && arr[rightChild] < arr[smallest]){
    smallest = rightChild;
  }
  if(smallest !== i){
    // [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    let temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp;
    heapify(arr,smallest,len);
  }
}
let arr = [10,5,15,2,20,30] 
console.log(buildMinHeap(arr));