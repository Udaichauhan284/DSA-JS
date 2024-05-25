/* 140. Word Break II
25 May 2024, Leetcode Code Daily Challenge,
Topic: Backtracking, String, SOrting, DP, HashTable
Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
Output: ["cats and dog","cat sand dog"]
*/
//Backtracking TC: O(2^n), SC: O(n)+O(2^n).
var wordBreak = function(s, wordDict) {
  let result = [];
  let set = new Set(wordDict);
  solve(0,s,set,"",result); //"" currSentence
  return result;
};
function solve(i,s,dict,currSen,result){
  if(i >= s.length){
      result.push(currSen);
      return;
  }
  for(let j=i; j<s.length; j++){
      let tempWord = s.substr(i,j-i+1);
      if(dict.has(tempWord)){
          let originalSen = currSen;
          if(currSen.length !== 0){
              currSen += " ";
          }
          currSen += tempWord; //take
          solve(j+1,s,dict,currSen,result); //explore
          //back to original not taking
          currSen = originalSen;
      }
  }
}

//Method 2, use of Backtracking, here we run loop of
//len 1 to s.length and take currWord and for remaingWord call
//the solve function and also Memoization, Time Complexity: O(n^3), SC: O(n^3)
var wordBreak1 = function(s, wordDict) {
  let dict = new Set(wordDict);
  let memo = {};
  return solve(s, dict, memo);
};

function solve(s, dict, memo) {
  if (s.length === 0) {
      return [""];
  }
  if (memo[s] !== undefined) {
      return memo[s];
  }
  let result = [];
  for (let len = 1; len <= s.length; len++) {
      let currWord = s.substr(0, len);
      if (dict.has(currWord)) {
          let remainingWord = s.substr(len);
          let remainingResult = solve(remainingWord, dict, memo);
          for (let w of remainingResult) {
              let toAdd = currWord + (w.length === 0 ? "" : " ") + w;
              result.push(toAdd);
          }
      }
  }
  memo[s] = result;
  return result;
}
