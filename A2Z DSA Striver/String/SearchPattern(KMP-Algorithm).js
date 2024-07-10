/* Search Pattern (KMP - Algorithm)
Input:
txt = "geeksforgeeks"
pat = "geek"
Output: 
1 9
Explanation: 
The string "geek" occurs twice in txt, one starts are index 1 and the other at index 9. 
*/

/*USe of KMP, in this we also nee dot LPS till i
TC: O(n+m), SC: O(m)
*/
class Solution {
    
  search(pat, txt)
  {
      //your code here
      let n = txt.length;
      let m = pat.length;
      let result = [];
      if(m > n) return -1;
      let lps = Array(m).fill(0);
      this.computeLPS(pat,lps);
      let i=0; //for txt
      let j=0; //for pat
      while(i < n){
          if(pat[j] === txt[i]){
              i++;
              j++;
          }
          if(j === m){
              result.push(i-j+1); //for 1based index +1
              j = lps[j-1];
          }
          else if(i<n && pat[j] !== txt[i]){
              if(j !== 0){
                  j = lps[j-1];
              }else{
                  i++;
              }
          }
      }
      return result;
  }
  computeLPS(pat,lps){
      let m = pat.length;
      let len = 0;
      lps[0] = 0;
      let i = 1;
      while(i < m){
          if(pat[i] === pat[len]){
              len++;
              lps[i] = len;
              i++;
          }else{
              if(len !== 0){
                  len = lps[len-1]
              }else{
                  lps[i]=0
                  i++;
              }
          }
      }
  }
}