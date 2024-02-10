/* Climbing Staircase
Problem : Gien a staircase of 'n' steps count the number of distinct ways to climb to the top. You can either climb 1 or 2 steps at a time.
n=1, climbingStaircase(1) = 1. ways, 1
n=2, climbingStaircase(2) = 2, ways (1,1) and (2)
n=3, climbingStaicase(3) = 3, ways (1,1,1), (1,2) and (2,1)
n=4, climbingStaircase(4) = 5, ways (1,1,1,1), (1,2,1), (2,1,1), (2,2), (1,1,2)

Idea
At any give time, you can climb either 1 or 2 steps
if you have to climb to step 'n', we can only climb from step n-1 or n-2
calculate the ways we can climb to n-1 or n-2
*/

// O(n), same like fibonnaic series
function climbingStaicase(n){
  const numOfWays = [1,2]
  for(let i=2; i<=n; i++){
    numOfWays[i] = numOfWays[i-1] + numOfWays[i-2];
  }
  return numOfWays[n-1]; //this is becasue arr start with 0 indices. so to get the result for the entire staircase with 5 steps, you access the element at index 'n-1' (ie,. 'numOfWays[5-1]) which is the element at index 4. If you were to return numOfWays[n], it would refer to an index that is out of bounds in the array, leading to an undefined result. Therefore to get the correct result, we use 'numOfWays[n-1]' to access the last element in the array, which reperesent the number of ways for the entire staircase with 'n' steps.
}
console.log(climbingStaicase(1));
console.log(climbingStaicase(2));
console.log(climbingStaicase(5));