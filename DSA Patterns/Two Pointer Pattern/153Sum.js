/* 15. 3Sum
20 Jan 2026, leetcode medium

*/
//TC: O(n^2), SC: O(1)
var threeSum = function(nums) {
    let len = nums.length;
    let result = [];
    if(len < 3) return result;
    nums.sort((a,b) => a-b); ///O(nlogn)
    //O(n^2)
    for(let i=0; i<=len-3; i++){ //O(n)
        if(i > 0 && nums[i] === nums[i-1]){
            continue; //skip the duplicate one
        }
        let n1 = nums[i];
        twoSum(nums, -n1, i+1, len-1, result); //O(n)
    }
    return result;
};
function twoSum(nums, target, left, right, result){
    while(left < right){
        if(nums[left]+nums[right] < target){
            left++
        }else if(nums[left]+nums[right] > target){
            right--;
        }else{
            while(left < right && nums[left]===nums[left+1]) left++;
            while(left < right && nums[right]===nums[right-1]) right--;
            result.push([-target, nums[left], nums[right]]);
            left++;
            right--;
        }
    }
}