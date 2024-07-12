/* 1717. Maximum Score From Removing Substrings
12 July 2024, Leetcode POTD, String Stack

Input: s = "cdbcbbaaabab", x = 4, y = 5
Output: 19
Explanation:
- Remove the "ba" underlined in "cdbcbbaaabab". Now, s = "cdbcbbaaab" and 5 points are added to the score.
- Remove the "ab" underlined in "cdbcbbaaab". Now, s = "cdbcbbaa" and 4 points are added to the score.
- Remove the "ba" underlined in "cdbcbbaa". Now, s = "cdbcba" and 5 points are added to the score.
- Remove the "ba" underlined in "cdbcba". Now, s = "cdbc" and 5 points are added to the score.
Total score = 5 + 4 + 5 + 5 = 19.
*/

/*In this we need to delete the string which is max first
x>y, then we need to delete the minStr later on.
use of stack, for deleting the str
TC: O(n+n) ~ O(2n) ~ O(n), SC: O(n)
*/
var maximumGain = function(s, x, y) {
  let n = s.length;
  let score = 0;

  let maxStr = (x > y) ? "ab" : "ba";
  let minStr = (x < y) ? "ab" : "ba";

  //first pass, to delete the maxStr
  let tempFirst = removeSubString(s,maxStr);
  let lenOfTempFirst = tempFirst.length;
  let removePairCount = Math.floor((n-lenOfTempFirst)/2);
  score += removePairCount * Math.max(x,y);

  //seccond pas, to delete the minStr now
  let tempSecond = removeSubString(tempFirst,minStr);
  let lenOfTempSecond = tempSecond.length;
  removePairCount = Math.floor((lenOfTempFirst - lenOfTempSecond)/2);
  score += removePairCount * Math.min(x,y);

  return score;
};
function removeSubString(s,matchStr){
  let st = [];
  for(let ch of s){
      if(st.length !== 0 && ch === matchStr[1] && st[st.length-1] === matchStr[0]){
          st.pop();
      }else{
          st.push(ch);
      }
  }

  let remainStr = "";
  while(st.length !== 0){
      remainStr += st.pop();
  }
  //need to revese the str
  return (remainStr.split("").reverse().join(""));
}