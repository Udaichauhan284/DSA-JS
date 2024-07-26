/* 1137. N-th Tribonacci Number
23 Apr 2024
Topics
Math
Dynamic Programming
Memoization
The Tribonacci sequence Tn is defined as follows: 
T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
Given n, return the value of Tn.
Example 1:
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
*/
//Approach 1 - use of recursion O(3^n), SC : O(n) for recrusion 
//This will be give TLE, so use memoization with memo TC : O(n), SC : O(38) ~ O(1)
const tribonacci = (n) => {
  let t = new Array(38).fill(-1);
  return findTribonacci(n,t);
}
function findTribonacci(n,t){
  if(n===0) return 0;
  if(n===1 || n===2) return 1;
  if(t[n] !== -1) return t[n];

  let a = findTribonacci(n-1,t);
  let b = findTribonacci(n-2,t);
  let c = findTribonacci(n-3,t);

  return t[n] = a+b+c;
}
console.log(tribonacci(4));
console.log(tribonacci(25)); //1389537

//Approach 2- Bottom Up Method in DP, take a array of 38 and for loop TC : O(n), SC: O(38) ~ O(1);
const tribonacci1 = (n) => {
  let t = [38];
  t[0] = 0;
  t[1] = 1;
  t[2] = 1;
  for(let i=3; i<=n; i++){
    t[i] = t[i-1]+t[i-2]+t[i-3];
  }
  return t[n];
}
console.log(tribonacci1(25));

////Approach 3 - simple use of variable and swap of variable TC : O(n), SC : O(1)
const tribonacci2 = (n) => {
  if(n===0) return 0;
  if(n===1 || n===2) return 1;

  let a = 0;
  let b = 1;
  let c = 1;
  let d;
  for(let i=3; i<=n; i++){
    d = a+b+c;
    a=b;
    b=c;
    c=d;
  }
  return d;
}
console.log(tribonacci2(25));