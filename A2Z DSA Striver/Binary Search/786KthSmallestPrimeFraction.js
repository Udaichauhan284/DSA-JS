/* 786. K-th Smallest Prime Fraction
10 May 2024- Leetcode daily code challenge - Topic: Array, Sorting, Binary Search
Input: arr = [1,2,3,5], k = 3
Output: [2,5]
Explanation: The fractions to be considered in sorted order are:
1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
The third fraction is 2/5.
*/
 //Brute Method - TC: O(n^2)+nlogn, SC: O(n^2)
var kthSmallestPrimeFraction = function(arr, k) {
    let fractionArr = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            fractionArr.push([arr[i]/arr[j],arr[i],arr[j]]);
        }
    }
    //need to sort the fraction arr, ascending
    fractionArr.sort((a,b) => a[0]-b[0]);
    return [fractionArr[k-1][1], fractionArr[k-1][2]];
};
//Optimal Method-use of Binary Search-also maintain the count, that count will be our ans. TC: O(nlogn), SC: O(1). Explaiation of this code in Stack and Queue notes section
const kthSmallestPrimeFraction = (arr, k) => {
  const len = arr.length;
  let low = 0; // Low value of binary search
  let high = 1; // High value of binary search

  while (low < high) {
      let mid = (low + high) / 2;
      let count = helperFun(arr, mid);

      if (count[0] < k) {
          low = mid;
      } else if (count[0] > k) {
          high = mid;
      } else {
          return [count[1], count[2]]; // Return the fraction when count is exactly k
      }
  }

  return null; // We should not reach here. This line is for avoiding any errors.
}

function helperFun(arr, target) {
  const len = arr.length;
  let count = 0;
  let num = 0;
  let deno = 1;

  let j = 1;
  for (let i = 0; i < len - 1; i++) {
      while (j < len && arr[i] >= arr[j] * target) {
          j++;
      }
      count += len - j;

      if (j < len && num * arr[j] < deno * arr[i]) {
          num = arr[i];
          deno = arr[j];
      }
  }

  return [count, num, deno];
}