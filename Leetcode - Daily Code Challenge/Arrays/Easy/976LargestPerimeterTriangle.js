/* 976. Largest Perimeter triangle

28 sept 2025, leetcode potd
Input: nums = [2,1,2]
Output: 5
Explanation: You can form a triangle with three side lengths: 1, 2, and 2.
*/

/*
In this we can use the triangle propery
a <= b <= c, so a+b > c
so we sort the array and check this 
condition
TC: O(nlogn), SC: O(1)
*/
var largestPerimeter = function(nums) {
    let len = nums.length;
    nums.sort((a,b) => a-b);
    for(let i=len-3; i>=0; i--){
        if(nums[i]+nums[i+1] > nums[i+2]){
            return nums[i]+nums[i+1]+nums[i+2];
        }
    }
    return 0;
};