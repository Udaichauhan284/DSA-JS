/*02 Dec 2024, Leetcode 15 Patters
3. Longest Substring Without Repeating Characters

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/
/*Optimal One-use of Two Pointer sliding window,
we move the rightPointer and we check that is
that avaiable in set if yes, then we move the left
pointer, if not we add that right one and find 
the maxLen. TC: O(n), SC: O(n)
*/
const lengthOfLongestSubstring = (s) => {
  let len = s.length;
  let maxLen = 0;
  let left = 0, right=0;
  let set = new Set();
  while(right < len){
    // now check the right one char, is it in set
    while(set.has(s[right])){
      //if yes, delete the left one and move
      set.delete(s[left]);
      left++;
    }
    //now add right one
    set.add(s[right]);
    maxLen = Math.max(maxLen, (right-left+1));
    right++;
  }
  return maxLen;
}