/* 39. Combination Sum
candidates = [2,3,6,7], target = 7;
output : [[2,2,3],[7]]
*/
const combinationSum = (candidates, target) => {
  let result = [];
  let temp = [];
  let ind = 0;

  findCombination(ind,candidates,target, result, temp);
  return result;
}
function findCombination(i, arr, target, result, temp){
  //base condition
  if(i === arr.length){
    if(target === 0){
      result.push([...temp]);
    }
    return;
  }

  //main code
  if(arr[i] <= target){
    temp.push(arr[i]);
    //picking the ith elem
    findCombination(i,arr,target-arr[i],result,temp);
    temp.pop();
  }
  //non pick. the  ith elemen, move to next i elemnt
  findCombination(i+1, arr, target, result, temp);
}

let candidates = [2,3,6,7];
let target = 7;
console.log(combinationSum(candidates,target));