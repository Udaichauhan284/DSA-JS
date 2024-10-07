/* 2696 Minimum String Length After Removing Substrings
07 Oct 2024, Leetcode POTD, String

Input: s = "ABFCACDB"
Output: 2
Explanation: We can do the following operations:
- Remove the substring "ABFCACDB", so s = "FCACDB".
- Remove the substring "FCACDB", so s = "FCAB".
- Remove the substring "FCAB", so s = "FC".
So the resulting length of the string is 2.
It can be shown that it is the minimum length that we can obtain.
*/

/*Use of Stack, if we are at B and we see the top of stack 
and get A then we pop it out. at last we check the stack len
TC: O(n), SC: O(n)
*/

const minLength = (s) => {
  let stack = [];
  for(let char of s){
    if(stack.length > 0 && char === "B" && stack[stack.length-1] === "A"){
      stack.pop();
    }else if(stack.length > 0 && char === "D" && stack[stack.length-1] === "C"){
      stack.pop();
    }else{
      stack.push(char);
    }
  }
  return stack.length;
}