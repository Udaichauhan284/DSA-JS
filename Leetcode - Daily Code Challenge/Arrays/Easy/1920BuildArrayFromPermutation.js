/* 1920. Build Array from permutaion
06 May 25, Leetcode POTD, EASY
Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
Explanation: The array ans is built as follows: 
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]
*/

//TC: O(n), SC: O(n) ~ O(1)
var buildArray = function(nums) {
    let len = nums.length;
    let ans = Array(len);
    for(let i=0; i<len; i++){
        ans[i] = nums[nums[i]]
    }
    return ans;
};


/*In this we apply math equation
in which we do add and multiple 
with the 1000 and mod 1000
TC: O(n), SC: O(1)
*/
var buildArray = function(nums) {
    let len = nums.length;
    for(let i=0; i<len; i++){
        nums[i] += 1000 * (nums[nums[i]] % 1000);
    }

    //modified to final value on the iteration
    for(let i=0; i<len; i++){
        nums[i] = Math.floor(nums[i] / 1000);
    }
    return nums;
};