/* 670 Maximum Swap
17 Oct 2024, LEETCODE POTD, String, Math, Greedy
Input: num = 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
*/

/*In Brute Method, for every elem, we use nested loop and search for it
the num, we swap it and then find max if possible, update the maxOne
and then again swap it in original form. TC: O(n^2), SC: O(1)
*/
var maximumSwap = function(num) {
  let numArr = String(num).split('');
  let len = numArr.length;
  let maxNum = num; //this is default maxNum
  for(let i=0; i<len; i++){
      for(let j=i+1; j<len; j++){
          //now swap two adjacent and then check for max
          [numArr[i], numArr[j]] = [numArr[j], numArr[i]];
          //now check for maxOne, if this forming max or not
          maxNum = Math.max(maxNum, parseInt(numArr.join('')));
          //again swap it in original form for next elem
          [numArr[i], numArr[j]] = [numArr[j], numArr[i]];
      }
  }
  return maxNum;
};

/* This is better approach
IN this we need to look for the max at right side, so 
first convert num to string and then take a arr, for taking
the maxRightIndex for that curr ind-element. Then in again
loop check that maxRight is bigger then curr one, swap
TC: O(n+n), SC: O(n)
*/
var maximumSwap = function(num) {
  let numArr = String(num).split('');
  let len = numArr.length;
  let maxRightInd = Array(len).fill(0);
  //for last elem at right it itself is max one
  maxRightInd[len-1] = len-1;
  //now fill the maxRightInd
  for(let i=len-2; i>=0; i--){
      let maxRight = maxRightInd[i+1];
      if(numArr[i] > numArr[maxRight]){
          //if curr one is bigger so
          maxRightInd[i] = i; //curr one
      }else{
          maxRightInd[i] = maxRight; //old right one
      }
  }
  //now again traverse on, for finding the ans
  for(let i=0; i<len; i++){
      let maxRight = maxRightInd[i];
      if(numArr[i] < numArr[maxRight]){
          //if right one is bigger swap
          [numArr[i], numArr[maxRight]] = [numArr[maxRight], numArr[i]];
          return parseInt(numArr.join(''));
      }
  }
  return num;
};