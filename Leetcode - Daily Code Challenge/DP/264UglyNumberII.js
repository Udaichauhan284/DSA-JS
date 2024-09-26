/* 264 Ugly Number II
18 August 2024, Leetcode POTD, Array, DP
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return the nth ugly number.
Input: n = 10
Output: 12
Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
*/

/*26 Sept, Brute Method, use of Map and we keep dividing
the num to check isUgly or not, and keep that in map
true and false
TC: O(nlogk), SC: O(m)
TLE
*/
var nthUglyNumber = function(n) {
  let map = new Map();
  let num = 1;
  while(n > 0){
      if(isUgly(num, map)){
          //is num is ugly decrease n
          n--;
      }
      num++;
  }
  return num-1;
};
function isUgly(num, map){
  if(num <= 0){
      return false;
  }
  if(num === 1){
      return true;
  }
  if(map.has(num)){
      return map.get(num);
  }
  if(num % 2 === 0 && isUgly(Math.floor(num/2), map)){
      map.set(num, true);
  }
  else if(num%3===0 && isUgly(Math.floor(num/3), map)){
      map.set(num, true);
  }
  else if(num%5===0 && isUgly(Math.floor(num/5), map)){
      map.set(num, true);
  }
  else{
      map.set(num, false);
  }
  return map.get(num);
}


/*Method 2- optimal one, use of Bottom Up DP, as we know
if we multiple anything in 2,3,5 we get the ugly number
so take three pointer i2,i3,i5 as 1, and also initial
arr[1] = 1 and then loop on i=2 to n to find out the ugly
TC: O(n), SC: O(n)
*/
var nthUglyNumber = function (n) {
  let arr = new Array(n + 1).fill(0);
  let i2 = 1;
  let i3 = 1;
  let i5 = 1;
  arr[1] = 1; //first ugly number will be 1 only
  for (let i = 2; i <= n; i++) {
      let i2UglyNum = arr[i2] * 2;
      let i3UglyNum = arr[i3] * 3;
      let i5UglyNum = arr[i5] * 5;

      //now find the minUgly one and add in arr[i]
      let minUglyNum = Math.min(i2UglyNum, Math.min(i3UglyNum, i5UglyNum));
      arr[i] = minUglyNum;
      //now we need to increase the i2,i3,i5 pointer
      //so check which one is equal to minUgly and increase the pointer
      if (minUglyNum === i2UglyNum) i2++;
      if (minUglyNum === i3UglyNum) i3++;
      if (minUglyNum === i5UglyNum) i5++;
  }

  //this is Bottom Up Dp, so need to return the last one
  return arr[n];
};