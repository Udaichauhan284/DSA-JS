/* Merge the interval of Overlapping from a given array
*/
//Brute Approach. we just grouping the intervals by sorting and then doing in 2 for loop 
//TC O(nlogn) + O(2n)
function mergeOverlappingIntervals(nums){
  let len = nums.length;
  let ans = [];
  nums.sort((a,b) => a[0] - b[0]);

  for(let i=0; i<len; i++){
    let start = nums[i][0];
    let end = nums[i][1];
    if(ans.length && end <= ans[ans.length-1][1]){
      continue;
    }
    for(let j=i+1; j<len; j++){
      if(nums[j][0] <= end){
        end = Math.max(end, nums[j][1]);
      }else{
        break;
      }
    }
    ans.push([start,end]);
  }
  return ans;
}
let nums = [[1,3],[8,10],[2,6],[15,18]];
console.log(mergeOverlappingIntervals(nums));