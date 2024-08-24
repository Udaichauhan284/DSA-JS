/* 564 Find the closest palindrome
24 Augusr 2024, Leetcode POTD, String, HARD
Given a string n representing an integer, return the closest integer (not including itself), which is a palindrome. If there is a tie, return the smaller one.

The closest is defined as the absolute difference minimized between two integers.

Example 1:

Input: n = "123"
Output: "121"
Example 2:

Input: n = "1"
Output: "0"
Explanation: 0 and 2 are the closest palindromes but we return the smallest which is 0.

in this use big int, due to its large constraint
*/


/*In this we just need to maintain the len of string, even no need to leave 
the middle one, reverse the firstHalf and add to it, if len is odd, leave 
the middle one, copy first digit and reverse and paste to it.
TC: O(n), SC: O(n)~ O(1) almost constant space
*/
var nearestPalindromic = function(n) {
  let len = n.length;
  let mid = Math.floor(len / 2);
  let firstHalfLen = (len % 2 === 0) ? mid : (mid + 1);
  let firstHalf = BigInt(n.substr(0, firstHalfLen)); // Convert to BigInt

  let possibleAns = [];

  // Generate possible palindromes based on the first half
  possibleAns.push(solve(firstHalf, (len % 2 === 0)));
  possibleAns.push(solve(firstHalf + 1n, (len % 2 === 0))); // Increment firstHalf
  possibleAns.push(solve(firstHalf - 1n, (len % 2 === 0))); // Decrement firstHalf

  // Add edge cases
  possibleAns.push(BigInt(10) ** BigInt(len) + 1n); // Edge case: 999 -> 1001
  possibleAns.push(BigInt(10) ** BigInt(len - 1) - 1n); // Edge case: 1000 -> 999

  let originalNum = BigInt(n);
  let diff = BigInt(Number.MAX_VALUE);
  let result = null;

  // Evaluate the closest palindrome
  for (let num of possibleAns) {
      if (num === originalNum) continue;

      let currentDiff = num > originalNum ? num - originalNum : originalNum - num;

      if (currentDiff < diff || (currentDiff === diff && num < result)) {
          diff = currentDiff;
          result = num;
      }
  }

  return result.toString(); // Return the result as a string
};

function solve(firstHalf, isEven) {
  let firstHalfStr = firstHalf.toString();
  let reversePart;

  if (!isEven) {
      // If the length of n is odd, exclude the last digit of the first half before mirroring
      reversePart = firstHalfStr.slice(0, -1).split('').reverse().join('');
  } else {
      // If the length of n is even, mirror the entire first half
      reversePart = firstHalfStr.split('').reverse().join('');
  }

  // Combine the first half and its reverse to create the palindrome
  let resultStr = firstHalfStr + reversePart;
  return BigInt(resultStr); // Convert the result back to BigInt
}