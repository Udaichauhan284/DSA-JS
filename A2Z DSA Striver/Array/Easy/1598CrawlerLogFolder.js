/* 1598. Crawler Log Folder
10 July 2024, Leetcode POTD, Array, String, Simulation, Stack
"../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
"./" : Remain in the same folder.
"x/" : Move to the child folder named x (This folder is guaranteed to always exist).

Input: logs = ["d1/","d2/","../","d21/","./"]
Output: 2
Explanation: Use this change folder operation "../" 2 times and go back to the main folder.
*/

/*Simulation Question
TC: O(n), SC: O(1)
*/
var minOperations = function(logs) {
  let depth = 0;
  let len = logs.length;
  for(let i=0; i<len; i++){
      if(logs[i] === "../"){
          if(depth !== 0){ //check depth = 0, so that depth not become -1
              depth--;
          }else{
              depth = 0;
          }
      }else if(logs[i] === "./"){
          //no change of depth, remianing in same folder
          depth = depth;
      }else{
          depth++;
      }
  }
  return depth;
};

/*This also be solved by using stack, when you see folder, push in stack
when you see ../ pop , and at last return the length of stack
TC: O(n), SC: O(n)
*/
var minOperations = function(logs) {
  let st = [];
  let len = logs.length;
  for(let i=0; i<len; i++){
      if(logs[i] === "../"){
          if(st.length !== 0)
          st.pop(); //delete the last folder, move back
      }else if(logs[i] !== "./"){
          st.push(logs[i]);
      }
  }
  return st.length;
};