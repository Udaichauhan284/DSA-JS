/* Check the array if it is a Min Heap
so - for leaf Node if (2*i + 2) > size of array, means true i elem is a leaf node, true
for internal node if (2*i + 2) <= size of array, means that i elem is a internal node, true
*/
//for recursive method, we need to go last leaf elem if (2*i+2) > arr.length true, base condition
//O(logn), O(1) for checking SC: O(logn) for recursive stack
function checkMinHeap(arr,i){
  //base conditon, if it goes till leaf node
  if(2*i+2 > arr.length) return true;

  let left = (arr[i] <= arr[2*i+1]) && checkMinHeap(arr,(2*i+1));
  let right = (arr[i] <= arr[2*i+2]) && ((2*i+2) === arr.length || checkMinHeap(arr,(2*i+2)));

  return left && right;
}

let arr = [2,3,5,15,10,20,30];
console.log(checkMinHeap(arr,0));

//Iterative Method, O(n) here we traversing on internal node, not on leaf node, (n/2) ~ O(n), SC : O(1)
function iterativeCheckMin(arr){
  let len = arr.length;
  if(len <= 1){
    return true;
  }

  for(let i=0; i<Math.floor(len/2)-1; i++){ //check for internal node only.
    if(arr[i] > arr[2*i+1] || ((2*i+2 !== len) && arr[i] > arr[2*i+2])){
      return false;
    }
    return true;
  }
}
console.log(iterativeCheckMin(arr));