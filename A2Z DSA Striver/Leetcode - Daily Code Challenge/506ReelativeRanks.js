/* 506. Relative Ranks
08/May/24 - Leetcode Code Challenge - Topic: Array, Sorting
Example 1:
Input: score = [5,4,3,2,1]
Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
Example 2:

Input: score = [10,3,8,9,4]
Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].
*/
//Simple first store the score-i index in map, an then sort the score and then fill the result arr, from getting the map[score[i]]. TC : O(nlogn)+O(n) ~ O(2nlogn) ~ O(nlogn), Sc : O(n)
const findRelativeRanks = (score) => {
  let len = score.length;
  let map = new Map();
  let result = [];
  for (let i = 0; i < len; i++) {
    map.set(score[i], i);
  }
  //sort the score
  score.sort((a, b) => b - a); //descending order.
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      let ath = map.get(score[i]);
      result[ath] = "Gold Medal";
    } else if (i === 1) {
      let ath = map.get(score[i]);
      result[ath] = "Silver Medal";
    } else if (i === 2) {
      let ath = map.get(score[i]);
      result[ath] = "Bronze Medal";
    } else {
      let ath = map.get(score[i]);
      result[ath] = String(i + 1);
    }
  }
  return result;
};

//Method-2 just find out the max of score and form a arr with that maxscore, in that score will be index, same as previous app, there i was taking map, here just need to take a ar and ran. TC: O(n), SC: O(max_scroe).
const findRelativeRanks1 = (score) => {
  let len = score.length;
  let result = new Array(len);
  let maxi = score[0];
  // Find the maximum score
  for (let i = 1; i < len; i++) {
    maxi = Math.max(maxi, score[i]);
  }
  // Initialize the scoreArr
  let scoreArr = new Array(maxi + 1).fill(-1);
  // Fill the scoreArr
  for (let i = 0; i < len; i++) {
    scoreArr[score[i]] = i;
  }
  let rank = 1;
  // Iterate over scoreArr to assign ranks
  for (let i = scoreArr.length - 1; i >= 0; i--) {
    if (scoreArr[i] !== -1) {
      let athlete = scoreArr[i];
      if (rank === 1) {
        result[athlete] = "Gold Medal";
      } else if (rank === 2) {
        result[athlete] = "Silver Medal";
      } else if (rank === 3) {
        result[athlete] = "Bronze Medal";
      } else {
        result[athlete] = String(rank);
      }
      rank++;
    }
  }

  return result;
};
