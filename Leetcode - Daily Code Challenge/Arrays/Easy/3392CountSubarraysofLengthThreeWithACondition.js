/* 3392. Count Subarrays of Length Three With a Condition
27 April 2025, Leetcode POTD, EASY
Input: nums = [1,2,1,4,1]

Output: 1

Explanation:

Only the subarray [1,4,1] contains exactly 3 elements where the sum of the first and third numbers equals half the middle number.
*/

/*In this we take 3 elem from nums i, i+1, i+2, and we go till
the len-2, and check the condition
TC: O(n), SC: O(1)
*/
const countSubarrays = (nums) => {
    let len = nums.length;
    let count = 0;
    for(let i=0; i<=len-2; i++){
        let first = nums[i];
        let second = nums[i+1];
        let third = nums[i+2];

        if((first+third) === second/2){
            count++;
        }
    }
    return count;
}