/* 78. Subsets
nums[1,2,3]
o/p : [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]];
*/
//Use of Recusion : TC O(2^n), SCO(2^n + n)
const subsets = (nums) => {
  let result = [];
  let temp = [];
  findSolve(nums,0,temp, result);
  return result;
}
function findSolve(nums,idx,temp,result){
  if(idx >= nums.length){
    result.push([...temp]);
    return;
  }

  temp.push(nums[idx]);
  findSolve(nums,idx+1,temp,result);
  temp.pop();
  findSolve(nums,idx+1,[...temp],result);
}
let nums = [1,2,3];
// console.log(subsets(nums));

//use of recusion, we know for nums length 3, we getting output 8 - soo outer loop will go till i=0, to 2^n or 1<<n. in inner loopm we check the set bit using left shift with j AND with i, and put that in subsets.
const optimalSubsets = (nums) => {
  let result = [];
  let n = nums.length;
  for(let i=0; i<(1<<n); i++){
    let subsets = [];
    for(let j=0; j<n; j++){
      if((1<<j)&i){
      subsets.push(nums[j]);
      }
    }
    result.push(subsets);
  }
  return result;
}
console.log(optimalSubsets(nums));