/* 3068. Find the Maximum Sum of Node Values
19 May 2024 - Leetcode Code Daily Challenge, Topic: Tree,Gredy
Input: nums = [1,2,1], k = 3, edges = [[0,1],[0,2]]
Output: 6
Explanation: Alice can achieve the maximum sum of 6 using a single operation:
- Choose the edge [0,2]. nums[0] and nums[2] become: 1 XOR 3 = 2, and the array nums becomes: [1,2,1] -> [2,2,2].
The total sum of values is 2 + 2 + 2 = 6.
It can be shown that 6 is the maximum achievable sum of values.
*/
/* Method 1-find the XOR of each num and if that is bigger than num, put into idleSum , 
increase the count 1, also take minDamge, to count the min of Damage,
if that num^k is less than num and out of loop if count is even means XOR happen in pair,
return idleSum, else return idleSum-minDamge
TC O(n), SC: O(1)
*/
var maximumValueSum = function(nums, k, edges) {
  let idleSum = 0;
  let count = 0;
  let minDamge = Number.MAX_VALUE;
  for(let num of nums){
      if((num^k) > num){
          idleSum += (num ^ k);
          count++;
      }else{
          idleSum += num;
      }
      //find out the minDamge
      minDamge = Math.min(minDamge, Math.abs(num - (num^k)));
  }
  //if count is even, measn XOR in pair
  if(count % 2 === 0){
      return idleSum;
  }
  else{
      return idleSum-minDamge;
  }
};

/* Method 2 - Greedy + Sorting
Rather taking MinDamge like in method 1, take array of profit
sort in this (num^k)-num, if -ve comes means damage, +ve mean profit
add into idleSum,this we need add like in pair,
TC: O(nlogn), SC O(n)
*/
var maximumValueSum1 = function(nums, k, edges) {
  let profit = [];
  let idleSum = 0;
  for(let num of nums){
      idleSum += num; //normal sum
      profit.push((num ^ k)-num); //-ve and +value
  }
  //now sort the profit in descending order, to form the pair
  profit.sort((a,b) => b-a);
  for(let i=0; i<profit.length-1; i+=2){
      let pairSum = profit[i] + profit[i+1];

      if(pairSum > 0){
          //min +ve value , profit, so add into idleSum
          idleSum += pairSum;
      }
  }
  return idleSum;
};