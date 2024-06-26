/* Print all the subsequence of string
*/
//Method 1 - use pf Power Set, use of Bit Manipulation TC: O(2^n * n), SC: O(1)
function subsequence(str){
  let n = str.length;
  let ans = [];
  for(let mask = 0; mask<(1<<n); mask++){
      let sub = "";
      for(let i=0; i<n; i++){
          if(mask & (1<<i)){
              sub += str[i];
          }
      }
      if(sub.length > 0){
          ans.push(sub);
      }
  }
  ans.sort();
  return ans;
}
let str = "abc";
console.log(subsequence(str));

//Method 2 - use of Recursion TC: O(2^n), SC: O(n) recursion stack space
function main(){
  let str = "abc";
  let ans = "";
  solve(0,str,ans);
}
function solve(ind, str, ans){
  //base case
  if(ind === str.length){
      console.log(ans);
      return;
  }
  //pick
  ans += str[ind];
  solve(ind+1, str, ans);
  //popping out that char, while backtracking
  ans = ans.slice(0,-1);
  solve(ind+1, str, ans);
}
main();