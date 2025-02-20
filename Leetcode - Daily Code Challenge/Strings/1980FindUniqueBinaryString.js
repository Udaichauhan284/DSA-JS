/* 1980. Find Unique Binary String
20 Feb 25, Leetcode POTD, String
Input: nums = ["01","10"]
Output: "11"
Explanation: "11" does not appear in nums. "00" would also be correct.
*/


 //tc: O(n), SC: O(n)
 var findDifferentBinaryString = function(nums) {
    let result = [];
    let len = nums.length;
    //this is diagonal bit flipping technique
    for(let i=0; i<len; i++){
        if(nums[i][i] === "0"){
            result.push("1");
        }else{
            result.push("0");
        }
    }
    return result.join("");
};