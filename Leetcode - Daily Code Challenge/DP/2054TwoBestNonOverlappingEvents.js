/* 2054. Two Best Non-Overlapping Events
08 Dec 2024, Leetcode POTD, Array, Nested LOOP, DP, BInarySearch

Input: events = [[1,3,2],[4,5,2],[2,4,3]]
Output: 4
Explanation: Choose the green events, 0 and 1 for a sum of 2 + 2 = 4.
*/

/*Brute Method, simple use of Nested Loop, and we check, the
overlapping one,skip that and i===j skip that
TC: O(n^2), SC: O(1);
*/
var maxTwoEvents = function(events) {
  let len = events.length;
  let result = 0;
  for(let i=0; i<len; i++){
      let val = events[i][2];
      //we can take only event also, if that give me best ans
      result = Math.max(result, val);
      for(let j=0; j<len; j++){
          if(i === j){
              continue;
          }
          //overlapping
          if(events[i][1] >= events[j][0]){
              continue;
          }
          result = Math.max(result, val+events[j][2]);
      }
  }
  return result;
};



/*In method2-we can use Take/NonTake method, with
use of DP, where only curr pointer and count of 
take is changing, and for finding the next event
we can use Binary Search after sorting the events
in binary search we need to find next start time
greater than currEndTime.
TC: O(n * logn), SC: O(n * 3)
*/
var maxTwoEvents = function(events) {
  let len = events.length;
  
  // Sort events by start time
  events.sort((a, b) => a[0] - b[0]);
  
  // Initialize DP array
  let dp = Array.from({ length: len + 1 }, () => Array(3).fill(-1));
  
  // Start recursion
  return solve(events, 0, 0, dp);
};

function solve(events, curr, count, dp) {
  let len = events.length;

  // Base case
  if (count === 2 || curr >= len) {
      return 0;
  }

  // Memoization
  if (dp[curr][count] !== -1) {
      return dp[curr][count];
  }

  // Find the next valid event using binary search
  let nextValidPtr = binarySearch(events, events[curr][1]);

  // Choice: Take the current event
  let take = events[curr][2] + solve(events, nextValidPtr, count + 1, dp);

  // Choice: Skip the current event
  let notTake = solve(events, curr + 1, count, dp);

  // Store result
  dp[curr][count] = Math.max(take, notTake);
  return dp[curr][count];
}

function binarySearch(events, target) {
  let len = events.length;
  let left = 0;
  let right = len - 1;
  let result = len; // Default to out-of-bound index
  
  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);

      // Upper bound: Find the first event that starts after `target`
      if (events[mid][0] > target) {
          result = mid; // Update result
          right = mid - 1; // Check for earlier valid events
      } else {
          left = mid + 1;
      }
  }

  return result;
}