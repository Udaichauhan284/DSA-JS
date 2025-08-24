/*2348. Number of Zero Filled Subarrays
19 August 2025, Medium
Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation: 
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.
*/

//Approach-1 (Using simple math to calculate count of subarrays)
//T.C : O(n)
//S.C : O(1)
var zeroFilledSubarray = function(nums) {
    let result = 0n; // use BigInt for large results
    let n = nums.length;

    let i = 0;
    while (i < n) {
        let zeros = 0n;

        if (nums[i] === 0) {
            while (i < n && nums[i] === 0) {
                i++;
                zeros++;
            }
        } else {
            i++;
        }

        result += (zeros * (zeros + 1n)) / 2n;
    }

    return Number(result); // convert back if within safe integer range
};


//24 Aug 2025
/*In an array, if we need to find the subarray, we can
use the l*(l+1)/2 formula, l is len of nums array
TC: O(n), SC: O(1)
*/
var zeroFilledSubarray = function(nums) {
    let len = nums.length;
    let result = 0;
    let i=0;
    while(i < len){
        let zeros = 0;
        if(nums[i] === 0){
            //now check the adjacent ones
            while(i < len && nums[i] === 0){
                //increase the zeros count and i
                i++;
                zeros++;
            }
        }else{
            i++;
        }
        result += Math.floor(zeros * (zeros+1) / 2);
    }
    return result;
};

/*Approach 2, for having the count of contingous zero
we need simple have the variable contigousZero, in 
this we will have the zeros count, and in total we will
add the prevous zero count
0 -> 1
00 -> 3, for one 0 we know the ans is 1, now 1 more zero
is there so previous ans and add contigouszero count
1+2 => 3
TC: O(n), SC: O(1)
*/
var zeroFilledSubarray = function(nums) {
    let len = nums.length;
    let contigousZeros = 0;
    let result = 0;
    for(let i=0; i<len; i++){
        if(nums[i] === 0){
            contigousZeros++;
        }else{
            contigousZeros=0;
        }
        result += contigousZeros;
    }
    return result;
};