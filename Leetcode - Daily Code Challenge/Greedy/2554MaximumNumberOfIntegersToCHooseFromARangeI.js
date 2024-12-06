/* 2554. Maximum Number of Integers to Choose From a Range I
06 Dec 2024, Leetcode POTD, Array, Greedy, Binary Search, Best is Greedy with Set

Input: banned = [1,6,5], n = 5, maxSum = 6
Output: 2
Explanation: You can choose the integers 2 and 4.
2 and 4 are from the range [1, 5], both did not appear in banned, and their sum is 6, which did not exceed maxSum.
*/

/*IN this we will use Greedy, we will take small 
number from startig and check in banned, if not
we add in sum and check with maxSUm to, and count++
TC: O(n), SC: O(m)
*/
const maxCount = (banned, n, maxSum) => {
  //take a set so that for searching banned number, we dont need to 
  //traverse over the array
  let set = new Set(banned);
  //main code
  let sum = 0;
  let count = 0;
  for(let num=1; num<=n; num++){
    if(set.has(num)){
      continue; //skip that banned number
    }
    //now add in sum
    if((sum+num) <= maxSum){
      count++; //increase the count of number
      sum += num; //now add in sum
    }else{
      break;
    }
  }
  return count;
}