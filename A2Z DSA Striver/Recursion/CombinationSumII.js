/* 40. Combination Sum II
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
*/
 //Brute App - same as Combination Sum 1, just put ind+1 and take set for storing the unique element and then change the set to arr. TC O(2^n * klogSizeOfSet)
 //Optimal App - use of Backtraing and Recursion, O(2^n * k), SC O(k*x)

const combinationSumII = (candidates,target) => {
  let temp = [];
  let ans = [];
  //first sort the candidates, and then send it for recustion
  candidates.sort((a,b) => a-b);

  findCombination(0,candidates,target,ans,temp);
  return ans;
}
function findCombination(ind,arr,target,ans,temp){
  //base condition 
  if(target === 0){
    ans.push([...temp]);
    return;
  }

  for(let i=ind; i<arr.length; i++){
    //if elem is repeated elemen and also i > ind we are picking for 1st index too and 2nd ind elemen is same as old we are continue it.
    if(i>ind && arr[i] === arr[i-1]){
      continue;
    }
        //if currelemen is bigger that target break
    if(arr[i] > target){
      break;
    }

    temp.push(arr[i]);
    findCombination(i+1, arr, target-arr[i], ans, temp);
    temp.pop();
  }
}

let candidates = [10,1,2,7,6,1,5];
let target = 8;
console.log(combinationSumII(candidates,target));