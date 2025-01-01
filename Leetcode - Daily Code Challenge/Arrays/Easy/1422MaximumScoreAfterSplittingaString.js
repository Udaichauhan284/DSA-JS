/* 1422 Maximum Score After Splitting a String
01 Jan 2025, Leetcode POTD. Stirng

Input: s = "011101"
Output: 5 
Explanation: 
All possible ways of splitting s into two non-empty substrings are:
left = "0" and right = "11101", score = 1 + 4 = 5 
left = "01" and right = "1101", score = 1 + 3 = 4 
left = "011" and right = "101", score = 1 + 2 = 3 
left = "0111" and right = "01", score = 1 + 1 = 2 
left = "01110" and right = "1", score = 2 + 1 = 3
*/

/*IN brute Method, in nested loop we check from j=0 to j=i
and then j=i+1 to size. TC: O(n^2)
*/
const maxScore = (s) => {
  let len = s.length;
  let ans = 0;
  for(let i=0; i<len-1; i++){
    let curr = 0;
    //left split
    for(let j=0; j<=i; j++){
      if(s[j] === "0") curr++;
    }

    //now right split
    for(let j=i+1; j<len; j++){
      if(s[j] === "1") curr++;
    }

    ans = Math.max(ans, curr);
  }
  return ans;
}


/*In optimal Method, first we count the ones, and then in for loop
if traverse from left to right, so we will see if we get the ones
TC: O(n), SC: O(1)
*/
var maxScore = function(s) {
  let len = s.length;
  let ones = 0;
  //first count the ones
  for(let i=0; i<len; i++){
      if(s[i] === "1") ones++;
  }
  let zeros = 0;
  let ans = 0;
  //now count zeros and minus the ones count
  for(let i=0; i<len-1; i++){
      if(s[i] === "1"){
          ones--;
      }else{
          zeros++;
      }
      ans = Math.max(ans, ones+zeros);
  }
  return ans;
};