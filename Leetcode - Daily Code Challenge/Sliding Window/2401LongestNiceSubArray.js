/* 2401. Longest Nice Subarray
18 March 25, Leetcode POTD
Input: nums = [1,3,8,48,10]
Output: 3
Explanation: The longest nice subarray is [3,8,48]. This subarray satisfies the conditions:
- 3 AND 8 = 0.
- 3 AND 48 = 0.
- 8 AND 48 = 0.
It can be proven that no longer nice subarray can be obtained, so we return 3.

*/


/*Brute Method, in this we can use the nested
loop and then run the function in if to chck
if that elem is nice or not, for that, we
need to see the pos of 1, because AND with
0 will give 0, so for that we take a mask
and mask & nums[i] !== 0 return false
and then mask | nums[i] with this we will 
know the set bits and for next elem AND with
mask give the 0 or not
TC: O(n^3), SC: O(1)
*/
var longestNiceSubarray = function(nums) {
    let len = nums.length;
    let result = Number.MIN_VALUE;
    for(let i=0; i<len; i++){
        for(let j=i; j<len; j++){
            if(isNice(nums,i,j)){
                result = Math.max(result, (j-i+1));
            }else{
                break; //no need to take that j elem
                //need to move the i
            }
        }
    }
    return result;
};
function isNice(nums,start,end){
    let mask = 0;
    for(let i=start; i<=end; i++){
        if((mask & nums[i]) !== 0){
            return false;
        }
        mask |= nums[i]; //take the set bits in this mask
    }
    return true;
}



/*Better method, we can use the Mask function in nested 
loop only
TC:O(n^2), SC: O(1)
*/
var longestNiceSubarray = function(nums) {
    let len = nums.length;
    let result = Number.MIN_VALUE;
    for(let i=0; i<len; i++){
        let mask = 0;
        for(let j=i; j<len; j++){
            if((mask & nums[j]) !== 0){
                break; //for that j iteration
            }

            result = Math.max(result, (j-i+1));
            //set the mask
            mask |= nums[j];
        }
    }
    return result;
};




/*Optimal Method, we can use the sliding window method
for shrinking the window we can simple do the XOR
of mask with nums[i] and i++, other is same as better 
method
TC: O(n), SC: O(1)
*/
var longestNiceSubarray = function(nums) {
    let len = nums.length;
    let result = Number.MIN_VALUE;
    let i=0, j=0;
    let mask = 0;
    
    //sliding window
    while(j < len){
        while((mask & nums[j]) !== 0){
            //shrink the window, remove the i elem
            mask ^= nums[i];
            i++;
        }

        result = Math.max(result, (j-i+1));
        mask |= nums[j];
        j++;
    }
    return result;
};