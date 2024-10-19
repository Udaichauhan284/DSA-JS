/*779 Kth Symbol IN Grammar
19 Oct 2024
We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.

Example 1:

Input: n = 1, k = 1
Output: 0
Explanation: row 1: 0
Example 2:

Input: n = 2, k = 1
Output: 0
Explanation: 
row 1: 0
row 2: 01

*/

/*In this we use recursion, and find the len of string
which is 2^n-1 which is given in question and find the 
min of len and then we check if k <= mid, we call func
again for n-1(previous state and k) and if k > min, we
call for (n-1, k-mid) in previous state, because previous
state is flipped version in new state after mid. TC:O(n)
SC: O(n) recurison stake space
*/
const kthGrammar = (n, k) => {
  //base case and also given in question
  if (n === 1 && k === 1) {
    return 0;
  }
  let len = 1 << (n - 1); //left shift works as pow(2,n-1)
  let mid = Math.floor(len / 2);
  if (k <= mid) {
    return kthGrammar(n - 1, k);
  } else {
    //measn k is bigger then mid
    let digit = kthGrammar(n - 1, k - mid);
    return 1 - digit;
    //as k is larger than mid, which
    //means we need to flip the digit from prev state
    //and return it, if digit will be 0, so 1-0=1, if digit
    //will be 1 then 1-1=0, it work as flip
  }
};
