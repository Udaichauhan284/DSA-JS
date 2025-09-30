/* 2221. Find Triangular Sum of an Array
30 sept 2025, leetcode potd, medium
Input: nums = [1,2,3,4,5]
Output: 8
Explanation:
The above diagram depicts the process from which we obtain the triangular sum of the array.
*/

/*Method 1, do what is it said, 
start while loop and do the sum
and assign that sum to nums
TC: O(n^2), SC: O(n)
*/
var triangularSum = function(nums) {
    while(nums.length > 1){
        //now take the temp array
        let temp = [];
        for(let i=0; i<nums.length-1; i++){
            temp.push((nums[i]+nums[i+1])%10);
        }
        //now assign the temp to nums and again use the temp
        nums = temp;
    }
    return nums[0]; //atlast only one element will there
};