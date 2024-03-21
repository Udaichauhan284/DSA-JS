/* 216. Combination Sum III
Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

Example 1:
Input: k = 3, n = 7
Output: [[1,2,4]]
Explanation:
1 + 2 + 4 = 7
There are no other valid combinations.
*/

//Use of Optimal method same as combination sum II. pick and traverse for next pointers TC O(2^n * 9) SC O(2^n) * O(k)
// k is length of subset arr and n is target
const combinationSumIII = (k,n) => {
  //edge case
  if(k>n){
    return [];
  }

  let temp = [];
  let ans = [];

  findCombination(1,k,n,ans,temp);
  return ans;
}
const findCombination = (ind, k, n, ans, temp) => {
  if(n===0 && temp.length === k){
    ans.push([...temp]);
    return;
  }

  for(let i=ind; i<=9; i++){
    if(i>ind && temp.length >= k){
      break;
    }

    temp.push(i);
    findCombination(i+1, k, n-i, ans, temp);
    temp.pop();
  }
}
let k = 3;
let n = 7;
console.log(combinationSumIII(k,n)); // o/p [[1,2,4]]

console.log(combinationSumIII(3,9)); // o/p [[1,2,6],[1,3,5],[2,3,4]]