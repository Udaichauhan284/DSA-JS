/*2348. Number of Zero Filled Subarrays
19 August 2025, Medium
Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation: 
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.
*/

//Approach-1 (Using simple math to calculate count of subarrays)
//T.C : O(n)
//S.C : O(1)
var zeroFilledSubarray = function(nums) {
    let result = 0n; // use BigInt for large results
    let n = nums.length;

    let i = 0;
    while (i < n) {
        let zeros = 0n;

        if (nums[i] === 0) {
            while (i < n && nums[i] === 0) {
                i++;
                zeros++;
            }
        } else {
            i++;
        }

        result += (zeros * (zeros + 1n)) / 2n;
    }

    return Number(result); // convert back if within safe integer range
};
