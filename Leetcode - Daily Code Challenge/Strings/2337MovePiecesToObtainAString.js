/* 2337. Move Pieces to obtain a string
05 Dec 2024, Leetcode POTD, String, Recursion Two Pointer

Input: start = "_L__R__R_", target = "L______RR"
Output: true
Explanation: We can obtain the string target from start by doing the following moves:
- Move the first piece one step to the left, start becomes equal to "L___R__R_".
- Move the last piece one step to the right, start becomes equal to "L___R___R".
- Move the second piece three steps to the right, start becomes equal to "L______RR".
Since it is possible to get the string target from start, we return true.
*/

/*Method1-use of recursion try, every other possible way
to find that start can we equal to target or not
TC: O(exponetion), SC: O(n^2)
TLE
*/
var canChange = function(start, target) {
  let map = new Map();
  return solve(start, target, map);
};

function solve(start, target, map) {
  // Base case: if the start string matches the target string
  if (start === target) {
      return true;
  }
  
  // Check if the result is already memoized
  if (map.has(start)) {
      return map.get(start);
  }
  
  let len = start.length;
  
  // Try all possible swaps for 'L' and 'R'
  for (let i = 0; i < len; i++) {
      if (start[i] === "L" && i > 0 && start[i - 1] === "_") {
          // Convert start string to an array for swapping
          let startArr = start.split("");
          // Swap with the left position
          [startArr[i], startArr[i - 1]] = [startArr[i - 1], startArr[i]];
          let newStart = startArr.join(""); // Convert back to string
          if (solve(newStart, target, map)) {
              return true; // If successful, return true
          }
      }
      if (start[i] === "R" && i < len - 1 && start[i + 1] === "_") {
          // Convert start string to an array for swapping
          let startArr = start.split("");
          // Swap with the right position
          [startArr[i], startArr[i + 1]] = [startArr[i + 1], startArr[i]];
          let newStart = startArr.join(""); // Convert back to string
          if (solve(newStart, target, map)) {
              return true; // If successful, return true
          }
      }
  }
  
  // Memoize the result
  map.set(start, false);
  return false; // If no solution is found
}

/*Method 2 - use of two pointer, just need to see the position of 
i and j on L and R, if there is L and in start i=1 and j=0 means
we can switch and same for R. TC: O(n), SC: O(1)
*/
const canChange = (start, target) => {
  let i=0, j=0;
  let startLen = start.length;
  let targetLen = target.length;

  while(i < startLen || j < targetLen){
    // Skip underscores in start and target
    while(i < startLen && start[i] === "_"){
      i++;
    }
    while(j <targetLen && target[j] === "_"){
      j++;
    }
    // If either pointer reaches the end, ensure both are at the end
    if(i===startLen || j===targetLen){
      return i===startLen && j===targetLen;
    }
    // Validate movements for 'L' and 'R'
    if(start[i] !== target[j] || (start[i] === "L" && i < j) || 
  (start[i] === "R" && i > j)){
    return false;
  }
  i++;
  j++;
  }
  return true;
}