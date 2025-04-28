/* 2302. Count Subarrays With Score less than K
28 April 25, leetcode POTD, HARD
The score of an array is defined as the product of its sum and its length.

For example, the score of [1, 2, 3, 4, 5] is (1 + 2 + 3 + 4 + 5) * 5 = 75.
Given a positive integer array nums and an integer k, return the number of non-empty subarrays of nums whose score is strictly less than k.

A subarray is a contiguous sequence of elements within an array.

Input: nums = [2,1,4,3,5], k = 10
Output: 6
Explanation:
The 6 subarrays having scores less than 10 are:
- [2] with score 2 * 1 = 2.
- [1] with score 1 * 1 = 1.
- [4] with score 4 * 1 = 4.
- [3] with score 3 * 1 = 3. 
- [5] with score 5 * 1 = 5.
- [2,1] with score (2 + 1) * 2 = 6.
Note that subarrays such as [1,4] and [4,3,5] are not considered because their scores are 10 and 36 respectively, while we need scores strictly less than 10.
*/


/*In this we are taking elem and checking it score
by elem * len of subarr <= k, so in this we can use
the sliding window method, j will move till len
and in this loop, we use another loop where we check
the score*(j-i+1) >= k, subtract i elem from sum
and increase i
TC: O(2n), SC: O(1)
*/
var countSubarrays = function(nums, k) {
    let len = nums.length;
    let result = 0;
    let sum = 0;
    let i=0, j=0;
    while(j < len){
        //add the currelem in sum
        sum += nums[j];
        //now check the score in another while loop
        while(i <= j && (sum * (j-i+1)) >= k){
            //remove the i elem
            sum -= nums[i];
            i++;
        }
        result += j-i+1; //len of that valid subarr
        //because those elem will be the ans in res
        j++;
    }
    return result;
};