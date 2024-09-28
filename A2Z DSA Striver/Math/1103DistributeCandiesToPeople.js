/* 1103 Distribute Candies TO People
28 Sept 2024, Leetcode Daily Question, Math

Input: candies = 7, num_people = 4
Output: [1,2,3,1]
Explanation:
On the first turn, ans[0] += 1, and the array is [1,0,0,0].
On the second turn, ans[1] += 2, and the array is [1,2,0,0].
On the third turn, ans[2] += 3, and the array is [1,2,3,0].
On the fourth turn, ans[3] += 1 (because there is only one candy left), and the final array is [1,2,3,1].
*/

/*28 Sept 2024, Use of Math, we take a variable giveCandy
in loop we will store in ans[giveCandy % numPeople] +=
min(giveCandy+1, candies), increment giveCandy, decrement
candies. TC O(n) n=candies, SC: O(1) ignoring ans
*/

const distributeCandies = (candies, num_people) => {
  let ans = Array(num_people).fill(0);
  let giveCandy = 0;
  while(candies > 0){
    //this mod is doing as we move again on idx 0 for give remaingCandies
    ans[giveCandy % num_people] += Math.min(giveCandy+1, candies);
    //increment giveCandy, as moving forward
    giveCandy++;
    //decrement candies
    candies -= giveCandy; //we -ve candy which we given
  }
  return ans;
}