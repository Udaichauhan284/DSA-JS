/* 1593. Split a String Into the Max Number of Unique Substrings
21 Oct 2024, Leetcode POTD

Input: s = "ababccc"
Output: 5
Explanation: One way to split maximally is ['a', 'b', 'ab', 'c', 'cc']. Splitting like ['a', 'b', 'a', 'b', 'c', 'cc'] is not valid as you have 'a' and 'b' multiple times.

*/
/*IN this we have option to chose currone or currone plus next
one to explore if we able to form the maxCount or not. So 
use Recursion and backtracking, as we need to explore other 
options to for getting the maxCount. TC: O(2^n * n), SC: O(n)
use set for checking, we get only unique substring
*/
const maxUniqueSplit = (s) => {
  let set = new Set();
  let maxCount = {val:0};
  solve(s,0,set,0,maxCount);
  return maxValue.val;
}
function solve(s,idx,set,currCount,maxCount){
  //purn case
  //first check the currCount with best case for next one
  //if we have maximum maxCount and in best case we getting
  //less value, no need to count futher
  if(currCount + (s.length - idx) <= maxCount.val){
    return;
  }
  //base case for recursion
  if(idx >= s.length){
    maxCount.val = Math.max(maxCount.val, currCount);
    return;
  }
  //now explore into the string and check in set
  for(let j=idx; j<s.length; j++){
    let sub = s.substring(idx, j+1); //idndex, end index, exclude
    if(!set.has(sub)){
      set.add(sub); //DO
      solve(s,j+1,set,currCount+1,maxCount); //EXPLORE
      set,delete(sub); //UNDO
    }
  }
}