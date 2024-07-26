/* 131. Palindrome Partitioning
22 May 2024 - Leetcode Code Daily, Topic: Array, Backtraking, DP
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
*/
/* Used to solve by Bakctracking, also when applying backtracking
check for isPalindrome or not.
TC: O(n * 2^n), SC: O(n*2^n)
*/
var partition = function(s) {
  let temp = [];
  let ans = [];
  solve(s,0,temp,ans);
  return ans;
};
//main helper backtracking function
function solve(s,idx,temp,ans){
  if(idx === s.length){
      ans.push([...temp]);
      return;
  }
  for(let i=idx; i<s.length; i++){
      if(isPal(s,idx,i)){ //idx-starting index, i - ending index
          temp.push(s.substring(idx,i+1));
          solve(s,i+1,temp,ans);
          temp.pop();
      }
  }
}
//isPalindrome checking
function isPal(s,start,end){
  while(start <= end){
      if(s[start++] !== s[end--]){
          return false;
      }
  }
  return true;
}