/* 139. Word Break
s = leetcode, wordDict = ["leet","code"]
o/p true

here for every ch(idx, we start loop for picking it or not)
Recursion and Memoization we can silve this
TC : for every idx or char, we have two options
O(2^n * n) - for subsring
*/
const wordBreak = (s,wordDict)=>{
  let n = s.length;

  //now create a set for accesing the wordDict, easy to access
  let wordSet = new Set(wordDict);

  //memo object for storing the memoization word
  let memo = {};

  return solve(0,s,wordSet,memo, n);
}
function solve(idx,s,wordSet,memo,n){
  if(idx === n){
    //means idx travere to all string
    return true;
  }

  //see in memo object
  if(memo[idx] !== undefined){
    return memo[idx];
  }

  for(let l=1; idx+l <= n; l++){
    let temp = s.substring(idx,idx+l);
    if(wordSet.has(temp) && solve(idx+l,s,wordSet,memo,n)){
      return memo[idx] = true;
    }
  }

  return memo[idx] = false;
}

let s = "leetcode";
let wordDict = ["leet","codee"];
console.log(wordBreak(s,wordDict));