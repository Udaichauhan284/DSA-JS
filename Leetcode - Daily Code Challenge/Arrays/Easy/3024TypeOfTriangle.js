/* 3024. Type of Triangle
Input: nums = [3,3,3]
Output: "equilateral"
Explanation: Since all the sides are of equal length, therefore, it will form an equilateral triangle.
Example 2:

Input: nums = [3,4,5]
Output: "scalene"
Explanation: 
nums[0] + nums[1] = 3 + 4 = 7, which is greater than nums[2] = 5.
nums[0] + nums[2] = 3 + 5 = 8, which is greater than nums[1] = 4.
nums[1] + nums[2] = 4 + 5 = 9, which is greater than nums[0] = 3. 
Since the sum of the two sides is greater than the third side for all three cases, therefore, it can form a triangle.
As all the sides are of different lengths, it will form a scalene triangle.

*/

//TC: O(1), SC: O(1)
var triangleType = function(nums) {
    let len = nums.length;
    for(let i=0; i<len-2; i++){
        if(nums[i]+nums[i+1] <= nums[i+2] || nums[i+1]+nums[i+2] <= nums[i] || nums[i]+nums[i+2] <= nums[i+1]){
            return "none";
        }
        else if(nums[i] === nums[i+1] && nums[i+1] === nums[i+2] && nums[i] === nums[i+2]){
            return "equilateral";
        }
        else if(nums[i] !== nums[i+1] && nums[i+1] !== nums[i+2] && nums[i] !== nums[i+2]){
            return "scalene";
        }else if(nums[i] === nums[i+1] || nums[i+1] === nums[i+2] || nums[i] === nums[i+2]){
            return "isosceles";
        }
    }
};



//TC: O(1), SC: O(1)

var triangleType = function(nums) {
    //array only have three side always, so take it out
    const [a,b,c] = nums;

    //check for all possibility
    if(a+b <= c || b+c <= a || a+c <= b){
        return "none";
    }
    if(a === b && b === c && a === c){
        return "equilateral";
    }
    if(a !== b && b !== c && a!== c){
        return "scalene";
    }
    return "isosceles";
};