/* 2918. Minimum Equal Sum of Two Arrays After Replacing Zeros
10 May 2025, Leetcode POTD Medium 
Input: nums1 = [3,2,0,1,0], nums2 = [6,5,0]
Output: 12
Explanation: We can replace 0's in the following way:
- Replace the two 0's in nums1 with the values 2 and 4. The resulting array is nums1 = [3,2,2,1,4].
- Replace the 0 in nums2 with the value 1. The resulting array is nums2 = [6,5,1].
Both arrays have an equal sum of 12. It can be shown that it is the minimum sum we can obtain.
*/

/*In this we want the mini sum, so we will iterate
over the nums1 and nums2, and we will add num,
for 0 we will add 1, and then we compare the sums
if sum1 < sum2 means sum1 is small so for increase
it we need to add sum1 and if zero in num1 so we
cant increase it, return -1
TC: O(2n)~O(n), SC: O(1)
*/
var minSum = function(nums1, nums2) {
    let zero1 = 0;
    let zero2 = 0; //count of zeros in both arr

    let sum1 = 0;
    let sum2 = 0;

    //now iterate over the nums1 first
    for(let num of nums1){
        sum1 += num;
        if(num === 0){
            zero1++; //increase the zero count
            sum1 += 1; //for min add 1
        }
    }

    //now iterate over the nums2 
    for(let num of nums2){
        sum2 += num;
        if(num === 0){
            zero2++;
            sum2 += 1;
        }
    }

    if(sum1 < sum2 && zero1 === 0 || sum2 < sum1 && zero2 === 0){
        return -1;
    }
    return Math.max(sum1, sum2); //at last retrun the max sum from both of it
};