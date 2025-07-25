/* 3487. Maximum Unique Subarray Sum After Deletion
25 July 2025, Leetcode POTD, Easy
Input: nums = [1,2,-1,-2,1,0,-1]

Output: 3

Explanation:

Delete the elements nums[2] == -1 and nums[3] == -2, and select the subarray [2, 1] from [1, 2, 1, 0, -1] to obtain the maximum sum.
*/

/*In this we need a sum of positive nums
as we need maxSubarray, so we can ignore 
the -ve nums, we can take that in other
variable negNum, else if we maintain the
set, and check is that currnum is in set
we skip if not, we add in max
TC: O(n), SC: O(n)for set
*/
var maxSum = function(nums) {
    let unique = new Set();
    let sum = 0;
    let maxNeg = -Infinity;
    for(let num of nums){
        if(num <= 0){
            maxNeg = Math.max(maxNeg, num);
        }else if(!unique.has(num)){
            //if set has not that num, add in sum
            sum += num;
            unique.add(num);
        }
    }
    return sum === 0  ? maxNeg : sum;
};