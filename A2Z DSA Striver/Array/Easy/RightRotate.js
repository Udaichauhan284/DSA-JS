//Right Rotate
//Brute Method - O(2n), O(n)
function rightRotateBrute(arr, k) {
  let len = arr.length;
  let temp = [];
  for (let i = 0; i < len; i++) {
    temp[(i + k) % len] = arr[i];
  }

  for (let i = 0; i < len; i++) {
    //copy temp to arr
    arr[i] = temp[i];
  }
  return arr;
}
console.log(rightRotateBrute([1, 2, 3, 4, 5], 1));
// [5,1,2,3,4]

//Right Rotation, in this while calling reverse, we jsut need to send the arr.length-k
//Better Method - O(n), O(1), here i first reverse the 0,k-1, then i reverse k to len-1, then i reverse all array. need the helper function too reverse
function rightRotate(arr, k) {
  let len = arr.length;
  k = k % len;
  if (k < 0) {
    //return the same array
    k = k + len;
  }

  reverse(arr, 0, len - k - 1);
  reverse(arr, len - k, len - 1);
  reverse(arr, 0, len - 1); // all array;
  return arr;
}
function reverse(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
console.log(rightRotate([1, 2, 3, 4, 5], 1)); //[ 5, 1, 2, 3, 4 ]
