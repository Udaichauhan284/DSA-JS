/* 2601 Prime Subtraction Operation
11 Nov 2024, Leetcode POTD, Array, Prime, Sieve

Input: nums = [4,9,6,10]
Output: true
Explanation: In the first operation: Pick i = 0 and p = 3, and then subtract 3 from nums[0], so that nums becomes [1,9,6,10].
In the second operation: i = 1, p = 7, subtract 7 from nums[1], so nums becomes equal to [1,2,6,10].
After the second operation, nums is sorted in strictly increasing order, so the answer is true.
*/

/*In this we need to move from right to left and than
compare nums[i] with nums[i+1] if curr one nums[i]
is greater than nums[i+1], then we find out less 
prime number and then subtract it and than compare
with nums[i+1]. TC: O(n * maxNum), SC: O(1000) ~ O(1)
if not 1000 if any m, then O(log(logm));
*/
const primeSubOperation = (nums) => {
  let len = nums.length;

  //take a primeArr fill be num till 1000, for check the prime number to substract from nums[i]
  let isPrime = Array(1000).fill(true);
  //now use sieve method to set prime number
  sieve(isPrime);

  ////now traverse from right to left and compare nums
  for(let i=len-2; i>=0; i--){
    //now check last two 
    if(nums[i] < nums[i+1]){
      //curr one is less than nextone, fine case
      continue;
    }

    //if not, measn we have nums[i]>=nums[i+1] case
        //now loop from 2 to that nums[i]
        for(let p=2; p<nums[i]; p++){ //O(maxNum)
          if(!isPrime[p]){
              continue;
          }

          if(nums[i]-p < nums[i+1]){
              //after the substraction of prime if
              //currNum is less than, measn okay
              nums[i] -= p;
              break;
          }
      }
      // here we check if we able to substract anything
      if(nums[i] >= nums[i+1]){
          return false;
      }
  }
  return true;
};

function sieve(isPrime){
  //mark 0 and 1 as false, as they are not prime
  isPrime[0] = false;
  isPrime[1] = false;

  for(let i=2; i*i<1000; i++){
      if(isPrime[i] === true){
          //is curr one is prime, so mark there
          //multiple as nonprime
          for(let j=i*i; j<1000; j+=i){
              isPrime[j] = false;
          }
      }
  }
}