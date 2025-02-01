/* 3151 Special Array I
01 Feb 25, Leetcode POTD, Array

Input: nums = [2,1,4]

Output: true

Explanation:

There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.
*/

//TC: O(n), SC: O(1)
var isArraySpecial = function(nums) {
    let len = nums.length;
    if(len === 1) return true;

    for(let i=0; i<len-1; i++){
        if(nums[i]%2 === nums[i+1]%2){
            //if they both ele have same parity
            return false;
        }
    }
    return true;
}

/*Use of Bitwise operator, we find the even and odd
by useing AND(&), AND will give for even 2 - 10, 0
and for odd 3 - 11 give 1,
and then we use Bitwise XOR (^), 1^0 = 1 return true
1^1 = 0, 0^0 = 0
*/
var isArraySpecial = function(nums) {
    let len = nums.length;
    if(len === 1) return true;

    for(let i=0; i<len-1; i++){
        if((nums[i] & 1) ^ (nums[i+1] & 1) === 0){
            //if they have same 1 or 0 
            //bitwise xor will give 0, return false
            return false;
        }
    }
    return true;
};