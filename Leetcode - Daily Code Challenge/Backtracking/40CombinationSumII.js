/* 40. Combination Sum II
13 August 2024, Leetcode POTD, Array, Backtracking

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
*/

/*Brute Method, in this we need to find the subset for all, and then need to check the
the sum of subArray to target if okay, then we sort and check the unique and push in
ans. TC: O(2^n * n), SC: O(n)
TLE
*/
var combinationSum2 = function (candidates, target) {
  let ans = [];
  let subsets = generateSubsets(candidates);

  // Check each subset
  for (let subset of subsets) {
      if (sumArray(subset) === target) {
          let sortedSubset = subset.sort((a, b) => a - b);
          if (!contains(ans, sortedSubset)) {
              ans.push(sortedSubset);
          }
      }
  }

  return ans;
};

// Function to generate all subsets
function generateSubsets(arr) {
  let subsets = [];
  let n = arr.length;

  // There are 2^n possible subsets
  for (let i = 0; i < (1 << n); i++) {
      let subset = [];
      for (let j = 0; j < n; j++) {
          if (i & (1 << j)) {
              subset.push(arr[j]);
          }
      }
      subsets.push(subset);
  }

  return subsets;
}

// Function to check if a subset is already in the answer
function contains(ans, subset) {
  for (let s of ans) {
      if (s.length === subset.length && s.every((value, index) => value === subset[index])) {
          return true;
      }
  }
  return false;
}

// Function to calculate the sum of an array
function sumArray(arr) {
  return arr.reduce((acc, value) => acc + value, 0);
}




/*Method 2- optimal one, use of Backtracking and recursion, need to sort the
arr, so that we can skip the duplicates, then same pick and non pick method
TC: O(2^n * n), but the break wll average TC: O(2^n * n)
SC: O(n)
*/
var combinationSum2 = function(candidates, target) {
  let temp = [];
  let ans = [];
  //need to sort the arr, so that we can skip the duplicates
  candidates.sort((a,b) => a-b);
  findCombination(0, candidates,target, temp, ans);
  return ans;
};
function findCombination(ind, candidates,target, temp, ans){
  //base case
  if(target === 0){
      ans.push([...temp]);
      return;
  }
  //main loop and code
  for(let i=ind; i<candidates.length; i++){
      if(i > ind && candidates[i] === candidates[i-1]) continue;
      if(candidates[i] > target) break;
      temp.push(candidates[i]);
      findCombination(i+1, candidates, target-candidates[i], temp, ans);
      temp.pop();
  }
}