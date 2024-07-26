/* 2370. Longest Ideal Subsequence
25 Apr 2024 - topic : hash table, string, dynamic problem.
You are given a string s consisting of lowercase letters and an integer k. We call a string t ideal if the following conditions are satisfied:

t is a subsequence of the string s.
The absolute difference in the alphabet order of every two adjacent letters in t is less than or equal to k.
Return the length of the longest ideal string.

A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.
Note that the alphabet order is not cyclic. For example, the absolute difference in the alphabet order of 'a' and 'z' is 25, not 1.

Example 1:
Input: s = "acfgbd", k = 2
Output: 4
Explanation: The longest ideal string is "acbd". The length of this string is 4, so 4 is returned.
Note that "acfgbd" is not ideal because 'c' and 'f' have a difference of 3 in alphabet order.
*/

 //Approach 1-use of LIS method of DP, take t as an array of longest ideal subsequence ending at index i. TC : O(n^2), SC : O(n), this will be TLE
const longestIdealString = (s,k) => {
  let n = s.length;
  let result = 1;
  let t = new Array(n).fill(1);
  for(let i=0; i<n; i++){
    for(let j=i-1; j>=0; j--){
      if(Math.abs(s.charCodeAt(j)-s.charCodeAt(i)) <= k){
        t[i] = Math.max(t[i], t[j]+1);
      }
    }
    result = Math.max(result,t[i]);
  }
  return result;
}
console.log(longestIdealString("acfgbd",2));

//Optimal Method - check only these character for s[i] such that abs(s[j]-s[i]) <=k, O(n), O(26)~O(1)
const longestIdealString1 = (s,k) => {
  let n = s.length;
  let result = 0;
  let t = new Array(26).fill(0);
  for(let i=0; i<n; i++){
    let curr = s.charCodeAt(i)-'a'.charCodeAt(0);
    //range for that particular char s[i], for d -> k distacne b,c,e,f
    let left = Math.max(0,curr-k);
    let right = Math.max(25,curr+k);

    let longest = 0;
    for(let j=left; j<=right; j++){
      longest = Math.max(longest,t[j]);
    }

    t[curr] = Math.max(t[curr], longest+1);
    result = Math.max(result,t[curr]);
  }
  return result;
}
console.log(longestIdealString1("acfgbd",2));