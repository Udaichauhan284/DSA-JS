/* 881. Boats TO Save People
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.
Example 1:

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
Example 2:

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)
*/
 //4 May 2024 - Daily Code Challenge, Topic- Array, Greedy, Two Pointer
 /* This is a greedy approach - we need to see first greedy wise, send heavy people first in one boat. and while sending heavy people check if light people on left side will able to go with him, heavy+ligh <= limit, move the pointer i++, j-- and increase the boat. TC : O(n), SC : O(1)
 */
const numRescueBoats = (people, limit) => {
  //first sort the people, so it will be easy to see light and heavy people on left and right respectively
  people.sort((a,b) => a-b);
  let len = people.length;
  let i = 0;
  let j = len-1;
  let boats = 0;
  while(i <= j){
    if(people[i]+people[j] <= limit){
      i++;
      j--;
    }else{
      //heavy weight people
      j--;
    }
    boats++;
  }
  return boats;
}
console.log(numRescueBoats([1,2],3)); //1
console.log(numRescueBoats([3,5,3,4],5)); //4