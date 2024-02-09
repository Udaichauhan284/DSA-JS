/* Linear Search
Problem - give an array of 'n' elements and a target element 't'. find the index of 't' on the array. Return -1 if the target element is not found.
*/
//T.C O(n)
function LinearSearch(arr, target){
  let length = arr.length;
  for(let i=0; i<length; i++){
    //if arr length is only 1.
    if(length === 1) return i;

    if(arr[i] === target){
      return (`ELement found at index ${i}`);
    }
  }
  return -1;
}
console.log(LinearSearch([2,3,4,5,1,7], 10));
console.log(LinearSearch([7], 7));