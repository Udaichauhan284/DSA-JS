/* 47. Permutations II
2 Jan 2025, Leetcode, Recursion, Backtracking

Input: nums = [1,1,2]
Output:
[[1,1,2],
[1,2,1],
[2,1,1]]
*/

/*Method, in this we use the map, in that we put the
one of times num is apperaing, because we have 
repeating elem. then we will use same backtracking
TC: O(n * n!), n if for we are copying the elem in
result. SC: O(n)
*/
const permuteUnique = (nums) => {
  let len = nums.length;
  let result = [];
  let temp = [];
  let map = new Map();
  //now fill the mop, with the counts
  for(let num of nums){
    map.set(num, (map.get(num) || 0)+1);
  }
  solve(map,temp,result,len);
  return result;
}
function solve(map,temp,result,len){
  //base case
  if(temp.length === len){
    result.push([...temp]);
    return;
  }

  //now iterate over the map
  for(let [num, count] of map){
    if(count === 0) continue; //skip that num

    temp.push(num); //DO
    map.set(num, (map.get(num) || 0)-1); //delete from map, after taking it
    solve(map,temp,result,len); //Explore
    temp.pop();
    map.set(num, (map.get(num) || 0)+1);
  }
}


/*Method, in this we have duplicate elem, so we can use the Set to store the elem
and for every duplicate we skip it, in this we use the idx for loop and backtracking
method of swap. TC: O(n + n!), SC: O(n)
*/
var permuteUnique1 = function(nums) {
  let result = [];
  solve(0, nums,result);
  return result;
};
function solve(idx,nums, result){
  //base case
  if(idx === nums.length){
      result.push([...nums]);
      return;
  }

  //now take the set, to store the unique ele
  let uniqueSet = new Set();
  //now iterate over the nums
  for(let i=idx; i<nums.length; i++){
      //now check is curr nums[i] is in set
      if(uniqueSet.has(nums[i])) continue; //skip that one

      //otherwise put into the set
      uniqueSet.add(nums[i]);
      [nums[i], nums[idx]] = [nums[idx], nums[i]]; //swap i and idx value
      solve(idx+1,nums,result); //explore with idx+1;
      [nums[i], nums[idx]] = [nums[idx], nums[i]]; //again swap
  }
}