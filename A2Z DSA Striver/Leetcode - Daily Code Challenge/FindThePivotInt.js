/* 2485. Find the pivot Interger
n = 8
o/p : 6 
explaination: 1+2+3+4+5+6 === 6+7+8
*/
//Approach 1. use of for loop, leftSum 1 to pivot, rightSum = totalSum - leftSUm + pivot TC O(n), SC O(1)
// var pivotInteger = function(n) {
//     let totalSum = Math.floor((n*(n+1))/2);
//     for(let pivot=1; pivot<=n; pivot++){
//       let leftSum = Math.floor((pivot*(pivot+1))/2);
//       let rightSum = totalSum - leftSum + pivot;

//       if(leftSum === rightSum){
//         return pivot;
//       }
//     }
//     return -1;
// };

//Approach 2: Binary Search, find mid and compare with totalSum, for findig the pivot = totalSum - leftSum(1toX) + x, that how we know x = sqrt(totalSum), so x^2 === totalSum
// TC O(logN) SC : O(1)

// var pivotInteger = function(n) {
//     let totalSum = Math.floor((n*(n+1))/2);

//     let left = 1;
//     let right = n;
//     while(left <= right){
//       let mid_pivot = left + Math.floor((right-left) / 2);
//       if(mid_pivot * mid_pivot === totalSum){
//         return mid_pivot;
//       }else if(mid_pivot * mid_pivot < totalSum){
//         left = mid_pivot+1;
//       }else {
//         right = mid_pivot-1;
//       }
//     }
//     return -1;
// };

// Approach 3. use same Math trick TC O(1), SC O(1)
var pivotInteger = function(n) {
  let totalSum = Math.floor((n*(n+1))/2);

  let pivot = Math.sqrt(totalSum);

  if(pivot % 1 !== 0){
    return -1;
  }else {
    return Math.floor(pivot);
  }
};