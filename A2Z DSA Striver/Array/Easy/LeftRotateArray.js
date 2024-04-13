//Left Rotation
//Brute Method O(k + len-k + len) ~ O(2n) ~ O(n), SC: O(n)
function rotate(arr, k) {
  let len = arr.length;
  k = k % len;
  let temp = [];
  let tc = 0;
  for (let i = k; i < len; i++) {
    temp[tc] = arr[i];
    tc++;
  }

  for (let i = 0; i < k; i++) {
    temp[tc] = arr[i];
    tc++;
  }

  for (let i = 0; i < len; i++) {
    arr[i] = temp[i];
  }
  return arr;
}
console.log(rotate([1, 2, 3, 4, 5], 1));

//Left Rotation
//Better Method - O(n), O(1), here i first reverse the 0,k-1, then i reverse k to len-1, then i reverse all array. need the helper function too reverse
function leftrotate(arr, k) {
  let len = arr.length;
  k = k % len;
  if (k < 0) {
    //return the same array
    k = k + len;
  }

  reverse(arr, 0, k - 1);
  reverse(arr, k, len - 1);
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
console.log(leftrotate([1, 2, 3, 4, 5], 1)); //[ 2, 3, 4, 5, 1 ]

