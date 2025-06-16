/* 2016. Maximum Difference Between Increasing Elements
16 June 2025, Leetcode POTD, Easy

Input: nums = [7,1,5,4]
Output: 4
Explanation:
The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4.
Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6, but i > j, so it is not valid.
*/

/*Brute Method
Use of Two Nested Loop
TC: O(n^2), SC: O(1)
*/
var maximumDifference = function(nums) {
    let len = nums.length;
    let maxDiff = -1;
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            if(i < j && nums[i] < nums[j]){
                maxDiff = Math.max(maxDiff, (nums[j] - nums[i]));
            }
        }
    }
    return maxDiff;
};



/*In Optimal Method, we initial first element min = nums[0]
and then check futher elem, if curr elem is greater then min one
means we able to find max elem, we will find the diff, otherwise
we will change min to nums[i]
TC: O(n), SC: O(1)
*/
var maximumDifference = function(nums) {
    let len = nums.length;
    let maxDiff = -1;
    let min = nums[0];
    for(let i=1; i<len; i++){
        if(nums[i] > min){
            //curr elem is greater then min, we will find the diff
            maxDiff = Math.max(maxDiff, (nums[i] - min));
        }else{
            //if currElem is not bigger then min, change the min
            min = nums[i];
        }
    }
    return maxDiff;
};