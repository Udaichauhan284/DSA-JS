/* 1652. Defuse The bomb
18 Nov 2024, Leetcode POTD< Array Easy, Sliding Window

Input: code = [5,7,1,4], k = 3
Output: [12,10,16,13]
Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.
*/
/*Brute Method-1 use of Simple method which are asked, use mod
with i in circular array.
TC: O(n)
*/
const decrypt = (code, k) => {
  let len = code.length;
  let result = Array(len).fill(0);
  if(k === 0){
    return result;
  }
  for(let i=0; i<len; i++){
    if(k > 0){
      for(let j=i+1; j<=i+k; j++){
        result[i] += code[j % len];
      }
    }else{
      //measn k < 0, need to add previous k code
      for(let j=i-Math.abs(k); j<i; j++){
        result[i] += code[(j + len) % len];
      }
    }
  }
  return result;
}

/*Method2- use of Sliding Window, we first take out the 
windowSum for all elem in code, then we use sliding Window
then we minus the prev one and add new one. for k > 0
sliding window i=1, j=k, for k < 0 sliding window i=n-abs(k)
j=n-1 TC: O(n), SC: O(1)
*/
var decrypt1 = function(code, k) {
  let len = code.length;
  let result = Array(len).fill(0);
  if(k === 0){
      return result;
  }
  //now set the ponuter of sliding window 
  let start = 1;
  let end = k;
  if(k < 0){
      start = len - Math.abs(k);
      end = len - 1;
  }
  //first take out the all windowSUm
  let windowSum = 0;
  for(let i=start; i<=end; i++){
      windowSum += code[i];
  }
  for(let ptr=0; ptr<len; ptr++){
      result[ptr] = windowSum;

      //now minus the prevone
      windowSum -= code[start % len];
      start++;

      //mow add the next one
      windowSum += code[(end+1)%len];
      end++;
  }
  return result;
};