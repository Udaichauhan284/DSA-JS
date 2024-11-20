/* 2516 Take K of Each Character From Left and Right
20 Nov 2024, Leetcode POTD, String, Recursion , Sliding Window
Input: s = "aabaaaacaabc", k = 2
Output: 8
Explanation: 
Take three characters from the left of s. You now have two 'a' characters, and one 'b' character.
Take five characters from the right of s. You now have four 'a' characters, two 'b' characters, and two 'c' characters.
A total of 3 + 5 = 8 minutes is needed.
It can be proven that 8 is the minimum number of minutes needed.
*/

/*Method 1- use of recursion, we see every possible
way, to check which gives min minutes
TC: O(2^n)
*/
const takeCharacters = (s, k) => {
  let len = s.length;
  if(k === 0) return 0;
  let count = Array(3).fill(0);
  let minMinutes = [Number.MAX_VALUE];
  solve(s,k,0,len-1,count,0,minMinutes);
  return minMinutes[0] === Number.MAX_VALUE ? -1 : minMinutes[0];
}
function solve(s,k,left,right,count,minutes,minMinutes){
  //base case
  if(count[0] >= k && count[1] >= k && count[2] >= k){
    minMinutes[0] = Math.min(minMinutes[0], minutes);
    return;
  }
  //if we cant move
  if(left > right) return ;

  //now take left char
  let leftCount = [...count]; //copy of count
  leftCount[s[left].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  solve(s,k,left+1,right,leftCount,minutes+1,minMinutes);

  //now take right count
  let rightCount = [...count]; //copy of count
  rightCount[s[right].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  solve(s,k,left,right-1,rightCount,minutes+1,minMinutes);
}


/*Method2. use of Sliding Window, in this we take a count of 
char and increase all its count and then we move in sliding
window to delete it, when count of char less then k , then
we shrink the window and with this we also calculate the size
of window too, windowNotDelete = max(windNotDelete, j-i+1)
TC: O(n), SC: O(1)
*/
var takeCharacters1 = function (s, k) {
  let len = s.length;
  if (k === 0) return 0;

  //now take a count of char, to delete
  let count_a = 0;
  let count_b = 0;
  let count_c = 0;
  //now count all the char
  for (let char of s) {
      if (char === 'a') {
          count_a++;
      } else if (char === 'b') {
          count_b++;
      } else {
          count_c++;
      }
  }
  if (count_a < k || count_b < k || count_c < k) {
      return -1; //not possible to delete k characters
  }

  //now sliding window
  let notDeletedWindowSize = 0;
  let i = 0, j = 0;
  while (j < len) {
      //delete char
      if (s[j] === 'a') {
          count_a--;
      } else if (s[j] === 'b') {
          count_b--;
      } else {
          count_c--;
      }

      //while doing deletion if char count less than k
      //so now shrink the windowsieze
      while (i <= j && (count_a < k || count_b < k || count_c < k)) {
          if (s[i] === 'a') {
              count_a++;
          } else if (s[i] === 'b') {
              count_b++;
          } else {
              count_c++;
          }
          i++;
      }
      notDeletedWindowSize = Math.max(notDeletedWindowSize, (j - i + 1));
      j++;
  }
  return len - notDeletedWindowSize;
};