/* 2381. Shiftting Letters II
05 Jan 25, Leetcode POTD, Array, Difference Array Technique, String
Input: s = "abc", shifts = [[0,1,0],[1,2,1],[0,2,1]]
Output: "ace"
Explanation: Firstly, shift the characters from index 0 to index 1 backward. Now s = "zac".
Secondly, shift the characters from index 1 to index 2 forward. Now s = "zbd".
Finally, shift the characters from index 0 to index 2 forward. Now s = "ace".
*/

/*In this we use the Difference Array Technique method, for dire === 0,we minus -1
and for forward we add +1.
TC: O(s + n + n) ~ O(n), SC: O(n)
*/
var shiftingLetters = function(s, shifts) {
  let len = s.length;
  let differenceArr = Array(len).fill(0); //SC: O(n)
  //now fill the differenceArr
  for(let [left,right, dir] of shifts){ //O(shifts.length) ~ O(s)
      if(dir === 0){ //backward direction
          differenceArr[left] -= 1;
          if(right + 1 < len){
              differenceArr[right+1] += 1;
          }
      }else{
          //means dir === 1, forward firection
          differenceArr[left] += 1;
          if(right+1 < len){
              differenceArr[right+1] -= 1;
          }
      }
  }
  //now compute the cummSum
  for(let i=1; i<len; i++){ //O(n)
      differenceArr[i] += differenceArr[i-1];
  }

  //now form the s shifting
  let result = ""
  for(let i=0; i<len; i++){ //O(n)
      //first get the shift count
      let shift = differenceArr[i] % 26; // 0->25;
      if(shift < 0){
          shift += 26; //handling the negative case of shift
      }
      result += String.fromCharCode(
          ((s.charCodeAt(i) - 'a'.charCodeAt(0) + shift) % 26) + 'a'.charCodeAt(0));
  }
  return result;
};