/* 409. Longest Palindrome
04 June 2024 Leetcode POTD - String, Greedy
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome.
Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
*/
/*Method 1- use of set, iterate over string and check in set is
there a char present if yes, delete that and increase the result
as we can use that as pair for palindrome, if not present in set
add that char in set, at last when set is not empty measn there
is odd number of char still present in set, use that as central
ch for odd number of length palindrome TC: O(n),SC: O(n)
*/
var longestPalindrome = function (s) {
  let len = s.length;
  let set = new Set();
  let result = 0;
  for (let ch of s) {
    if (set.has(ch)) {
      set.delete(ch);
      result += 2;
    } else {
      set.add(ch);
    }
  }
  if (set.size !== 0) {
    result++;
  }
  return result;
};

/*Method 2- use of oddCharFreq counter, fo palindrome, we need 
even number of char, while setting in map, just check if that
ch freq is odd, so increase the count of oddFreq else decrease
at last when oddFreq is larger than 0 measn there is odd one
just remove that from len of s and add +1 for forming palidnrome
TC: O(n),SC: O(n)
*/
var longestPalindrome = function (s) {
  let len = s.length;
  let map = new Map();
  let oddFreq = 0;
  for (let ch of s) {
    //set the freq of chr in map
    map.set(ch, (map.get(ch) || 0) + 1);

    //now check if for each char freq is odd or not
    if (map.get(ch) % 2 !== 0) {
      oddFreq++;
    } else {
      oddFreq--;
    }
  }
  if (oddFreq > 0) {
    return len - oddFreq + 1;
  }
  return len;
};
