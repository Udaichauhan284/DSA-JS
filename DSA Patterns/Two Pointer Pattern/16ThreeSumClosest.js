/* 16. 3Sum Closest
20 Jan 2025, leetcode medium
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/*In this i need to find the diff of total from
all 3 elem and from target, and compare the diff
which dif is less, save the ans, and when
total match with target return the resSum, untill
then do whatever twoSum do
TC: O(n), SC: O(1)
*/
var threeSumClosest = function(nums, target) {
    let len = nums.length;
    let resSum = 0;
    let diff = Number.MAX_VALUE;
    if(len < 3) return 0;
    //now sort the nums
    nums.sort((a,b) => a-b);

    for(let i=0; i<=len-3; i++){
        let left = i+1;
        let right = len-1;

        while(left < right){
            let total = nums[i]+nums[left]+nums[right];
            let d = Math.abs(total-target);
            if(d < diff){
                diff = d;
                resSum = total
            }

            if(total === target){
                return resSum
            }

            if(total < target){
                left++;
            }else{
                right--;
            }
        }
    }
    return resSum
};
