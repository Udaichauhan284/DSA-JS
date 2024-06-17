/* 633. Sum of Square Numbers
17 June 2024 Leetcode POTD, Topic: Array, Binary Seach, Two Pointers.
Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

Example 1:
Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5

Example 2:
Input: c = 3
Output: false
*/
/*Method 1 - use of two loop (a*a) <= c
TC: O(c), SC: O(1)
*/
var judgeSquareSum = function (c) {
  for (let a = 0; a * a <= c; a++) {
    for (let b = 0; b * b <= c; b++) {
      if (a * a + b * b === c) {
        return true;
      }
    }
  }
  return false;
};

/*Method 2 - use of Binary Search, we need to find two number
a and b, for we will start the loop and for b we will use Binary
Search
TC: O(c * log(c)), SC: O(1)
*/
var judgeSquareSum = function (c) {
  for (let a = 0; a * a <= c; a++) {
    let bStart = 0;
    let x = c - a * a;
    let bEnd = x;
    while (bStart <= bEnd) {
      let mid = bStart + Math.floor((bEnd - bStart) / 2);
      if (mid * mid === x) {
        return true;
      } else if (mid * mid < x) {
        bStart = mid + 1;
      } else {
        bEnd = mid - 1;
      }
    }
  }
  return false;
};

 /*Method 3 - use of Two Pointer as we know, we get the ans a,b
 in the range of sqr root of c
 TC: O(sqrt(c)), SC: O(1)
 */
var judgeSquareSum = function(c) {
  let a = 0;
  let b = Math.floor(Math.sqrt(c));
  while(a <= b){
      let k = a*a + b*b;
      if(k < c){
          a++;
      }else if(k > c){
          b--;
      }else{
          return true;
      }
  }
  return false;
};
