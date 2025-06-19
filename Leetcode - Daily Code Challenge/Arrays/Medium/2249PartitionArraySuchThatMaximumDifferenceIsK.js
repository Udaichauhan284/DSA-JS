/* 2294. Partition Array Such That maximum Difference is K
19 June 25, Leetcode POTD Medium
Input: nums = [3,6,1,2,5], k = 2
Output: 2
Explanation:
We can partition nums into the two subsequences [3,1,2] and [6,5].
The difference between the maximum and minimum value in the first subsequence is 3 - 1 = 2.
The difference between the maximum and minimum value in the second subsequence is 6 - 5 = 1.
Since two subsequences were created, we return 2. It can be shown that 2 is the minimum number of subsequences needed.
*/

//TC: O(nlogn+n)~O(nlogn), SC: O(1)
var partitionArray = function(nums, k) {
    let len = nums.length;
    nums.sort((a,b) => a-b);
    let minVal = nums[0];
    let count = 1;
    for(let i=1; i<len; i++){
        if(nums[i]-minVal > k){
            count++;
            minVal = nums[i];
        }
    }
    return count;
};