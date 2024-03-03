/* 14. Longest Common Prefix
*/
const longestCommonPrefix = (strs) => {
  let ans = "";
  for(let i=0; i<strs[0].length; i++){
    for(let str of strs){
      if(i===str.length || str[i]!==strs[0][i]){
        return ans;
      }
    }
    ans += strs[0][i];
  }
  return ans;
}
let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));