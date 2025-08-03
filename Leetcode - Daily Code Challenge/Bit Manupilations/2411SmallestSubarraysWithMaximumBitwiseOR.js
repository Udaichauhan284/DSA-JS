/*2411. Smallest Subarrays with Maximum Bitwise OR
29 July 2025, Leetcode POTD, Medium
Input: nums = [1,0,2,1,3]
Output: [3,3,2,2,1]
Explanation:
The maximum possible bitwise OR starting at any index is 3. 
- Starting at index 0, the shortest subarray that yields it is [1,0,2].
- Starting at index 1, the shortest subarray that yields the maximum bitwise OR is [0,2,1].
- Starting at index 2, the shortest subarray that yields the maximum bitwise OR is [2,1].
- Starting at index 3, the shortest subarray that yields the maximum bitwise OR is [1,3].
- Starting at index 4, the shortest subarray that yields the maximum bitwise OR is [3].
Therefore, we return [3,3,2,2,1]. 
*/

//Approach (Using frequency count and Xor Property)
//T.C : O(n)
//S.C : O(1)
var smallestSubarrays = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    
    const setBitIndex = new Array(32).fill(-1);
    // setBitIndex[j] = i => jth bit can be set by nums[i]

    for (let i = n - 1; i >= 0; i--) {
        let endIndex = i;

        for (let j = 0; j < 32; j++) {
            if ((nums[i] & (1 << j)) === 0) {
                if (setBitIndex[j] !== -1) {
                    endIndex = Math.max(endIndex, setBitIndex[j]);
                }
            } else {
                setBitIndex[j] = i;
            }
        }

        result[i] = endIndex - i + 1;
    }

    return result;
};




/*
1.Traverse the array from right to left.
2.For each index i, check:
->For every bit j (from 0 to 31), check if it's set in nums[i].
->If yes, update setBitIndex[j] = i.
->If no, and if setBitIndex[j] !== -1, then extend the subarray to setBitIndex[j] to include that bit in OR.

3.After processing all bits, the rightmost needed index is endIndex.

4.The length of subarray from i is: endIndex - i + 1.

5.Store it in result[i].

To get the max OR starting from index i, I need all bits that could possibly be set from i onwards. For each bit, if it's not in nums[i], I must look ahead and see the latest place it is set. My subarray must at least reach there.

TC: O(n*32)~O(n), SC: O(32)~O(1)
*/
var smallestSubarrays = function(nums) {
    let len = nums.length;
    let result = Array(len);
    let setBitIndex = Array(32).fill(-1); //setBitIndex[j] -> i; 
    //this means that jth bit can be set via elements at index i in nums.
    
    //now start traversing into nums array from right to left
    for(let i=len-1; i>=0; i--){
        let endIndex = i;
        //now traverse over the bits means j
        for(let j=0; j<32; j++){
            if((nums[i] & (1 << j)) === 0){ //if jth bit not set
                if(setBitIndex[j] !== -1){
                    endIndex = Math.max(endIndex, setBitIndex[j]);
                }
            }else{
                setBitIndex[j] = i;
            }
        }
        result[i] = endIndex - i + 1;
    }
    return result;
};