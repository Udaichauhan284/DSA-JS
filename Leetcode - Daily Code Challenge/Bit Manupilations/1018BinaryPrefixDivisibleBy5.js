/* 1018. Binary Prefix Divisible By 5
24 Nov 2025, leetcode potd, EASY
Input: nums = [0,1,1]
Output: [true,false,false]
Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.
Only the first number is divisible by 5, so answer[0] is true.
*/

/* TC: O(n), SC: O(n) if big ignore ans O(1)
In this, we take one variable and make it
left shit and add curr Elem mod by 5
if prefix === 0 ture, else false
*/
var prefixesDivBy5 = function(nums) {
    let len = nums.length;
    let ans = Array(len).fill(true);
    let prefix = 0;
    for(let i=0; i<nums.length; i++){
        prefix = ((prefix << 1) + nums[i]) % 5;
        ans[i] = (prefix === 0);
    }
    return ans;
};