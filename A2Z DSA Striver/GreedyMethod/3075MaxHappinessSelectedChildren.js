/* 3075. Maximize Happiness of Selected Children
09/May/2024 - Daily Leetcode Code Challenge - Topic Greedy, Array, Sorting
Input: happiness = [1,2,3], k = 2
Output: 4
Explanation: We can pick 2 children in the following way:
- Pick the child with the happiness value == 3. The happiness value of the remaining children becomes [0,1].
- Pick the child with the happiness value == 1. The happiness value of the remaining child becomes [0]. Note that the happiness value cannot become less than 0.
The sum of the happiness values of the selected children is 3 + 1 = 4.
*/
//First sort the happiness array, and take a counter, increment counter when you take element, and when you take new element subtract this counter to it. TC : O(nlogn), SC : O(1)
const maximumHappinessSum = function(happiness, k) {
  let count = 0;
  let maxSum = 0;
  //sort the happiness in desecending order
  happiness.sort((a,b) => b-a);

  //loop will run till k
  for(let i=0; i<k; i++){
    //need to take a max happiness
    maxSum += Math.max(happiness[i]-count, 0);
    count++;//increase the counter
  }
  return maxSum;
}
console.log(maximumHappinessSum([1,2,3],2));