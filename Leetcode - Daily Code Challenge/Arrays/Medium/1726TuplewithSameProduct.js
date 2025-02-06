/*1726 Tuple with same product
07 Feb 25, Leetcode POTD, Array
Input: nums = [2,3,4,6]
Output: 8
Explanation: There are 8 valid tuples:
(2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
(3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)
*/

var tupleSameProduct = function(nums) {
    let products = new Map();
        let ans = 0, n = nums.length;

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let prod = nums[i] * nums[j];
                ans += (products.get(prod) || 0);
                products.set(prod, (products.get(prod) || 0) + 1);
            }
        }
        return ans * 8;
};