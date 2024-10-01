/*1497 Check If Array Pairs Are Divisble by K
01/Oct/2024, Leetcode POTD, Array, Mods, Hashing

Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5
Output: true
Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).
*/

/*Brute Method-we take a visisted array and then traverse on
arr with using nested for loop and we chekc if sum of i and j
if % k===0 and not visited we increase the count and mark
visited. count === n/2 true or false. TC: O(n^2), SC: O(n)
*/
var canArrange = function (arr, k) {
  let len = arr.length;
  if(len % 2 === 1){
      return false; //want event length
  }
  let count = 0;
  let visited = Array(len).fill(-1);
  for(let i=0; i<len; i++){
      for(let j=i+1; j<len; j++){
          if((arr[i]+arr[j]) % k === 0 && visited[i] === -1 && visited[j] === -1){
              count++;
              visited[i] = 1;
              visited[j] = 1;
          }
      }
  }
  if(count === Math.floor(len / 2)){
      return true;
  }else{
      return false;
  }
};



/*Optimal Method - Point to remeber, if num%k = x, and any 
other num%k = y, if x+y = k, measn they both can be pair.
so we use arr to store all the rem and then tarvaerse over
k/2 to check the other half in arr, if there true other wise
false. TC: O(n)+O(k/2) ~ O(n), SC: O(k)~ O(10^5) ~ O(1)
*/
var canArrange = function(arr, k) {
  let len = arr.length;
  if(len % 2 === 1) return false;
  let remArr = Array(k).fill(0); //len- k, because rem range will go till 0 to k-1;
  //now psuh rem in remArr
  for(let num of arr){
      let rem = (num%k + k) % k; //this for negative num
      remArr[rem]++; // rem -> increase in freq
  }

  //if we get all zero, so these sero should be even 
  if((remArr[0]%2) !== 0){
      return false;
  }
  //now traverse over the k/2
  for(let rem=1; rem <= Math.floor(k/2); rem++){
      let otherHalf = k - rem;
      if(remArr[otherHalf] != remArr[rem]){
          //if otherHAlf nad rem dont have same freq, so they cant be a pair, return false
          return false;
      }
  }
  return true;
};