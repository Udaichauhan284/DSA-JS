/* 1395. COunt Number of Teams
29 July 2024, Leetcode POTD, Array, DP

Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).

Input: rating = [2,5,3,4,1]
Output: 3
Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1).
*/

/*Method 1 - use of Recursion
Recursion for Increasing condition, recursion for decreasing condition
TC: O(n)*O(n)*O(n) ~ O(n^3)
SC: O(3) for recursion stack space  ~ O(1)
TLE
*/
var numTeams = function(rating) {
  let n = rating.length;
  let ans = 0;
  for(let i=0; i<n; i++){
      ans += solveInc(i,1,rating);
      ans += solveDec(i,1,rating);
  }
  return ans;
};
function solveInc(i, count, rating){
  if(count === 3) return 1; //measn one team form
  let ans = 0;
  for(let ind=i+1; ind<rating.length; ind++){
      if(rating[i] < rating[ind]){
          ans += solveInc(ind, count+1, rating);
      }
  }
  return ans;
}
function solveDec(i, count, rating){
  if(count === 3) return 1; //measn one team form
  let ans = 0;
  for(let ind=i+1; ind<rating.length; ind++){
      if(rating[i] > rating[ind]){
          ans += solveDec(ind, count+1, rating);
      }
  }
  return ans;
}


/*Method 2 - use of Recursion+Memoization DP
Recursion for Increasing condition, recursion for decreasing condition
TC: O(n * n)
SC: O(n)
*/
var numTeams = function(rating) {
  let n = rating.length;
  let ans = 0;
  let dpInc = Array.from({length: n}, () => Array(3).fill(-1));
  let dpDec = Array.from({length: n}, () => Array(3).fill(-1));
  for(let i = 0; i < n; i++){
      ans += solveInc(i, 1, rating, dpInc);
      ans += solveDec(i, 1, rating, dpDec);
  }
  return ans;
};

function solveInc(i, count, rating, dpInc){
  if(count === 3) return 1; // means one team formed
  if(dpInc[i][count] !== -1) return dpInc[i][count];
  let ans = 0;
  for(let ind = i + 1; ind < rating.length; ind++){
      if(rating[i] < rating[ind]){
          ans += solveInc(ind, count + 1, rating, dpInc);
      }
  }
  return dpInc[i][count] = ans;
}

function solveDec(i, count, rating, dpDec){
  if(count === 3) return 1; // means one team formed
  if(dpDec[i][count] !== -1) return dpDec[i][count];
  let ans = 0;
  for(let ind = i + 1; ind < rating.length; ind++){
      if(rating[i] > rating[ind]){
          ans += solveDec(ind, count + 1, rating, dpDec);
      }
  }
  return dpDec[i][count] = ans;
}


/*Method 3 - use of Tabulization, base condition of count, means reverse
loop of count and all the condition will be same
TC: O(n^2)
SC: O(n)
*/
var numTeams = function(rating) {
  let n = rating.length;
  let dpInc = Array.from({length: n+1}, () => Array(4).fill(0));
  let dpDec = Array.from({length: n+1}, () => Array(4).fill(0));

  //base condition of count when count === 4
  for(let i=0; i<n; i++){
      dpInc[i][3] = dpDec[i][3] = 1;
  }

  //main code
  for(let cnt = 2; cnt > 0; cnt--){
      for(let ind=0; ind<n; ind++){
          let res1 = 0;
          let res2 = 0;
          for(let i=ind+1; i<n; i++){
              if(rating[ind] < rating[i]){
                  res1 += dpInc[i][cnt+1];
              }
              if(rating[ind] > rating[i]){
                  res2 += dpDec[i][cnt+1];
              }
          }
          dpInc[ind][cnt] = res1;
          dpDec[ind][cnt] = res2;
      }
  }

  let res = 0;
  for(let i=0; i<n; i++){
      res += dpInc[i][1];
      res += dpDec[i][1];
  }
  return res;
};



/*Method 4 - use of simple thought process, do what ask, 
take one elem and check for leftSmall and rightLarger count for inc
and counrLeftLarger and countRIghtSmaller for dec
TC: O(n. (n+n))~ O(n. 2n) ~ O(n^2)
SC: O(1)
*/
var numTeams = function(rating) {
  let n = rating.length;
  let teams = 0;
  //started j from 1 to n-1, as if we start from 0, nothing on left side
  for(let j=1; j<n-1; j++){
      //initialize all count for inc one
      let countSmallerLeft = 0;
      let countLargerRight = 0; 

      //for dec ones
      let countLargerLeft = 0;
      let countSmallerRight = 0;
      for(let i=0; i<j; i++){
          if(rating[i] < rating[j]){
              countSmallerLeft++; //for inc
          }else if(rating[i] > rating[j]){
              countLargerLeft++; //for dec
          }
      }

      //for right part
      for(let k=j+1; k<n; k++){
          if(rating[j] < rating[k]){
              countLargerRight++;
          }else if(rating[j] > rating[k]){
              countSmallerRight++;
          }
      }

      teams += (countSmallerLeft * countLargerRight) + (countLargerLeft * countSmallerRight);
  }
  return teams;
};