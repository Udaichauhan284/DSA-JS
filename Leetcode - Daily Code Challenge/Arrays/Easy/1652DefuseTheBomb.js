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