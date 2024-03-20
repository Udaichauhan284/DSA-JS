/* leetcode 78. Subsets.
given an integer nums of unique element, return all possible subsets.
input : nums : [1,2,3]
o/p : [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]].  -- 2^n

solved using recusion O(2^n), SC O(2^n + n)
*/
const subSets = (nums) => {
  let temp = [];
  let result = [];
  function solve(nums,i,temp){
    if(i >= nums.length){
      result.push([...temp]);
      return;
    }

    temp.push(nums[i]); //take that i elem
    solve(nums,i+1,temp);
    temp.pop();
    solve(nums,i+1,[...temp]);
  }
  solve(nums,0,temp);
  return result;
}
// let nums = [1,2,3];
// console.log(subSets(nums));

//Bit minipulation
//Solve using Bit manupulation, 2^n or 1<<(leftshit)n, second loop j=0 to n, in this i check which bit is set (1<<j)&i; push into result; O(n*2^n)
const subSets1 = (nums) => {
  let result = [];
  let len = nums.length;
  for(let i=0; i<(1<<len); i++){
    let subsets = [];
    for(let j=0; j<len; j++){
      if((1<<j)&i){ //finding the set bitm whose elem should be written in result.
        subsets.push(nums[j]);
      }
    }
    result.push(subsets);
  }
  return result;
}
let nums = [1,2,3];
console.log(subSets1(nums));